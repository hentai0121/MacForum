import React, { Component} from "react";
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from '@material-ui/core';

import './index.css'
import './css/academics.css'

import w1 from "./images/academics/w1.jpg"
import w2 from "./images/academics/w2.jpg"
import w3 from "./images/academics/w3.jpg"
import w4 from "./images/academics/w4.jpg"
import w5 from "./images/academics/w5.jpg"

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const original_list = [{title: "How to write resume", 
			 desc: "Join today to write perfect resume and achieve your career goal!",
			 email: "lucyl3@mcmaster.ca",
			 location: "PGCL 1001",
			 image: w1,
			 w_ID: 0,
			 pst_date: new Date(2020, 10, 5, 10, 33, 30)},
			{title: "Maximize your efficiency",
			 desc: "Still struggling with procrastination? Join our workshop today to help you manage your time!",
			 email: "gigiH88@mcmaster.ca",
			 location: "MDCL 1024",
			 image:w2,
			 w_ID: 1,
			 pst_date: new Date(2020, 10, 13, 17, 24, 40)},
			{title: "Vlog your Life",
			 desc: "Try to vlog your life and share your amazing life experience with others!",
			 email: "vlogclub@mcmaster.ca",
			 location: "Online Zoom",
			 image: w3,
			 w_ID: 2,
			 pst_date: new Date(2020, 9, 27, 20, 13, 8)},
			 {title: "Learn about yourself!",
			 desc: "Want to know what type of personality you have? Join today to get to learn about yourself and make plan for the future!",
			 email: "juliap@mcmaster.ca",
			 location: "JHE 214",
			 image: w4,
			 w_ID: 3,
			 pst_date: new Date(2020, 10, 14, 18, 25, 30)},
			 {title: "Go play with photoshop",
			 desc: "Introduction to photoshop",
			 email: "PS_tut@mcmaster.ca",
			 location: "Student center secondfloor",
			 image: w5,
			 w_ID: 4,
			 pst_date: new Date(2020, 9, 13, 13, 24, 10)},]

class Academics extends Component {
	constructor(props){
		super(props);
		this.state = {
			workshop_list: [
			{title: "How to write resume", 
			 desc: "Join today to write perfect resume and achieve your career goal!",
			 email: "lucyl3@mcmaster.ca",
			 location: "PGCL 1001",
			 image: w1,
			 w_ID: 0,
			 pst_date: new Date(2020, 10, 5, 10, 33, 30)},
			{title: "Maximize your efficiency",
			 desc: "Still struggling with procrastination? Join our workshop today to help you manage your time!",
			 email: "gigiH88@mcmaster.ca",
			 location: "MDCL 1024",
			 image:w2,
			 w_ID: 1,
			 pst_date: new Date(2020, 10, 13, 17, 24, 40)},
			{title: "Vlog your Life",
			 desc: "Try to vlog your life and share your amazing life experience with others!",
			 email: "vlogclub@mcmaster.ca",
			 location: "Online Zoom",
			 image: w3,
			 w_ID: 2,
			 pst_date: new Date(2020, 9, 27, 20, 13, 8)},
			 {title: "Learn about yourself!",
			 desc: "Want to know what type of personality you have? Join today to get to learn about yourself and make plan for the future!",
			 email: "juliap@mcmaster.ca",
			 location: "JHE 214",
			 image: w4,
			 w_ID: 3,
			 pst_date: new Date(2020, 10, 14, 18, 25, 30)},
			 {title: "Go play with photoshop",
			 desc: "Introduction to photoshop",
			 email: "PS_tut@mcmaster.ca",
			 location: "Student center secondfloor",
			 image: w5,
			 w_ID: 4,
			 pst_date: new Date(2020, 9, 13, 13, 24, 10)},], 
			 w_ID: 5, title: "", desc: "", pst_date: null, email: "", location: "", image: null,
			 nw_state: false, post_state: false, join_msg: false, post_msg: false,
			 selectedStartDate:null, selectedEndDate:null,
			 type: "latest",
			 value: "",
			 current_post: {title: "", desc: "", email: "", location: "", pst_date: "", image: null},
			 joined_name: "", joined_email: "",
			 };

		this.create_workshop = this.create_workshop.bind(this);
		this.close_workshop = this.close_workshop.bind(this);
		this.add_workshop = this.add_workshop.bind(this);
		this.open_join = this.open_join.bind(this);
		this.cancel_join = this.cancel_join.bind(this);
		this.close_post_msg = this.close_post_msg.bind(this);
		this.open_join_msg = this.open_join_msg.bind(this);
		this.close_join_msg = this.close_join_msg.bind(this);
	}
	create_workshop(){
		this.setState({
			nw_state: true
		})
	}
	close_workshop(){
		this.setState({
			nw_state: false,
			title: "", 
			desc: "", 
			email: "", 
			location: "", 
			pst_date: "", 
			image: null
		})
	}
	open_join(){
		this.setState({
			post_state: true
		})
	}
	cancel_join(){
		this.setState({
			post_state: false,
			joined_name: "",
			joined_email: ""
		})
	}
	open_post_msg(new_workshop){
		this.setState({
			post_msg: true,
			current_post: new_workshop
		})
	}
	close_post_msg(){
		this.setState({
			post_msg: false
		})
	}
	open_join_msg(){
		if(this.state.joined_name.length>0 && this.state.joined_email.length>0){
			this.setState({
				join_msg: true,
				post_state: false,
				joined_name: "",
				joined_email: ""
			})
		}
		else{
			alert("All input fields with * are required!")
		}
	}
	close_join_msg(){
		this.setState({
			join_msg: false
		})
	}
	add_workshop(){
		if(this.state.title.length>0 && this.state.desc.length>0 && this.state.email.length>0 && this.state.location.length > 0){
			let new_title = this.state.title;
			let new_desc = this.state.desc;
			let new_date = new Date();
			let new_email = this.state.email;
			let new_location = this.state.location;
			let new_id = this.state.w_ID;
			this.setState({
				nw_state: false,
				w_ID: this.state.w_ID+1,
				workshop_list: [...this.state.workshop_list, {title: new_title, desc: new_desc, email: new_email, location: new_location, pst_date: new_date, w_ID: new_id}],
				title: "",
				desc: "",
				pst_date: "",
				email: "",
				location: ""
			});
		}
		else{
			alert("All input fields with * are required to create a workshop!")
		}
	}

  	render() {
  		let toshow = this.state.workshop_list;
  		var original = original_list;
  		if (this.state.selectedStartDate) toshow = toshow.filter(workshop => (workshop.pst_date.getTime() >= this.state.selectedStartDate.getTime()));
  		if (this.state.selectedEndDate) toshow = toshow.filter(workshop => (workshop.pst_date.getTime() <= this.state.selectedEndDate.getTime()));

  		if (this.state.type === "latest") toshow = toshow.slice().sort((a, b) => b.pst_date - a.pst_date);
  		if (this.state.type === "oldest") toshow = toshow.slice().sort((a, b) => a.pst_date - b.pst_date);

  		var title = "normal_title";
    	var content = "normal_content";
    	if (this.props.larger_text) {
      		title = "accessibility_title";
      		content = "accessibility_content";
    	}

    	return (
      	<div>

        	<div className="w_title blue_heavy_text">
        	<div className="w_title_text">Workshop</div>
        	<div className="w_btn">
        	<Button variant="outlined" color="primary" onClick={this.create_workshop}>New workshop</Button>
        	</div>
        	<div>
        		<Dialog open={this.state.nw_state} onClose={this.close_workshop} aria-labelledby="form-dialog-title" fullWidth>
        			<DialogTitle id="form-dialog-title">New Workshop</DialogTitle>
        			<DialogContent>
          				<TextField
          					required
          					autoFocus
            				margin="dense"
            				id="name"
            				label="Title"
            				type="text"
            				fullWidth="true"
            				onChange={(the_title) => this.setState({title: the_title.target.value})}/>
            			<TextField
            				required
            				margin="dense"
            				id="name"
            				label="Description"
            				multiline
            				rows={3}
            				type="text"
            				fullWidth="true"
            				onChange={(the_desc) => this.setState({desc: the_desc.target.value})}/>
            			<TextField
            				required
            				margin="dense"
            				id="name"
            				label="Location"
            				type="text"
            				fullWidth="true"
            				onChange={(the_location) => this.setState({location: the_location.target.value})}/>
            			<TextField
            				required
            				margin="dense"
            				id="name"
            				label="Email"
            				type="text"
            				fullWidth="true"
            				onChange={(the_email) => this.setState({email: the_email.target.value})}/>
        			</DialogContent>
        			<DialogActions>
          				<Button onClick={this.close_workshop} color="primary">
            			Cancel
          				</Button>
          				<Button onClick={this.add_workshop} variant="contained" color="primary">
            			Create
          				</Button>
        			</DialogActions>
      			</Dialog>
      		</div>
        	</div>

        	<div className = "latest_workshop">
        		<div className="lw_title blue_heavy_text">Recent workshops</div>
        		{original.map(recentworkshop => 
	        	<div key={recentworkshop.w_ID}>
	        		<div className="lw_container blue_light_background">
	        			<img className="image" src={recentworkshop.image} alt="workshop1" width="135.5px" height="95px"/>
	        			<div className="lw_text blue_heavy_text" onClick={this.open_post_msg.bind(this, recentworkshop)}>{recentworkshop.title}</div>
	        		</div>

		        </div>
		        )}
        	</div>


	        <ul className="options white_background">
	           	<li className="calendar">
	            	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	                	<KeyboardDatePicker
	                  		disableToolbar
	                  		variant="inline"
	                  		format="MM/dd/yyyy"
	                  		margin="normal"
	                  		id="date-picker-inline"
	                  		label="Start date"
	                  		value={this.state.selectedStartDate}
	                  		onChange={date => this.setState({selectedStartDate:date })}
	                  		KeyboardButtonProps={{ 'aria-label': 'change date', }}
	                	/>
	              	</MuiPickersUtilsProvider>              
	            </li>
	            <li className="calendar">
	              	<MuiPickersUtilsProvider utils={DateFnsUtils}>
	                	<KeyboardDatePicker
	                  		disableToolbar
	                  		variant="inline"
	                  		format="MM/dd/yyyy"
	                  		margin="normal"
	                  		id="date-picker-inline"
	                  		label="End date"
	                  		value={this.state.selectedEndDate}
	                  		onChange={date => this.setState({selectedEndDate:date })}
	                  		KeyboardButtonProps={{ 'aria-label': 'change date', }}
	                	/>
	              	</MuiPickersUtilsProvider>
	            </li>
	            <li className="academics_sort">
	              	<FormControl>
	                	<InputLabel>featured</InputLabel>
	                	<Select
	                  		value={this.state.type}
	                  		onChange={event => this.setState({type:event.target.value})}
	                	>
	                  		<MenuItem value={"latest"}>latest</MenuItem>
	                  		<MenuItem value={"oldest"}>oldest</MenuItem>
	                	</Select>
	              	</FormControl>
	            </li>
	        </ul>

	        <div className="workshop_content">
	        	<Dialog
	        		open={this.state.post_msg}
	        		onClose={event => (this.setState({post_msg: false}))}
	        		aria-labelledby="alert-dialog-title"
	        		aria-describedby="alert-dialog-description" fullWidth
	        	>
	        		<DialogTitle id="alert-dialog-title">{this.state.current_post.title}</DialogTitle>
	        		<DialogContent>
	          			<DialogContentText id="alert-dialog-description">
	          		 		Desc: {this.state.current_post.desc}<br />
	          		 		Location: {this.state.current_post.location}<br />
	          		 		Contact: {this.state.current_post.email}<br />
	          		 		PostDate: {this.state.current_post.pst_date.toLocaleString()}
	          			</DialogContentText>
	        		</DialogContent>
	        		<DialogActions>
	          			<Button onClick={this.close_post_msg} color="primary">
	            			Cancel
	          			</Button>
	        		</DialogActions>
	      		</Dialog>

	      	<Dialog open={this.state.join_msg} onClose={this.close_join_msg} aria-labelledby="form-dialog-title" fullWidth>
	        	<DialogTitle id="form-dialog-title">You have successfully joined!</DialogTitle>
	        	<DialogActions>
	          		<Button onClick={this.close_join_msg} color="primary">
	            		close
	          		</Button>
	        	</DialogActions>
	      	</Dialog>
	      	<Dialog open={this.state.post_state} onClose={this.cancel_join} aria-labelledby="form-dialog-title" fullWidth>
	        	<DialogTitle id="form-dialog-title">Join workshop</DialogTitle>
	        	<DialogContent>
	          		<TextField
	            		autoFocus
	            		required
	            		margin="dense"
	            		id="name"
	            		label="Name"
	            		type="text"
	            		onChange={(the_name) => this.setState({joined_name: the_name.target.value})}
	            		fullWidth
	            	/>
	            	<TextField
	            		required
	            		margin="dense"
	            		id="name"
	            		label="Email Address"
	            		type="email"
	            		onChange={(user_email) => this.setState({joined_email: user_email.target.value})}
	            		fullWidth
	            	/>
	        	</DialogContent>
	        	<DialogActions>	
	          		<Button onClick={this.cancel_join} color="primary">
	            		Cancel
	          		</Button>
	          		<Button onClick={this.open_join_msg} variant="contained" color="primary">
	            		Join
	          		</Button>
	        	</DialogActions>
	      	</Dialog>
	        {toshow.map(Newworkshop => 
	        	<div key={Newworkshop.w_ID} className="workshop_item grey_light_background">
	        		<div className={`item_title blue_heavy_text ${title}`} onClick={this.open_post_msg.bind(this, Newworkshop)}>{Newworkshop.title}</div>
	        		<div className="join_btn">
	        			<Button variant="outlined" 
	        					color="primary" 
	        					size="small" 
	        					onClick={this.open_join}>
	        				join
	        			</Button>
	        		</div>
	        		<div className={`item_desc blue_heavy_text ${content}`}>{Newworkshop.desc}</div>
	        		<div className={`item_date blue_medium_text ${content}`}>{Newworkshop.pst_date.toLocaleString()}</div>
	        	</div>
	        	)}
	        </div>
      </div>
    );
  }
}
 
export default Academics;