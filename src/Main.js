import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './components/Menu';
import Heading from './templates/Headline';

// Stick to keeping this file just for the grid of the site. Where the core components will placed.

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
});

const MainGrid = (props) => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={36}>
				<Grid item xs={12}>
				<Menu />
				</Grid>
                <Grid item xs={12}>
                <Heading title="Pick your tech category" />
                </Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(MainGrid);
