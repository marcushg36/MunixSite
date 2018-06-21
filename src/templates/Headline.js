import React from 'react';
import Typography from '@material-ui/core/Typography';

const Headline = (props) => {
    return (
        <Typography variant="headline" gutterBottom>
            {props.title}
        </Typography>
    );
}

export default Headline;
