
import { FC } from 'react';
import { ContainerUI, ProfileUI, AvatarUI, UserDataUI, IconsUI, MicIconUI, HeadphoneIconUI, SettingIconUI } from '@/DiscordPage';
export interface PropsUI {}
import Dc_Dev from "../../assets/img/Dc_Dev.png";

export const UserInfo : FC<PropsUI> = () => {
	return (
    <ContainerUI>
      <ProfileUI>
        <AvatarUI>
          <img src={Dc_Dev} alt="Dc_Dev" />
        </AvatarUI>
        <UserDataUI>
          <strong>Dc Dev</strong>
          <span>#3536</span>
        </UserDataUI>
      </ProfileUI>
      <IconsUI>
        <MicIconUI />
        <HeadphoneIconUI />
        <SettingIconUI />
      </IconsUI>
    </ContainerUI>
  );
};
