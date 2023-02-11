import { FC } from 'react';
import { ContainerUl, RoleUL, UserUL, AvatarUL, userDiscord } from "@/DiscordPage";
export interface PorpsUL {}
	interface UseProps{
		key: string;
		avatar: string;
		nicknameUL: string;
		isBot?: boolean;
	};
const UserRowUL: FC<UseProps> = ({key, avatar, nicknameUL, isBot=false}) =>{
	return (
	<UserUL key={key}>
		<AvatarUL className={isBot ? 'bot':''}>
			<img src={avatar}/>
		</AvatarUL>
		<strong>
			{nicknameUL}
		</strong>
		{isBot && <span>Bot</span>}
	</UserUL>
	);
}
export const UserList :FC<PorpsUL> = () => {
	return (
		<ContainerUl>
			{
				<>
					<RoleUL>Disponible - 1</RoleUL>
					{userDiscord.map((user) => {
						return(user.online && <UserRowUL key={user.id} avatar={user.avatar} nicknameUL={user.nickName} isBot={user.isBot}/>)
					})}
					<RoleUL>Offline - 1</RoleUL>
					{userDiscord.map((user) => {
						return (!user.online && <UserRowUL key={user.id} avatar={user.avatar} nicknameUL={user.nickName} isBot={user.isBot}/>)
					})}
				</>
			}
		</ContainerUl>
	);
};
