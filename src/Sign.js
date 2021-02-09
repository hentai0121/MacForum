import React, { Component } from "react";
import {Button} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './css/changemac.css';

class Sign extends Component {

	constructor(props) {
	    super(props);
	    this.state = {votes: 0, open: false, setOpen: false};
	    
	}

	sign(){
		
			this.setState({
				votes: this.state.votes + 1
											
			})				
	}

	handleClickOpen(){
		this.setState({
			setOpen: true											
		})
	}

	handleClose(){
		this.setState({
			setOpen: false
											
		})
	}

	render() {

		return (

			<div>	
				<div style={{
		                display: "flex",
		                marginLeft: "10px"
		              }}
		        >			   
		            <p><PeopleAltIcon/>  {this.state.votes}   supporters</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


		            <Button variant="outlined" color="primary" size="large" onClick={() => {
			          this.sign();
			          this.handleClickOpen();
			        }}>Sign</Button>
		        </div>
	              <Dialog
			        open={this.state.setOpen}
			        onClose={this.handleClose}
			        aria-labelledby="alert-dialog-title"
			        aria-describedby="alert-dialog-description"
			      >
			        <DialogTitle id="alert-dialog-title" >{"Sign successfully!"}</DialogTitle>
			        <DialogContent>
			          <DialogContentText id="alert-dialog-description">
			            You have signed this petition successfully.
			          </DialogContentText>
			        </DialogContent>
			        <DialogActions>
			          <Button onClick={this.handleClose.bind(this)} color="primary">
			            Close
			          </Button>
			          
			        </DialogActions>
			      </Dialog>
            </div>
        );    

	}
}

export default Sign;

