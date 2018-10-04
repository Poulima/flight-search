import React from 'react';
import { DateField } from '../styles/SearchStyle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const SelectDate = (props) => {
  const changeDepartureDate = (date) => props.changeDepartureDate(date);
  const changeReturnDate = (date) => props.changeReturnDate(date);
  return (
    <DateField>
    <div className='wrapper'>
      <label className="title">Departure date</label>
      <DatePicker
      className="inputDate"
      required
      minDate={moment()}
      maxDate={moment().add(6, "months")}
      selected={props.selectedDepartureDate}
      onChange={changeDepartureDate} />
    </div>

    { props.roundTrip &&
    <div className='wrapper'>
      <label className="title">Return date</label>
      <DatePicker
        className="inputDate"
        required
        minDate={props.selectedDepartureDate}
        maxDate={moment().add(6, "months")}
        selected={props.selectedReturnDate}
        onChange={changeReturnDate} />
    </div>
    }
    </DateField>
  );
};

export default SelectDate;
