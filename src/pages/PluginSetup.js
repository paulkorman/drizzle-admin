import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/PluginSetup';


class PluginSetup extends React.Component {

    render(){
        return(
            <div>
                <MyAppBar
                    title="plugin setup"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <div className={this.props.classes.titleForm}>How to setup Plugin</div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>1</span>
                        <span className={this.props.classes.textStep}>Place this code "XXXXXXXX" to your website</span>
                    </div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>2</span>
                        <span className={this.props.classes.textStep}>Your website will display this button</span>
                        <span className={this.props.classes.wrapFakeBtn}>
                            <span className={this.props.classes.fakeBtn}>Gift Card Group Buy</span>
                        </span>
                    </div>
                    <div className={this.props.classes.rowStep}>
                        <span className={this.props.classes.numberStep}>3</span>
                        <span className={this.props.classes.textStep}>Click this button. If it direct to your restaurant's Group buy page. You setup successfully.</span>
                    </div>
                </MyPaper>
            </div>
        );
    }
}

PluginSetup.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(PluginSetup));