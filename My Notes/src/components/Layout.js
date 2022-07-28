import { makeStyles } from '@mui/styles'
import React from 'react'
import { Drawer } from '@mui/material'
import { Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const drawerWidth = 165

const useStyles = makeStyles((theme) => {
    return{
    page: {
        background: '#E5E4E2',
        width: '100%',
        padding: theme.spacing(3)
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex' //places the drawer side by side with the page content
    },
    active: {
        background: '#E5E4E2'
    },
    title:{
        padding: theme.spacing(13),
        alignItems: 'center'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    }
}})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

  return (
    <div className={classes.root}>
        {/* app bar */}
        <AppBar className={classes.appbar}>
            <Toolbar>
                <Typography>
                    Welcome Blood
                </Typography>
            </Toolbar>
        </AppBar>

        {/* side drawer */}
        <Drawer
        className={classes.drawer}
        variant='permanent' //Lets MUI know we want it on the page permanently 
        anchor="left" // position of drawer
        classes={{ paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant="h5" sx={{textAlign: 'center'}}
>
                    My Notes
                </Typography>
            </div>

       {/* List / Links */}
       <List>
        {menuItems.map(item => (
            <div className={location.pathname == item.path ? classes.active : null}>
            <ListItem key={item.text} button onClick={() => history.push(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItem>
            </div>
        ))}
       </List>
        </Drawer>


        <div className={classes.page}>
            {children}
        </div>
    </div>
  )
}
