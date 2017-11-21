import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyPaper from '../components/MyPaper';
import MyAppBar from '../components/MyAppBar';
import Button from 'material-ui/Button';
import MyCardDefault from '../components/MyCardDefault';
import TextGroupItem from '../components/TextGroup/TextGroupItem';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import ModalMessage from '../components/ModalMessage';

import Avatar1 from '../img/avatar-1.jpg';

import styles from '../theme/pages/RedeemStep1';


class RedeemStep1 extends React.Component {

    state = {
        spent: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : false,
        };
        this.closeMessage = this.closeMessage.bind(this);
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    closeMessage(){
        this.setState({ open: false });
        document.location.href='#redeem';
    };

    handleClickOpen() {
        this.setState({ open: true });
        setTimeout(()=>{
            this.closeMessage();
        }, 3000);
    };

    render(){
        return(
            <div>
                <MyAppBar
                    title="redeem"
                />
                <MyPaper title="Namaste, Starbucks" avatar={Avatar1}>
                    <MyCardDefault>
                        <ul style={{listStyleType: 'none', margin: 0, padding: 0, color: '#fff'}}>
                            <TextGroupItem param="Customer name" value="Jack Hidinks" />
                            <TextGroupItem param="Member ID" value="33010091" />
                            <TextGroupItem param="Store Credit Balance" value="97.12 USD" />
                        </ul>
                        <FormControl fullWidth className={this.props.classes.formControl}>
                            <InputLabel htmlFor="spent">Spent</InputLabel>
                            <Input
                                id="spent"
                                className={this.props.classes.labelInputInline}
                                disableUnderline="true"
                                value={this.state.spent}
                                onChange={this.handleChange('spent')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </MyCardDefault>
                    <Button color="primary" className={this.props.classes.fullWidth} onClick={this.handleClickOpen.bind(this)}>Done</Button>
                    <ModalMessage open={this.state.open}>
                        <div className={this.props.classes.messageContent}>Customer Name's New Gift <br/>Card balance is XXX</div>
                    </ModalMessage>
                </MyPaper>
            </div>
        );
    }
}

RedeemStep1.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(RedeemStep1));