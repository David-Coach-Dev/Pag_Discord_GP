import { FC } from "react";
import {
  ContainerCM,
  AvatarCM,
  MessageCM,
  HeaderCM,
  ContentCM,
} from "@/DiscordPage";
export interface PropsCM {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

export const ChannelMessage: FC<PropsCM> = ({
	author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <ContainerCM className={hasMention? 'mentionCM':' '}>
      <AvatarCM className={isBot? 'bot':''}/>
      <MessageCM>
        <HeaderCM>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
          <time>{date}</time>
        </HeaderCM>
        <ContentCM>{content}</ContentCM>
      </MessageCM>
    </ContainerCM>
  );
};
