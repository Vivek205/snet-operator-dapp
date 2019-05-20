import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';


interface IProps {
    show: boolean;
    classes: any;
}

const styles = (theme:Theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 99,
        postion:'absolute',
        margin: '45vh 45vw'
      }
});

const Loader: React.FC<IProps> = (props) => {
    const { show, classes } = props;
    return (
        <div>
            <Fade
                in={show}
                unmountOnExit
            >
                <CircularProgress
                classes={{root:classes.root}}
                />
            </Fade>
        </div>
    );
};

export default withStyles(styles)(Loader);