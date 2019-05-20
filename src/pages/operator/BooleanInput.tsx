import React, { Fragment } from 'react';
import { anyObject } from '../../typeScript/interfaces';
import { ICONS } from './icons';

// MaterialUI Imports
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Zoom from '@material-ui/core/Zoom';

const styles = {
    label: {
        fontSize: '1.5rem',
        marginRight: 15,
    },
    tooltip: {
        fontSize: '1.5rem',
    },
    icon: {
        verticalAlign: 'middle',
        marginLeft: 5
    }
}

interface IProps {
    classes: anyObject;
    checked: boolean;
    label: string;
    description: string;
    handleChange(e: React.ChangeEvent<HTMLInputElement>, label: string): void;
    disabled?: boolean;
}

const BooleanInput: React.FC<IProps> = (props) => {
    const { checked, label, handleChange, classes, description, disabled } = props;
    console.log('boolean input', label, '==', checked);
    return (
        <FormControlLabel
            labelPlacement="start"
            control={
                <Switch
                    checked={checked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, label)}
                    value="checkedA"
                    disabled={disabled}
                />
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
    );
};

BooleanInput.defaultProps = {
    disabled: false
}

export default withStyles(styles)(BooleanInput);