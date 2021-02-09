import React, { Component } from "react";
import './index.css'
import './css/jobboard.css'


import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {GridList, GridListTile } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button } from '@material-ui/core';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

const months = ['01', '02', '03','04','05','06','07','08','09','10','11','12',];

var job_data = [    {
                      job_id:0,
                      title:"Bookstore Clerk",
                      location: "Main Campus",
                      contact: "ameliaz@mcmaster.ca",
                      date: new Date('2020','07','17'),
                      type: "On-campus",
                      salary: "14.5",
                      jobDescription: "Must be availble for weekdays.",
                      likes:12,
                      dislikes:0,
                      disabled: false,
                    },
                    {
                      job_id:1,
                      title: "Tim Hortons Member",
                      location: "Student Center",
                      contact: "zyanh@mcmaster.ca",
                      date: new Date('2020','05','17'),
                      type: "On-campus",
                      salary: "14.5",
                      jobDescription: "Contact directly for details",
                      likes:3,
                      dislikes:0,
                      disabled: false,
                    },
                  
                    {
                      job_id:2,
                      title: "Library Administrator",
                      location: "Thode Library",
                      contact: "alxiell@mcmaster.ca",
                      date: new Date('2020','09','21'),
                      type: "On-campus",
                      salary: "14.5",
                      jobDescription: "Must be availble for evening shifts.",
                      likes:4,
                      dislikes:0,
                      disabled: false,
                    },
                    {
                      job_id:3,
                      title: "Williams - Server",
                      location: "1309 Main St W",
                      contact: "williams@outlook.ca",
                      date: new Date('2020','10','16'),
                      type: "Off-campus",
                      salary: "14.5",
                      jobDescription: "Email resume directly please",
                      likes:2,
                      dislikes:5,
                      disabled: false,
                    },  
                    {
                      job_id:4,
                      title: "TA positions - CAS",
                      location: "Main Campus",
                      contact: "lilianzen@mcmaster.ca",
                      date: new Date('2020','11','11'),
                      type: "On-campus",
                      salary: "25",
                      jobDescription: "Email resume/transcripts directly.",
                      likes:42,
                      dislikes:0,
                      disabled: false,
                    },
                    {
                      job_id:5,
                      title: "Paid Tutor - Math 1C03",
                      location: "Online",
                      contact: "alohazen12@mcmaster.ca",
                      date: new Date('2020','09','20'),
                      type: "Off-campus",
                      salary: "18",
                      jobDescription: "Scored 12 on Math 1C03.",
                      likes:12,
                      dislikes:0,
                      disabled: false,
                    },
                    {
                      job_id:6,
                      title: "Paid Tutor - Math 1ZA3",
                      location: "Online",
                      contact: "alohazen12@mcmaster.ca",
                      date: new Date('2020','09','10'),
                      type: "Off-campus",
                      salary: "18",
                      jobDescription: "Scored 12 on Math 1Z03.",
                      likes:8,
                      dislikes:0,
                      disabled: false,
                    },
                    {
                      job_id:7,
                      title: "Summer Camp - ESL",
                      location: "Off-campus",
                      contact: "xy158@gmail.ca",
                      date: new Date('2020','05','12'),
                      type: "Off-campus",
                      salary: "21",
                      jobDescription: "English native speaker",
                      likes:1,
                      dislikes:12,
                      disabled: false,
                    },
                    {
                      job_id:8,
                      title: "Enrollment Assistant",
                      location: "On-campus",
                      contact: "alohazen12@mcmaster.ca",
                      date: new Date('2020','06','29'),
                      type: "Off-campus",
                      salary: "22",
                      jobDescription: "Email resume direcly",
                      likes:5,
                      dislikes:0,
                      disabled: false,
                    },
                  ];

class Jobboard extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedStartDate:null,
                  selectedEndDate:null,
                  type: "All",
                  sort: "Most recent",
                  jobData: job_data,
                };
  }


  jobboard_onClickLikes(job){
    job.likes = job.likes + 1;
    job.disabled = true;
    var jobs = this.state.jobData;
    for (var i=0; i<jobs.length; i++) { 
      if (jobs[i].job_id == job.job_id) {
        jobs[i] = job;
        this.setState({jobData: jobs});
        return jobs;
      }
    }
  }

  jobboad_onClickDislikes(job){
    job.dislikes = job.dislikes + 1;
    job.disabled = true;
    var jobs = job_data;
    for (var i=0; i<jobs.length; i++) {
      if (jobs[i].job_id == job.job_id) {
        jobs[i] = job;
        this.setState({jobData: jobs});
      }
    }
  }
  chanegType(new_type) {this.setState({type:new_type});}

  render() {
    const classes = this.props;
    let toshow = this.state.jobData;

    if (this.state.selectedStartDate) toshow = toshow.filter(job => (job.date.getTime() >= this.state.selectedStartDate.getTime()));
    if (this.state.selectedEndDate) toshow = toshow.filter(job => (job.date.getTime() <= this.state.selectedEndDate.getTime()));
    
    if (this.state.sort ==="Most recent") toshow = toshow.sort((a,b)=> {
      return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
    }).reverse();
    
    if (this.state.sort ==="Least recent") toshow = toshow.sort((a,b)=> {
      return new Date(a.date).getTime() - 
        new Date(b.date).getTime()
    });

    if (this.state.type === "On-campus") toshow = toshow.filter(job=> (job.type === "On-campus"));
    if (this.state.type === "Off-campus") toshow = toshow.filter(job=> (job.type === "Off-campus"));

    if (this.state.sort === "Lowest salary") toshow = toshow.sort((a,b)=> (a.salary - b.salary));
    if (this.state.sort === "Highest salary") toshow = toshow.sort((a,b)=> (b.salary - a.salary));

    var title = "normal_title";
    var content = "activity_normal_content";
    if (this.props.larger_text) {
      title = "accessibility_title";
      content = "activity_accessibility_content";
    }
    
    return (     
      
      <div>
        <div className="job_board">
          <ul className="options">
            <li className="type">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Start date"
                  fullWidth
                  value={this.state.selectedStartDate}
                  onChange={date => this.setState({selectedStartDate:date })}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>              
            </li>
            <li className="type">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="End date"
                  fullWidth
                  value={this.state.selectedEndDate}
                  onChange={date => this.setState({selectedEndDate:date })}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>
            </li>
            <li className="type">
              <FormControl fullWidth={true}>
                <InputLabel className={classes.formControl}>Category</InputLabel>
                <Select
                  value={this.state.type}                
                  onChange={event => this.setState({type:event.target.value})}
                >
                  <MenuItem value={"All"}> All</MenuItem>
                  <MenuItem value={"On-campus"}> On-campus</MenuItem>
                  <MenuItem value={"Off-campus"}>Off-campus</MenuItem>
                </Select>
              </FormControl>
            </li>
            <li className="type">
              <FormControl fullWidth={true}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={this.state.sort}
                  onChange={event => this.setState({sort:event.target.value})}
                >
                  <MenuItem value={"Most recent"}>Most recent</MenuItem>
                  <MenuItem value={"Least recent"}>Least recent</MenuItem>
                  <MenuItem value={"Lowest salary"}>Lowest salary</MenuItem>
                  <MenuItem value={"Highest salary"}>Highest salary</MenuItem>
                </Select>
              </FormControl>
            </li>          
          </ul>
          <div className={classes.root}>
            <GridList cellHeight={250} cols={3} className={classes.gridList}>
              {toshow.map(
                (job)=>
                  <GridListTile key={job.job_id}>
                    <div id="jobTitle" className={title}> {job.title}</div>
                    <div id="location" className={content}>Location: {job.location} </div>
                    <div id="salary" className={content}>Minimum Salary: ${job.salary} </div>
                    <div id="type" className={content}>Category: {job.type} </div>
                    <div id="contact" className={content}> Contact: {job.contact}</div>
                    <div id="postDate" className={content}> Post Date: {job.date.getFullYear()}/{months[job.date.getMonth()]}/{job.date.getDate()}</div>
                    <div id="jobTitleOnly" className={content}>Requirements:</div>
                    <div id="jobDescription" className={content}>{job.jobDescription}</div>
                    <div class="thumbIcons" > 
                      <Button id="thumbUp" onClick= {this.jobboard_onClickLikes.bind(this, job)} disabled={job.disabled} value='Inc' startIcon={<ThumbUpIcon/>}/>
                      <Button id="thumbDown" onClick={this.jobboad_onClickDislikes.bind(this, job)} disabled={job.disabled} value='Inc' startIcon={<ThumbDownIcon/>}/>      
                    </div>
                    <div class="numbersdisplay"> 
                     <span id="likes">{job.likes}</span>
                     <span id="dislikes"> {job.dislikes}</span>
                    </div>
                  </GridListTile>
                )
              }
            </GridList>
          </div>
          
        </div>
        
      </div>
    );
  }
}
 
export default Jobboard;