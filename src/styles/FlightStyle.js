import styled from 'styled-components';
import { media } from './Media';

export const ListWrapper = styled.div `
    background: antiquewhite;
    width: -webkit-fill-available;
    width: -moz-available;
    overflow-y: auto;
    height: auto;
    border-radius: 4px;
    margin: 20px;
    ${media.md`margin: 10px;`};
    ${media.xs`height: auto; overflow-y: initial;`};

    .emptyState {
      color: #555;
      font-size: 15px;
      margin-top: 60px;
      ${media.xs`margin: 34px 0px;`};
      display: block;
      width: 100%;
      text-align: center;
      line-height: 20px;
    }
`;
export const FlightResult = styled.div `
  display: flex;
  ${media.xs`flex-direction: column; padding: 10px;`};
  padding: 20px;
  ${media.md`padding: 10px;`};
  .header {
    color: #5f9ea0;
    font-size: 18px;
    ${media.md`font-size: 16px;`};
    text-align: center;
  }

  .fullWidth {
    width: -webkit-fill-available;
    width: -moz-available;
  }

  .border-style {
    border: 1px solid #999;
    border-radius: 4px;
  }

`;
export const EachFlight = styled.li `
  padding: 10px;
  margin: 10px 0px;
  color: #555;
  font-size: 15px;
  ${media.sm`font-size: 14px;`};
  .meta-data {
    margin: 10px 0px;
  }

  .title {
    color: #5f9ea0;
    margin-right: 10px;
  }

   .bookAction {
     border: none;
     border-radius: 4px;
     height: 20px;
     background: cadetblue;
     color: #fff;
     text-transform: uppercase;
   }
`;
