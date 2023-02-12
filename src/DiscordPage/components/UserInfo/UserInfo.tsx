
import { FC } from 'react';
import { ContainerUI, ProfileUI, AvatarUI, UserDataUI, IconsUI, MicIconUI, HeadphoneIconUI, SettingIconUI } from '@/DiscordPage';
export interface PropsUI {}

export const UserInfo : FC<PropsUI> = () => {
	return (
	<ContainerUI>
		<ProfileUI>
			<AvatarUI />
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
