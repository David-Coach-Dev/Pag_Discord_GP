import { FC } from "react";
import { Grid, ServerList, ServerName, ChanelInfo, ChannelList, UserInfo, UserList } from "@/DiscordPage";

export const Layout: FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
    </Grid>
  );
};
