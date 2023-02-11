import styled from 'styled-components';
import { PropsSB } from '.';

export const ButtonSB = styled.button<PropsSB>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border-radius: ${props => props.hasNotifications ? '16px' : '50px'};
  background-color: ${props => props.selected ? 'var(--discord)' : 'var(--primary)'};
  position: relative;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
  }
  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50px;
    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }
  &::after {
    ${
      props => props.isLive ?
      `
        background-color: var(--live);
        width: auto;
        height: 14px;
        padding: 2px;
        position: absolute;
        top: -6px;
        right:  -14px;
        border-radius: 12px;
        border: 4px solid var(--quaternary);
        text-align: right;
        font-size: 12px;
        font-weight: bold;
        color: var(--white);
        content: 'Live';
        display: ${props.isLive && props.isLive ? 'inline' : 'none'};
      ` : ''
    }
      ${props => props.mentions && props.mentions > 0 ?
      `
        background-color: var(--notification);
        width: auto;
        height: 16px;
        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 12px;
        border: 4px solid var(--quaternary);
        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
        content: '${props.mentions && props.mentions}';
        display: ${props.mentions && props.mentions > 0 ? 'inline' : 'none'};
      `: ''
    }
  }
  transition: border-radius .2s, background-color .2s;
  &.active, &:hover{
    border-radius: 16px;
    background-color: ${(props) => props.isHome ? 'var(--tutiPrimary)' : 'var(--discord)'};
  }
`;
