import { FC } from 'react';
import {
  ContainerCD,
  MessageCD,
  InputWrapperCD,
  InputCD,
  InputIconCD,
} from "@/DiscordPage";
export interface PorpsCD {}

export const ChannelData : FC<PorpsCD> = () => {
	return (
		<ContainerCD>
			<MessageCD />
			<InputWrapperCD>
				<InputCD />
				<InputIconCD />
			</InputWrapperCD>
		</ContainerCD>
	);
};
