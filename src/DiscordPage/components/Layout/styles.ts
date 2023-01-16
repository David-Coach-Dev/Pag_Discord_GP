import styled from "styled-components";

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info
// UL - User List

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71PX 240PX auto 240PX;
  grid-template-rows:  46PX auto 52PX;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL'
    ;
  Height: 100vh;
`;