import React, { Component } from 'react';
import SectionMenu from './SectionMenu';

import Header from '../../reusableComponents/Header';
import InputsContaine from './InputsContainer';
import ChannelHelper from '../../utilities/ChannelHelper';
import { grpc } from "@improbable-eng/grpc-web";
import { Code } from '../../typeScript/grpc';

// Generated STUB Imports
import { ConfigurationService } from '../../protos/config/config_pb_service';
import { CommandRequest, ConfigurationResponse, ReadRequest, Response, UpdateRequest, ConfigurationParameter } from '../../protos/config/config_pb';

// MaterialUI Imports
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { anyObject, configs } from '../../typeScript/interfaces';

interface IProps {
    classes: anyObject;
}

interface IState {
    configs: configs;
    sections: string[];
    activeSection: string;
}

export interface Menu {
    name: string;
    icon: string;
}

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        position: 'relative'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    header: {
        margin: '0 auto'
    },
    card: {
        minWidth: 275,
        // width: '40%'
    },
    cardHeader: {
        textAlign: "left"
    },
    cardActions: {
        float: "right",
        paddingRight: 32,
        paddingBottom: 10
    },
    button: {
        fontSize: '1.4rem'
    }
});

class Operator extends Component<IProps, IState> {
    channelHelper = new ChannelHelper();

    state = {
        activeSection: 'general',
        configs: {},
        sections: []
    }

    componentDidMount = () => {
        this.fetchConfigDetails();
    }

    handleSectionChange = (activeSection: string) => {
        console.log('active Section', activeSection);
        this.setState({ activeSection });
    }

    fetchConfigDetails = (signature = '') => {
        let sections: string[] = [];
        let configs: any = {};
        const readRequest: ReadRequest = new ReadRequest();
        let count: number = 0;
        try {
            grpc.invoke(ConfigurationService.GetConfiguration, {
                request: readRequest,
                host: 'http://34.197.167.102:8088',
                onMessage: (message: ConfigurationResponse) => {
                    console.log('length of response', message.getConfigurationList().length);
                    message.getConfigurationList().map((value: ConfigurationParameter, index: number) => {
                        console.log('sections', value.getSection());
                        let config: any = {
                            name: value.getName(),
                            value: value.getValue(),
                            type: value.getType(),
                            editable: value.getEditable(),
                            description: value.getDescription(),
                            restartDaemon: value.getRestartDaemon(),
                            section: value.getSection()
                        }
                        if (!sections.includes(value.getSection())) { // If new section comes in the loop
                            sections.push(value.getSection());
                            configs[config.section] = [];
                        }
                        configs[config.section].push(config);
                        if (config.section === 'general') { count++; }
                    });
                    console.log('config Response', ConfigurationResponse);
                    this.setState({ configs, sections, activeSection: sections[0] });

                },
                onEnd: (code: Code, msg: string | undefined, trailers: grpc.Metadata) => {
                    console.log('end', '--code', code, '--msg', msg, '--trailers', trailers);
                }
            })
        } catch (err) {
            console.log('Err: fetchConfigDetails', err);
        }
    }

    render() {
        const { classes } = this.props;
        const { activeSection, configs } = this.state;
        return (
            <div>
                {/* <div  style={{position:"fixed",width:'100vh'}} className={classes.appBar}>
                <Header  />
                </div> */}
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h4" color="inherit" className={classes.header}>
                                SingularityNet Operator UI
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <SectionMenu classes={classes} sections={this.state.sections} handleSectionChange={this.handleSectionChange} />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography paragraph variant='display1'>
                            <InputsContaine classes={classes} activeSection={activeSection} configs={configs} />
                        </Typography>
                    </main>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Operator);