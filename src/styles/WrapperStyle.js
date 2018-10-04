import styled from 'styled-components';
import backgroundTheme from '../images/flight_search_background.jpg';
import { media } from './Media';

export const Wrapper = styled.div `
  height: inherit;
  overflow-y: auto;
  background: url(${backgroundTheme}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  ${media.xs`flex-direction: column;`};
`;
