import styled from 'styled-components';
import {Mic, Headset, Settings} from 'styled-icons/material';

export const ContainerUI = styled.div`
  grid-area: UI;
  display : flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;


`;
export const ProfileUI = styled.div`
  display: flex;
  align-items: center;

`;
export const AvatarUI = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--While);
   > img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const UserDataUI = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }
  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;
export const IconsUI = styled.div`
  display: flex;
  align-items: center;
  >svg:not(:first-child){
    margin-left: 7px;
  }
`;
export const MicIconUI = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover{
    opacity: 1;
  }
`;
export const HeadphoneIconUI = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover{
    opacity: 1;
  }
`;
export const SettingIconUI = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover{
    opacity: 1;
  }
`;