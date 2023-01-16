import { FC } from "react";

import {
  ContainerCI,
  HashtagIconCI,
  TitleCI,
  SeparadorCI,
  DescriptionCI,
} from "@/DiscordPage";

export const ChanelInfo: FC = () => {
  return (
    <ContainerCI>
      <HashtagIconCI />
      <TitleCI>Con de tuti</TitleCI>
      <SeparadorCI />
      <DescriptionCI>Explicación del discord</DescriptionCI>
    </ContainerCI>
  );
};