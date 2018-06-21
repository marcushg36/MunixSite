import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
    colorPrimary: {
        backgroundColor: '#c1071a'
    }
};

const MenuBar = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar classes={{colorPrimary: classes.colorPrimary}} color="primary">
				<Toolbar>
                    <Typography variant="title" color="inherit">
                        Munix
                    </Typography>
                </Toolbar>
            </AppBar>
		</div>
    );
}

export default withStyles(styles)(MenuBar);