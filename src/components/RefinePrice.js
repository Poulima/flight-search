import React, { Component } from 'react';
import { PriceFilter } from '../styles/SearchStyle';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class RefinePrice extends Component {

  render() {
    const { maxValue, minValue, price, filterByPrice } = this.props;
    return (
     <PriceFilter>
      <label className='title'>Filter Price</label>
      <InputRange
        className="price-range"
        value={price}
        maxValue={maxValue}
        minValue={minValue}
        onChange={(price) => filterByPrice(price)}
         />
      </PriceFilter>
    );
  }

};

export default RefinePrice;
