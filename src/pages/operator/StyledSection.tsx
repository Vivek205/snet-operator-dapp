import React from 'react';

// MaterialUI Imports
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { ICONS } from './icons';

interface IProps {
    section: string;
    handleSectionChange(section: string): void;
}

const StyledSection: React.FC<IProps> = (props) => {
    const { section, handleSectionChange } = props;
    return (
        <>
            <ListItem button key={section} onClickCapture={() => { handleSectionChange(section) }}>
                <ListItemIcon><Icon className={ICONS[section] ? ICONS[section] : ICONS.default} /></ListItemIcon>
                <ListItemText primary={section} disableTypography />
            </ListItem>
        </>
    );
};

export default StyledSection;