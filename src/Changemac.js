import React, { Component } from "react";
import './index.css';
import './css/changemac.css';
import Sign from "./Sign";
import bus from "./images/changemac/bus.jpg";
import gym from "./images/changemac/gym.jpeg";
import Expand from "react-expand-animated";
import {
  BoxToggle,
  Button1,
  ExpandBoxes1  
} from "./Changemac_style.js";
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const demo1 = {photo: bus, category: "Transportation", des: "Bus pass definitely brings convenience to student's daily life. But for those students who live far away from campus have to drive to school instead of taking bus. Therefore, students should be able to choose if they want to have a bus pass and pay for it. Sign today to show support!", title: "Cancel Mandatory Bus Pass", supporter: 500, id1: 0}

const demo2 = {photo: gym, category: "Sports", des: "Many student are not used to go to the gym having their own preferred facilities to exercise. Paying a little amount of contribution or construction fees makes sense, however, it is not fair for those portion of student to pay for the full price gym membership.", title: "Cancel Mandatory Gym Membership", supporter: 2000, id1: 1}


class Changemac extends Component {

	constructor(props) {
	    super(props);
	    this.state = {previewSrc: "", type: "", open: false, itm: [demo1,demo2], nextID: 5, 
	    				academics: true, sports: true, facility: true, policy: true, 
	    				transportation: true, others: true, input: "", input2: "", input3: ""};
	    
	}

	submit(input,input2,input3){
	  if (input!== "" && input.length > 0 && input2.length>0 && input2!=="" && input3!=="" && input3>0){
	      this.setState({ 
	        nextID: this.state.nextID + 1,
	        input: "",
	        input2: "",
	        input3: "",
	        previewSrc: "",
	        open: false,
	        itm: [...this.state.itm, 
	              {photo: this.state.previewSrc, category: this.state.type, des: this.state.input2, title: this.state.input, supporter: this.state.input3, id1: this.state.nextID + 1}]     
	      })
	   }else{
	   		alert("Please fill in the required fields and make sure your supporters goal is a positive number.");
	   }

	    	    
	}

	handlePreview = (e) => {
	    e.preventDefault();

	    let file = e.target.files[0];
	    let reader = new FileReader();

	    if (e.target.files.length === 0) {
	      return;
	    }

	    reader.onloadend = (e) => {
	      this.setState({
	        previewSrc: [reader.result]
	      });
	    }

	    reader.readAsDataURL(file);
	  }

	toggle = () => {
	    this.setState(prevState => ({ open: !prevState.open }));
	};

	flipacademics() { this.setState({academics: !this.state.academics  }); }
    flipsports() { this.setState({sports: !this.state.sports  }); }
    flipfacility() { this.setState({facility: !this.state.facility  }); }
    flippolicy() { this.setState({policy: !this.state.policy  }); }
    fliptransportation() { this.setState({transportation: !this.state.transportation  }); }
    flipothers() { this.setState({others: !this.state.others  }); }

	render() {

		var toshow = this.state.itm;
		const styles = {
	       open: { background: "#ecf0f1" }
	    };
	    const transitions = ["height", "opacity", "background"];

	    if (!this.state.academics) toshow = toshow.filter( x => !(x.category === "Academics") );
	    if (!this.state.sports) toshow = toshow.filter( x => !(x.category === "Sports") );
	    if (!this.state.facility) toshow = toshow.filter( x => !(x.category === "Campus Facility") );
	    if (!this.state.policy) toshow = toshow.filter( x => !(x.category === "University Poliocy") );
	    if (!this.state.transportation) toshow = toshow.filter( x => !(x.category === "Transportation") );
	    if (!this.state.others) toshow = toshow.filter( x => !(x.category === "Others") );

	    return (
	      <div>
	        
	      	<div>
              	
              	

                <BoxToggle>
                  <Button1 onClick={this.toggle}>Start Your Petition</Button1>
                </BoxToggle>
                <Expand
                  open={this.state.open}
                  duration={300}
                  styles={styles}
                  transitions={transitions}
                >
                  <ExpandBoxes1>
                  	
                  	
                  	<div
			          style={{
			            display: "flex",
		                flexDirection: "column",
		                textAlign: "left",
		                marginBottom: "10px",
		                marginLeft: "10px"
			          }}
			        >
			        	<h3>What kind of petition are you creating?</h3>


			        	<FormControl component="fieldset">
					      
					      <RadioGroup aria-label="category" name="category1" >
					        <FormControlLabel value="Academics" control={<Radio color="primary"/>} label="Academics" onClick={(event) => this.setState({type: "Academics"})}/>
					        <FormControlLabel value="Sports" control={<Radio color="primary"/>} label="Sports" onClick={(event) => this.setState({type: "Sports"})}/>
					        <FormControlLabel value="Facility" control={<Radio color="primary"/>} label="Campus Facility" onClick={(event) => this.setState({type: "Campus Facility"})}/>
					        <FormControlLabel value="Poliocy" control={<Radio color="primary"/>} label="University Poliocy" onClick={(event) => this.setState({type: "University Poliocy"})}/>
					        <FormControlLabel value="Transportation" control={<Radio color="primary"/>} label="Transportation" onClick={(event) => this.setState({type: "Transportation"})}/>
					        <FormControlLabel value="Others" control={<Radio color="primary"/>} label="Others" onClick={(event) => this.setState({type: "Others"})}/>
					      </RadioGroup>
					    </FormControl>
	                  	
                  	</div>
                  	                  
                  	<div
		              style={{
		                display: "flex",
		                flexDirection: "column",
		                marginLeft: "80px",
		                marginBottom: "10px"
		              }}
		            >

		            	<h3>Add your title and description</h3>
		            	
                  		                	
                  		<form noValidate autoComplete="off" >
					      
					      <TextField id="standard-full-width" label="Title" style={{ margin: 8 }} placeholder="Add your title here" 
					      	fullWidth
					      	required
					        margin="normal"
					        InputLabelProps={{
					          shrink: true,
					        }}
					      	onChange={(event) => this.setState({input: event.target.value})} value={this.state.input} />
					      <br/>
					      <TextField id="standard-full-width" label="Description" style={{ margin: 8 }} placeholder="Add your description here" 
					      	fullWidth
					      	required
					        margin="normal"
					        InputLabelProps={{
					          shrink: true,
					        }}
					      	onChange={(event) => this.setState({input2: event.target.value})} value={this.state.input2} />
					      <br/>
					      <div
					      	style={{
					      		marginLeft: "8px",
					      		marginTop: "8px"
					      	}}
					      >
						      <TextField
						      	id="standard-number"
						        label="Supporter Goals"
						        placeholder="Add a number here" 
						        type="number"
						        required
						        fullWidth
						        InputProps={{ inputProps: { min: 0 } }}
						        InputLabelProps={{
						          shrink: true,						          
						        }} 
						      	onChange={(event) => this.setState({input3: event.target.value})} value={this.state.input3}/>
						  </div>
						  <br/>
						  <h3>Add image for your petition</h3>
						  <input data-buttonText="ww" type="file" onChange={this.handlePreview} />
					      
					    </form>
	                    
	                    <br/>
                    
                    	<Button variant="outlined" color="primary" onClick={this.submit.bind(this,this.state.input,this.state.input2,this.state.input3)}>Post Petition</Button> 

                    </div>
                  </ExpandBoxes1>
                </Expand>
              
            </div>


            <div>  
            	<div className="filter">
	                <Checkbox
	                   color="primary"                   
				       inputProps={{ 'aria-label': 'secondary checkbox' }} 
				       id="academics" checked={this.state.academics} 
		               onChange={this.flipacademics.bind(this)} />
		            <label for="academics">Academics</label>
		            <Checkbox
		           	   color="primary"                   
				       inputProps={{ 'aria-label': 'secondary checkbox' }}
				       id="sports" checked={this.state.sports} 
		               onChange={this.flipsports.bind(this)} />
		            <label for="sports">Sports</label>
		            <Checkbox 
		            	color="primary"                  
				       inputProps={{ 'aria-label': 'secondary checkbox' }}
		               id="facility" checked={this.state.facility} 
		               onChange={this.flipfacility.bind(this)} />
		            <label for="facility">Campus Facility</label>
		            <Checkbox 
		            	color="primary"                  
				       inputProps={{ 'aria-label': 'secondary checkbox' }}
				       id="policy" checked={this.state.policy} 
		               onChange={this.flippolicy.bind(this)} />
		            <label for="policy">University Poliocy</label>
		            <Checkbox  
		            	color="primary"                 
				       inputProps={{ 'aria-label': 'secondary checkbox' }}
				       id="transportation" checked={this.state.transportation} 
		               onChange={this.fliptransportation.bind(this)} />
		            <label for="transportation">Transportation</label>
		            <Checkbox 
		            	color="primary"                  
				       inputProps={{ 'aria-label': 'secondary checkbox' }}
				       id="others" checked={this.state.others} 
		               onChange={this.flipothers.bind(this)} />
		            <label for="others">Others</label> 
	            </div>  
	          	{toshow.map(             
	       
	                ({photo,supporter,category,des,title,id1}) => 
	                  <div key={id1}> 
	                  		
		                  	
		                    <div
		                    	style={{
		                    		marginBottom: "10px"
		                    	}}
		                    >
		                    	<Card>
		                    	  
							      <CardActionArea >
							      	<div className="petition">
								        <img src={photo} alt="" className="pt"/>

								        <CardContent>
								        							        
								          <Typography gutterBottom variant="h5" component="h2">
								            {title}
								          </Typography>
								          <Typography variant="body2" color="textPrimary" component="p">
								            #{category}
								          </Typography>
								          <br/>
								          <Typography variant="body2" color="textPrimary" component="p">
								          	Description: 
								          	<br/>
								            {des}
								          </Typography>
								          
								          <br/>
								          <Typography variant="body2" color="textPrimary" component="p">
								            Supporter Goals: {supporter}
								          </Typography>
								        </CardContent>
							        </div>
							        <div className="sign">
								      	<CardActions >    
								        	<Sign  />
								      	</CardActions>
							      	</div>
							      </CardActionArea>
							    </Card>

		                        
		                    </div> 
		                
	                  </div> 
	            )}
              
            </div>
	        
	      </div>
	    );
	}
}
 
export default Changemac;