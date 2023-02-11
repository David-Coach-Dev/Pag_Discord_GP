import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const ContainerCB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  > div{
    display: flex;
    align-items: center;
  }

  > div span{
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active{
    background-color: var(--quinary);
    >div span{
      color: var(--white);
    }
  }
`;
export const HashtagIconCB = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;
export const InviteIconCB = styled(PersonAdd)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover{
    color: var(--white);
  }

  `;
export const SettingsIconCB = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  margin-left: 4px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover{
    color: var(--white);
  }
  `;
