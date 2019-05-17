import React, { Fragment } from 'react';
import { ICONS } from './icons';

// MaterialUI Imports
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Zoom from '@material-ui/core/Zoom';

const styles = {
    label: {
        fontSize: '1.5rem',
        marginRight: 15
    },
    input: {
        fontSize: '2rem'
    },
    icon: {
        verticalAlign: 'middle',
        marginLeft: 5
    }
}


interface IProps {
    classes: any;
    type?: string;
    value: string;
    label: string;
    description: string;
    handleChange(e: React.ChangeEvent<HTMLInputElement>, label: string): void;
}

const StringInput: React.FC<IProps> = props => {
    const { classes, label, handleChange, value, description } = props;
    return (
        <div>
            <FormControlLabel
                labelPlacement="start"
                control={
                    <Input
                        className={classes.input}
                        value={value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, label)} />
                }
                label={<Fragment>
                    {label}
                    <Tooltip title={description}
                        interactive TransitionComponent={Zoom}
                        classes={{ tooltip: classes.tooltip }}>
                        <Icon className={ICONS.tooltipInfo} classes={{ root: classes.icon }} fontSize='small' />
                    </Tooltip>
                    &nbsp;:
                </Fragment>}
                classes={{
                    label: classes.label
                }}
            />
        </div>
    );
};

StringInput.defaultProps = {
    type: 'string'
}

export default withStyles(styles)(StringInput);