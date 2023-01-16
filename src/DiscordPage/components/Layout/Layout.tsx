import { FC } from "react";
import { Grid, ServerList, ServerName, ChanelInfo } from "@/DiscordPage";

export const Layout: FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanelInfo />
    </Grid>
  );
};
