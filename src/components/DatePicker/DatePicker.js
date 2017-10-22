/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import DateComponent from '../DateComponent';
import s from './DatePicker.css';
import Swiper from 'react-slider-swiper';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.state = {days: days, months: months};
  }

  componentDidMount() {
    var datesSwiper = new Swiper('.dates', {
  		direction: 'horizontal',
  		slidesPerView: 7,
  		spaceBetween: 5,
  		breakpoints: {
  			680: {
  				slidesPerView: 6
  			},
  			560: {
  				slidesPerView: 5
  			},
  			420: {
  				slidesPerView: 4
  			}
  		}
  	});

  }
  render() {
    var dates = []
    var date = new Date();
     for(var i = 0; i < 7; i++) {
        date.setDate(date.getDate() + (i === 0 ? 0 : 1))
        var dayNumber = date.getDate();
        var dayName = this.state.days[date.getDay()]
        var monthName =  this.state.months[date.getMonth()]
        dates.push(
          <DateComponent
                        key={i}
                        month={monthName}
                        dayName={dayName}
                        dayNumber={dayNumber}
                        date={date.toISOString().substring(0, 10)}
          />)
      }
      return (
        <div className={s.dates}>
          <div className={s.dateContainer}>
            {dates}
          </div>
        </div>
      )
    }
}

export default withStyles(s)(DatePicker);
