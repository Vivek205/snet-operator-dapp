import React, { Component } from 'react';
import { Menu } from './';

// MaterialUI Imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import StyledSection from './StyledSection';

interface IProps {
    classes: any;
    sections: string[];
    handleSectionChange(activeSection: string): void;
}

const SectionMenu: React.FC<IProps> = (props) => {
    const { classes, sections, handleSectionChange } = props;
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                {sections.map((section: string, index: number) => (
                    <StyledSection key={section} section={section} handleSectionChange={handleSectionChange} />
                ))}
            </List>
        </Drawer>
    );
};

export default SectionMenu;