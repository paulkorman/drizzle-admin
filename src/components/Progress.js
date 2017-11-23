import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

import styles from '../theme/components/Progress';


function Progress(props) {
    const { classes, className, variant, ...other } = props;

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.progress} size={50} color='' />
        </div>
    );
}

Progress.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(Progress);
