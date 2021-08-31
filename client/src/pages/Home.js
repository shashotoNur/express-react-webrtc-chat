import React from 'react'

import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from '../components/VideoPlayer';
import Sidebar from '../components/Sidebar';
import Notifications from '../components/Notifications';

const useStyles = makeStyles(theme => ({
        appBar: {
            borderRadius: 15,
            margin: '30px 5px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '600px',
            border: '2px solid black',
            [theme.breakpoints.down('xs')]: { width: '90%' }
        }
    }
));

export const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={ classes.appBar } position="static" color="inherit">
                <Typography variant="h2" align="center">WebRTC Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Sidebar>
                <Notifications />
            </Sidebar>
        </div>
    )
}
