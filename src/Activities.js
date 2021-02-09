import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './index.css'
import './css/activities.css'

import sld_image1 from './images/activities/sld_image1.jpg'
import sld_image2 from './images/activities/sld_image2.jpg'
import sld_image3 from './images/activities/sld_image3.jpg'
import sld_image4 from './images/activities/sld_image4.jpg'


import sport1 from './images/activities/sport1.jpg'
import sport2 from './images/activities/sport2.jpg'
import sport3 from './images/activities/sport3.jpg'
import sport4 from './images/activities/sport4.jpg'

import food1 from './images/activities/food1.jpg'
import food2 from './images/activities/food2.jpg'
import club1 from './images/activities/club1.jpg'
import club2 from './images/activities/club2.jpg'

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const months = ['01', '02', '03','04','05','06','07','08','09','10','11','12',];
const activity_posts = [{title: "LIVE: 2020 NHL Draft",
                         description: "LIVE on Youtube: https://www.youtube.com/watch?v=demolink",
                         date: new Date(2020, 11, 31, 13, 30),
                         type: "sports",
                         image: sport1
                        },
                        {title: "Baseball Charity Round",
                         description: "Ticket selling will be donated to children lost their parents during COVID-19",
                         date: new Date(2020, 10, 29, 20, 30),
                         type: "sports",
                         image: sport2
                        },
                        {title: "Badminton Team Tryouts",
                         description: "Apply by email: badminton@mcmaster.ca",
                         date: new Date(2020, 10, 28, 13, 30),
                         type: "sports",
                         image: sport3
                        },
                        {title: "Open Gym: Basketball",
                         description: "8 half-courts will be set up. Please feel free to drop in!",
                         date: new Date(2020, 11, 15, 20, 45),
                         type: "food",
                         image: sport4
                        },
                        {title: "Hamilton Carnival",
                         description: "Hamilton's biggest food festival. All-meat buffet start from $20 only!",
                         date: new Date(2020, 11, 30, 19, 30),
                         type: "food",
                         image: food1
                        },
                        {title: "Popeyes New Sandwich",
                         description: "Come and try the new Chicken Sandwich at Popeyes! This weekend ONLY",
                         date: new Date(2020, 11, 25, 12, 25),
                         type: "food",
                         image: food2
                        },
                        {title: "Club Fair 2020",
                         description: "The best opportunity to find people with same interest as you! Don't hesitate to come!",
                         date: new Date(2020, 10, 30, 9, 30),
                         type: "clubs",
                         image: club1
                        },
                        {title: "Ourdoor Club Event",
                         description: "Banff backcpuntry camping with professional hicking team. Apply before December 23.",
                         date: new Date(2020, 11, 22, 8, 30),
                         type: "clubs",
                         image: club2
                        }]

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedStartDate:new Date(),
                  selectedEndDate:null,
                  type: "all",
                  order: "oldest",
                  trending_dialog: false,
                  current_activity: {title: "",
                                     description: "",
                                     date: new Date(),
                                     type: ""
                                    }};
  }

  render() {

    var toshow = activity_posts;
    toshow = toshow.filter(activity => (activity.date.getTime() >= this.state.selectedStartDate.getTime()));
    if (this.state.selectedEndDate) toshow = toshow.filter(activity => (activity.date.getTime() <= this.state.selectedEndDate.getTime()));

    if (this.state.type == "sports") toshow = toshow.filter(activity => (activity.type=="sports"));
    if (this.state.type == "clubs") toshow = toshow.filter(activity => (activity.type=="clubs"));
    if (this.state.type == "food") toshow = toshow.filter(activity => (activity.type=="food"));

    if (this.state.order === "latest") toshow = toshow.slice().sort((a, b) => b.date - a.date);
    if (this.state.order === "oldest") toshow = toshow.slice().sort((a, b) => a.date - b.date);

    var trending_list = activity_posts.slice(0, 8);

    var title = "activity_normal_title";
    var content = "activity_normal_content";
    if (this.props.larger_text) {
      title = "activity_accessibility_title";
      content = "activity_accessibility_content";
    }

    return (
      <div>
        <AliceCarousel disableSlideInfo="false" autoPlay autoPlayInterval="2500" infinite="true" disableButtonsControls="true">
      		<div className="sliderimg">
            <img src={sld_image1} className="sliderimg"/>
            <h2> 
              <span>Hamilton Food Festival Tonight</span>
            </h2> 
          </div>
          <div className="sliderimg">
            <img src={sld_image3} className="sliderimg"/>
            <h2> 
              <span>Hicking Club: Backcountry Camping</span>
            </h2> 
          </div>
          <div className="sliderimg">
            <img src={sld_image2} className="sliderimg"/>
            <h2> 
              <span>Soccer Final: McMaster VS UofT</span>
            </h2> 
          </div>
          <div className="sliderimg">
            <img src={sld_image4} className="sliderimg"/>
            <h2> 
              <span>Hamilton Carnival</span>
            </h2> 
          </div>
        </AliceCarousel>
        <div className="activity_board">
          <ul className="options">
            <li className="date_picker">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Start date"
                  value={this.state.selectedStartDate}
                  onChange={date => this.setState({selectedStartDate:date})}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>              
            </li>
            <li className="date_picker">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="End date"
                  value={this.state.selectedEndDate}
                  onChange={date => this.setState({selectedEndDate: date })}
                  KeyboardButtonProps={{ 'aria-label': 'change date', }}
                />
              </MuiPickersUtilsProvider>
            </li>
            <li className="activities_type">
              <FormControl>
                <InputLabel>Type</InputLabel>
                <Select
                  value={this.state.type}
                  onChange={event => this.setState({type:event.target.value})}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"sports"}>Sports</MenuItem>
                  <MenuItem value={"clubs"}>Clubs</MenuItem>
                  <MenuItem value={"food"}>Food</MenuItem>
                </Select>
              </FormControl>
            </li>
            <li className="activities_sort">
              <FormControl>
                <InputLabel>Sort by time</InputLabel>
                <Select
                  value={this.state.order}
                  onChange={event => this.setState({order:event.target.value})}
                >
                  <MenuItem value={"latest"}>Decreasing</MenuItem>
                  <MenuItem value={"oldest"}>Increasing</MenuItem>
                </Select>
              </FormControl>
            </li>
          </ul>

          <div className="activity_list">
            {toshow.map(
              (activity) =>
              <div className="activity grey_light_background">
                <img src={activity.image}/>
                <h1 className={`blue_heavy_text ${title}`}>{activity.title}</h1>
                <div className={`activity_description blue_heavy_text ${content}`}>
                  {activity.description}
                </div>
                <div className={`activity_time blue_heavy_text ${content}`}>
                  Activity time: <br/>
                  {activity.date.getFullYear()}/
                  {months[activity.date.getMonth()]}/
                  {activity.date.getDate()}@{activity.date.getHours()}:{activity.date.getMinutes()}
                </div>
              </div>
            )}      
          </div>

          <div className="trending_board blue_light blue_light_background">
            <div className="trending_board_title blue_heavy_text">
              Trending
            </div>
            <ol>
              {trending_list.map(
                (activity) => 
                  <li onClick={event => this.setState({current_activity:activity, trending_dialog:true})}>{activity.title}</li>
                )}
            </ol>
            <Dialog
            fullWidth={true}
            maxWidth='xs'
            open={this.state.trending_dialog}
            onClose={event => this.setState({trending_dialog:false})}
            aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">{this.state.current_activity.title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {this.state.current_activity.description}<br/><br/>
                  {this.state.current_activity.date.getFullYear()}/
                  {months[this.state.current_activity.date.getMonth()]}/
                  {this.state.current_activity.date.getDate()}@
                  {this.state.current_activity.date.getHours()}:
                  {this.state.current_activity.date.getMinutes()}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={event => this.setState({trending_dialog:false})} color="primary">
                  Got It!
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default Activities;