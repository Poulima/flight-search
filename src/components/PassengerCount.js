import React from 'react';
import { ActionButtonWrapper } from '../styles/SearchStyle';


const PassengerCount = (props) => {
  const changePassengerCount = (e) => props.changePassengerCount(e);

  return (
    <ActionButtonWrapper>
      <label className="title">Passenger</label>
      <button
        id="reduceButton"
        type="button"
        className="button"
        disabled={props.passengerCount <= props.minPassenger}
        onClick={changePassengerCount}>
        -
      </button>
      <span className="passenger__count">{props.passengerCount} </span>
      <button
        id="increaseButton"
        type="button"
        className="button"
        disabled={props.passengerCount >= props.maxPassenger}
        onClick={changePassengerCount}>
        +
      </button>
    </ActionButtonWrapper>
  );
};

export default PassengerCount;
