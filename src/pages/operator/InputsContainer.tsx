import React, { Component } from 'react';
import StringInput from './StringInput';
import BooleanInput from './BooleanInput';
import { anyObject, configs, boolObject, stringObject } from '../../typeScript/interfaces';
import { isEmptyObject } from '../../utilities/util';

// MaterialUI Imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, Theme } from '@material-ui/core';


interface IProps {
    classes: any;
    activeSection: string;
    configs: configs;
}

interface IState {
    booleans: boolObject;
    strings: stringObject;
}

const styles = () => createStyles({
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
    cardHeaderTitle: {
        fontSize: '2.5rem'
    },
    cardContentRoot: {
        paddingTop: 0
    }
});

class InputsContainer extends Component<IProps, IState> {
    state = {
        booleans: {},
        strings: {}
    }

    handleBoolanChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        let booleans: boolObject = { ...this.state.booleans };
        booleans[name] = event.currentTarget.checked;
        console.log('handleBooleanChange', name, booleans[name])
        this.setState({ booleans });
    }

    handleStringChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        let strings: stringObject = { ...this.state.strings };
        strings[name] = event.currentTarget.value;
        this.setState({ strings });
    }

    handleSubmit = () => {
        let submitObj: any = { ...this.state.booleans, ...this.state.strings }
        console.log('submit', submitObj);
    }

    shouldActionsDisabled = (): boolean => {
        console.log('booleans', this.state.booleans);
        console.log('strings', this.state.strings);
        if (isEmptyObject(this.state.booleans) && isEmptyObject(this.state.strings)) {
            // return true;  revert back
            return false;
        }
        return false;
    }

    render() {
        const { classes, activeSection, configs } = this.props;
        const booleans: boolObject = { ...this.state.booleans };
        const strings: stringObject = { ...this.state.strings };
        console.log('InputsContainer', classes);
        return (
            <>
                <Card className={classes.card}>
                    <CardHeader
                        title={<span>{activeSection} settings</span>}
                        className={classes.cardHeader}
                        classes={{ title: classes.cardHeaderTitle }}
                    >
                    </CardHeader>

                    <CardContent classes={{ root: classes.cardContentRoot }}>
                        <List>
                            {configs[activeSection] && configs[activeSection].map((config: anyObject, index: number) => {
                                console.log('types', config.type, typeof config.type);
                                // ConfigType - Number
                                // if (config.type == '1') { 
                                if (index % 3 === 0) {
                                    return (
                                        <ListItem >
                                            <StringInput
                                                type='number'
                                                key={config.name}
                                                value={strings[config.name] ? strings[config.name] : ''}
                                                description={config.description}
                                                label={config.name} handleChange={this.handleStringChange} />
                                        </ListItem>
                                    )
                                }
                                // ConfigType - Boolean
                                // if (config.type == '4') {
                                if (index % 2 === 0) {
                                    return (
                                        <ListItem >
                                            {console.log('booleans[config.name]', config.name, booleans[config.name])}
                                            <BooleanInput
                                                checked={booleans[config.name] ? booleans[config.name] : false}
                                                label={config.name}
                                                description={config.description}
                                                handleChange={this.handleBoolanChange} />
                                        </ListItem>
                                    );
                                }
                                // ConfigType - String or URL
                                // if (config.type == '0' || config.type == '3') {
                                return (
                                    <ListItem >
                                        <StringInput
                                            key={config.name}
                                            value={strings[config.name] ? strings[config.name] : ''}
                                            description={config.description}
                                            label={config.name} handleChange={this.handleStringChange} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button variant="contained" color="secondary" className={classes.button} disabled={this.shouldActionsDisabled()}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit} disabled={this.shouldActionsDisabled()}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </>
        );
    }
}

export default withStyles(styles)(InputsContainer);