import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';


interface IProps {
    show: boolean;
    classes: any;
    label?:string;
}

const styles = (theme:Theme) => ({
    label:{
        
    },
    root: {
        flexGrow: 1,
        zIndex: 99,
        postion:'fixed',
        margin: '45vh 45vw'
      }
});

const Loader: React.FC<IProps> = (props) => {
    const { show, classes,label } = props;
    return (
        <div>
            <Fade
                in={show}
                unmountOnExit
            >
            <div className={classes.label}>
                <h3>{label}</h3>
            <CircularProgress
                classes={{root:classes.root}}
                />
            </div>
                
            </Fade>
        </div>
    );
};

export default withStyles(styles)(Loader);