  import React, { Component } from 'react';
  import { EachFlight } from '../styles/FlightStyle';
  import moment from 'moment';

  export default class FlightDetails extends Component {


   render() {
     const { flight, passengers } = this.props;
     const now = moment().format();
     const checkFlightStatus = moment(now).isBefore(moment(flight.deptTime).format());
     return (
       <EachFlight className={checkFlightStatus && 'border-style'}>
       { checkFlightStatus && <div>
         <p className="meta-data">{flight.code}</p>
         <p className="meta-data"> <span className="title">Departure Date:</span> {moment(flight.deptTime).format('Do MMM YYYY') }</p>
         <p className="meta-data"> <span className="title">Departure Time:</span> {moment(flight.deptTime).format('h:mm:ss a') }</p>
         <p className="meta-data"> <span className="title">Arrival Date:</span> {moment(flight.arrTime).format('Do MMM YYYY') } </p>
         <p className="meta-data"> <span className="title">Arrival Time:</span> {moment(flight.arrTime).format('h:mm:ss a') }</p>
         <p className="meta-data"> <span className="title">Total Price:</span> Rs. {flight.price * passengers} </p>

         <button className="bookAction" >Book </button>
       </div>}

       { !checkFlightStatus && <div>
          <span>Scheduled flights are already departured!...</span> <br/>
          <span>Select any other day</span>
       </div>}

       </EachFlight>
     )
  }
}
