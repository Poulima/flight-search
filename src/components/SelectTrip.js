import React from 'react';
import PropTypes from 'prop-types';
import { RadioInputContainer } from '../styles/SearchStyle';

const SelectTrip = (props) => {
  const selectOneWay = () => props.selectOneWay();
  const selectRoundTrip = () => props.selectRoundTrip();
  return (
    <RadioInputContainer>
      <input type="radio" id="one_way" name="flight_trip" value="one_way" defaultChecked onClick={selectOneWay}/> <label className='radioInputTitle'>One Way</label>
      <input type="radio" id="round_trip" name="flight_trip" value="round_trip" onClick={selectRoundTrip} /> <label className='radioInputTitle'>Round Trip</label>
    </RadioInputContainer>
  );
};

export default SelectTrip;

SelectTrip.propTypes = {
  selectOneWay: PropTypes.func.isRequired,
  selectRoundTrip: PropTypes.func.isRequired,
};
