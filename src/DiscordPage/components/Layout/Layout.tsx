import { FC } from "react";
import {
  Grid,
  ServerList,
  ServerName,
  ChanelInfo,
  ChannelList,
  UserInfo,
  UserList,
  ChannelData,
} from "@/DiscordPage";

export const Layout: FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};
