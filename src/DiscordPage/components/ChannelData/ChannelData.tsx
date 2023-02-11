import { FC, useRef, useEffect } from 'react';
import {
  ContainerCD,
  MessageCD,
  InputWrapperCD,
  InputCD,
  InputIconCD,
	ChannelMessage,
	MentionCM,
} from "@/DiscordPage";
export interface PorpsCD {}

export const ChannelData : FC<PorpsCD> = () => {
	const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	useEffect(() => {
		const div = messageRef.current;
		if(div) {
			div.scrollTop = div.scrollHeight;
		}
	},[messageRef])
	return (
		<ContainerCD>
			<MessageCD ref={messageRef}>
				{ Array.from(Array(15).keys()).map((n) => (
					<ChannelMessage
						key={n}
						author='Dc Dev'
						date="02/10/2023"
						content=' hi'
					/>
				))}
				<ChannelMessage
					author='Dc Dev'
					date="02/10/2023"
					content=' hi'
				/>
				<ChannelMessage
					author='Dc Dev Bot'
					date="02/10/2023"
					isBot
					hasMention
					content={
						<>
							<MentionCM>@DcDevBot</MentionCM>,  hi soy un Bot
						</>
					}
				/>
			</MessageCD>
			<InputWrapperCD>
				<InputCD type='text' placeholder='Conversar en #Channel-live '/>
				<InputIconCD />
			</InputWrapperCD>
		</ContainerCD>
	);
};
