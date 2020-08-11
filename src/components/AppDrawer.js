import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
/* Custom imports */
import { drawerItems } from '../constants/AppConstants';

const AppDrawer = (props) => {
    return (
        <React.Fragment>
            <div
                onClick={props.toggleDrawer('left', false)}
                onKeyDown={props.toggleDrawer('left', false)}
            >
                <Drawer open={props.showDrawer}>
                    <List>
                        {drawerItems.map((item) => {
                            return (
                                <ListItem button key={item.id}>
                                    <ListItemIcon><CheckIcon /></ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            )
                        })}
                    </List>
                    <Divider />
                </Drawer>
            </div>
        </React.Fragment>
    );
}

export default AppDrawer
