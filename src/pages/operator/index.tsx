/* eslint-disable */
import React, { Component } from 'react';
import SectionMenu from './SectionMenu';

import Header from '../../reusableComponents/Header';
import InputsContainer from './InputsContainer';
import ChannelHelper from '../../utilities/ChannelHelper';
import { grpc } from "@improbable-eng/grpc-web";
import { Code } from '../../typeScript/grpc';
import { anyObject, configs, stringObject } from '../../typeScript/interfaces';
import Loader from '../../reusableComponents/Loader';
import GetDaemonEndpoint from './GetDaemonEndpoint';

// Generated STUB Imports
import { ConfigurationService } from '../../protos/config/config_pb_service';
import { CommandRequest, ConfigurationResponse, ReadRequest, Response, UpdateRequest, ConfigurationParameter } from '../../protos/config/config_pb';

// MaterialUI Imports
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ErrorComponent from '../../reusableComponents/Error';

interface IProps {
    classes: anyObject;
    network: any;
}

interface IState {
    configs: configs;
    sections: string[];
    activeSection: string;
    showLoader: boolean;
    daemonEndpoint: string;
    showError: boolean;
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
    }
});

class Operator extends Component<IProps, IState> {
    channelHelper = new ChannelHelper();

    state = {
        activeSection: 'general',
        configs: {},
        sections: [],
        showLoader: true,
        daemonEndpoint: '',
        showError: false
    }

    componentDidMount = () => {
    }

    handleSectionChange = (activeSection: string) => {
        this.setState({ activeSection });
    }

    composeSHA3Message = (types: any[], values: any[]) => {
        var ethereumjsabi = require('ethereumjs-abi');
        var sha3Message = ethereumjsabi.soliditySHA3(types, values);
        var msg = "0x" + sha3Message.toString("hex");
        return msg;
    }

    getAccount = (): Promise<string> => {
        return new Promise((resolve: any) => {
            this.props.network.getAccount((address: string) => {
                console.log('resolved', typeof address);
                resolve(address);
            });
        })
    }

    getCurrentBlockNumber = (): Promise<number> => {
        return new Promise((resolve: any) => {
            this.props.network.getCurrentBlockNumber((blockNumber: number) => {
                resolve(blockNumber);
            })
        })
    }

    handleDaemonEndpoint = (daemonEndpoint: string) => {
        this.setState({ daemonEndpoint });
        this.fetchConfigDetails();
    }

    fetchConfigDetails = async () => {
        let sections: string[] = [];
        let configs: any = {};
        const readRequest: ReadRequest = new ReadRequest();
        let userAddress: string = '';
        let currentBlockNumber: number = 0;
        console.log('calling');
        userAddress = await this.getAccount();
        currentBlockNumber = await this.getCurrentBlockNumber();
        readRequest.setCurrentBlock(currentBlockNumber);
        console.log('blockNumber', currentBlockNumber);

        let msg = this.composeSHA3Message(
            ['string', 'uint256', 'address'],
            ['_Request_Read', currentBlockNumber, userAddress]);
        console.log('msg', msg);
        console.log('eth', this.props.network.eth.personal_sign);
        this.props.network.eth.personal_sign(msg, userAddress)
            .then((signed: string) => {
                console.log('metamask signature', signed);
                var stripped = signed.substring(2, signed.length)
                var byteSig = Buffer.from(stripped, 'hex');
                let buff = new Buffer(byteSig);
                readRequest.setSignature(buff);
                try {
                    grpc.invoke(ConfigurationService.GetConfiguration, {
                        request: readRequest,
                        host: this.state.daemonEndpoint,
                        onMessage: (message: ConfigurationResponse) => {
                            message.getConfigurationList().map((value: ConfigurationParameter, index: number) => {
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
                            });
                            console.log('configs fetched', configs);
                            this.setState({ configs, sections, activeSection: sections[0] });

                        },
                        onEnd: (code: Code, msg: string | undefined, trailers: grpc.Metadata) => {
                            console.log('end', '--code', code, '--msg', msg, '--trailers', trailers);
                            if (code === 2) { this.setState({ showError: true }) };
                            this.setState({ showLoader: false });
                        }
                    })
                } catch (err) {
                    console.log('Err: fetchConfigDetails', err);
                    this.setState({ showLoader: false });
                }
            })
            .catch((err: string) => {
                console.log('personal sign error', err);
                this.setState({ showLoader: false, showError: true });
            })
    }

    //Have to be typed properly
    updateConfigDetails = (submitArr: any[]) => {
        const updateRequest: any = submitArr;
        try {
            grpc.invoke(ConfigurationService.UpdateConfiguration, {
                request: updateRequest,
                host: this.state.daemonEndpoint,
                onMessage: (message: ConfigurationResponse) => {
                    console.log('length of response', message);


                },
                onEnd: (code: Code, msg: string | undefined, trailers: grpc.Metadata) => {
                    console.log('end', '--code', code, '--msg', msg, '--trailers', trailers);
                }
            })
        } catch (err) {
            this.setState({ showError: true });
            console.log('Err: UpdateConfigDetails', err);
        }
    }

    handleSubmit = (editedConfigs: stringObject): void => {
        let submitArr: any[] = [];
        Object.entries(editedConfigs).forEach(([key, value]) => {
            let nameValue = {
                name: key,
                value
            }
            submitArr.push(nameValue);
        })
        console.log('editedConfigs submitArr', submitArr);
        this.updateConfigDetails(submitArr);
    }

    toggleError = () => {
        if (this.state.daemonEndpoint !== '') {
            this.setState({ showLoader: true, showError: false });
            this.fetchConfigDetails();
        }
    }

    render() {
        const { classes } = this.props;
        const { activeSection, configs, showLoader, daemonEndpoint, showError } = this.state;
        console.log('showError', showError);
        if (daemonEndpoint === '') {
            return (<GetDaemonEndpoint handleDaemonEndpoint={this.handleDaemonEndpoint} />);
        }
        if (showLoader) {
            return (<Loader show={showLoader} label='Waiting for metamask sign in' />);
        }
        return (
            <div>
                <ErrorComponent show={this.state.showError} handleClose={this.toggleError} />
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
                            <InputsContainer classes={classes} activeSection={activeSection} configs={configs} handleSubmit={this.handleSubmit} />
                        </Typography>
                    </main>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Operator);