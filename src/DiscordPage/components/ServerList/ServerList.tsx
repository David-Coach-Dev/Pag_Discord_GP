import { FC } from "react";
import {
  ContainerSL,
  SeparatorSL,
  ServerButton,
} from "@/DiscordPage";

export const ServerList: FC = () => {
  return (
    <ContainerSL>
      <ServerButton isHome />
      <SeparatorSL />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={10} />
    </ContainerSL>
  );
};
