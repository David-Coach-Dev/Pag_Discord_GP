
import { FC } from 'react';
import { ContainerUI, ProfileUI, AvatarUI, UserDataUI, IconsUI, MicIconUI, HeadphoneIconUI, SettingIconUI } from '@/DiscordPage';
export interface PropsUI {}

export const UserInfo : FC<PropsUI> = () => {
	return (
	<ContainerUI>
		<ProfileUI>
			<AvatarUI />
			<UserDataUI>
				<strong>John Doe</strong>
				<span>#12345</span>
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
