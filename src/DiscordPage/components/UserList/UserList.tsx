import { FC } from 'react';
import { ContainerUl, RoleUL, UserUL, AvatarUL } from "@/DiscordPage";
export interface PorpsUL {}
	interface UseProps{
		nicknameUL: string;
		isBot?: boolean;
	};
const UserRowUL: FC<UseProps> = ({nicknameUL, isBot=false}) =>{
	<UserUL>
		<AvatarUL />
		<strong>
			{nicknameUL}
		</strong>
		{isBot && <span>Bot</span>}
	</UserUL>
}
export const UserList :FC<PorpsUL> = () => {
	return (
		<ContainerUl>
			<RoleUL>Disponivel - 1</RoleUL>
			<UserRowUL nicknameUL="Dc Dev" />
			<RoleUL>Offline - 1</RoleUL>
			<UserRowUL nicknameUL="Dc Dev bot" isBot/>
		</ContainerUl>
	);
};
