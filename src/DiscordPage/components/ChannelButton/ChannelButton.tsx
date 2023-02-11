import {
  ContainerCB,
  HashtagIconCB,
  InviteIconCB,
  SettingsIconCB,
} from "@/DiscordPage";
import { FC } from "react";

export interface PropsCB{
  channelName: string;
  selected?: boolean;

}

export const ChannelButton: FC<PropsCB> = ({
  channelName,
  selected,
}) => {
  return (
    <ContainerCB className={selected ? 'active': ''}>
      <div>
        <HashtagIconCB />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIconCB />
        <SettingsIconCB />
      </div>
    </ContainerCB>
  );
}
