import React, { useState } from 'react';
import StringInput from './StringInput';

// MaterialUI Imports
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = () => createStyles({
    card: {
        width: 500,
        minHeight: 300,
        margin: '0 auto',
        marginTop: 100
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        fontWeight: 900
    },
    pos: {
        marginBottom: 12,
    },
    description: {
        margin: 'auto 25'
    },
    button: {
        fontSize: '1.4rem',
        margin: 'auto 15px',
    },
    cardActions: {
        float: "right",
        paddingRight: 32,
        paddingBottom: 10
    },
});

interface IProps {
    classes: any;
    handleDaemonEndpoint(endpoint: string): void;
}

const GetDaemonEndpoint: React.FC<IProps> = (props) => {
    const { classes, handleDaemonEndpoint } = props;
    const [endpoint, handleEndpointChange] = useState('');

    // const handleSubmit = () => {
    //     handleDaemonEndpoint(endpoint);
    // }

    // return (
    //     <Card className={classes.card}>
    //         <Typography variant="h5" component="h2">
    //             Enter the daemon endpoint.
    //     </Typography>
    //         <Typography className={classes.pos} color="textSecondary">
    //             <input type='text' value={endpoint} onChange={(e) => handleEndpointChange(e.target.value)} />
    //         </Typography>
    //         <Typography className={classes.pos} color="textSecondary">
    //             <input type='button' onSubmit={handleSubmit} />
    //         </Typography>
    //     </Card>
    // );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
        handleEndpointChange(e.currentTarget.value);
    }

    const handleSubmit = () => {
        handleDaemonEndpoint(endpoint);
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                    Daemon Address
        </Typography>
                <Divider />
                <Typography variant="h5" component="h2" className={classes.description}>
                    Please provide the details of the daemon  for which the configuration has to be modified.
        </Typography>
                <br />
                <br />
                <br />
                <Typography >
                    <StringInput value={endpoint} label='Endpoint'
                        handleChange={handleChange} description='Enter Daemon Endpoint' />
                    <br />
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small"
                    className={classes.button}
                    variant="contained"
                    onClick={handleSubmit}
                    color='primary'>Submit</Button>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(GetDaemonEndpoint);