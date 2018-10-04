import styled from 'styled-components';
import { media } from './Media';

const color = {
  cadetblue :'#5f9ea0',
}

export const FlightSearch = styled.div `
  width: auto;
  margin: 20px;
  ${media.md`margin: 10px;`};
  ${media.xs`margin-bottom: 0px;`};
  height: auto;
    .searchForm {
      background: antiquewhite;
      padding: 20px;
      ${media.md`padding: 12px 20px;`};
      border-radius: 4px;
      height: auto;
    }

    .btn-wrapper {
      display: flex;
      justify-content: center;
      ${media.md`justify-content: flex-end;`};
      ${media.md`margin: 0px;`};
      margin: 26px 0px 10px;
    }

    .search-btn {
      padding: 6px 20px;
      cursor: pointer;
      background: cadetblue;
      color: #fff;
      text-transform: uppercase;
      border: none;
      border-radius: 4px;

      ${media.md`margin-top: 12px; font-size: 12px;`};
    }
`;

export const RadioInputContainer = styled.div `
  padding: 10px 0px;

  ${media.md`padding: 6px 0px;`};
  .radioInputTitle {
     margin-right: 6px;
     color: ${color.cadetblue};
     ${media.md`font-size: 14px;`};
  }

  input[type="radio"] {
    cursor: pointer;
  }

`;

export const CityField = styled.div `
  display: flex;
  padding: 10px 0px;
  ${media.md`flex-direction: column; padding: 2px 0px;`};

  .container {
    margin-right: 10px;
    ${media.md`margin-bottom: 10px;`};
  }
  .cityInput {
    padding: 10px;
    font-size: 16px;
    ${media.md`font-size: 14px; padding: 8px;`};
    border: none;
    color: #555;
  }

  .city-list {
    padding:0px;
    margin: 0px;
    position: absolute;
    z-index: 999;
    width: 221px;
    ${media.md`width: 195px;`};
  }

  .city-item {
    margin: 0;
    padding: 10px 12px;
    background: #efdcc4;
    font-size: 15px;
    color: #666;
    cursor: pointer;
  }

  .emptyMsg {
    padding: 20px;
    background: #efdcc4;
    font-size: 15px;
    ${media.md`font-size: 13px;`};
    color: #666;
  }
`;

export const DateField = styled.div `
  display: flex;
  padding: 10px 0;
  ${media.md`flex-direction: column; padding: 2px 0px;`};
    .wrapper {
      margin-right: 32px;
      ${media.md`margin-right: 20px;`};
    }
    .title {
      color: #555;
      margin-bottom: 10px;
      ${media.md`margin-bottom: 6px; font-size: 14px;`};
      display: inline-block;
    }
    .inputDate {
      padding: 6px;
      border: none;
      border-radius: 4px;
      color: #555;
      cursor: pointer;
      margin-bottom: 10px;
      ${media.md`margin-bottom: 8px;`};
    }
`;

export const ActionButtonWrapper = styled.div `
display: flex;
align-items: center;
padding: 10px 0;
${media.md`padding: 0;`};
font-size: 15px;
color: #555;

  .title {
    color: #555;
    display: inline-block;
  }
  .button {
    margin: 0px 10px;
    border: none;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: cadetblue;
    color: #fff;
    text-transform: uppercase;
  }

  button:disabled {
    background: #d3e4d8;
    cursor: not-allowed;
  }
`;

export const PriceFilter = styled.div `
  display: flex;
  ${media.md`flex-direction: column; margin-bottom: 10px;`};
  padding: 10px 0;
  margin-top: 10px;
  .title {
    color: #555;
    margin-right: 30px;
    ${media.md`margin-bottom: 30px; font-size: 14px;`};
    display: inline-block;
  }
  .input-range {
    width: 150px !important;
    ${media.md`margin-left: 10px;`};
  }

  .price-range__label {
    margin-bottom: 30px;
    font-size: 15px;
    color: #000;
    font-weight: bolder;
  }

  .input-range__label-container {
    color: #000 !important;
  }

  .input-range__track {
    background: #ffa335 !important;
  }

  .input-range__track--active {
    background: #3f51b5 !important;
  }
`;
