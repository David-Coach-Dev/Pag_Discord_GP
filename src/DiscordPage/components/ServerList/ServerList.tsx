import { FC } from "react";
import {
  IconsData,
  ContainerSL,
  SeparatorSL,
  ServerButton,
} from "@/DiscordPage";

export const ServerList: FC = () => {
  let button;
  return (
    <ContainerSL>
      {
        (button = IconsData.map((icon) => {
          return (
            <>
              <ServerButton
                key={icon.key}
                isHome={icon.name == "LogoTuti" ? true : false}
                selected={icon.name == "Discord" ? true : false}
                hasNotifications={icon.name == "Discord" ? true : false}
                isLive={icon.name == "LogoTuti" ? true : false}
                mentions={icon.name == "LogoTuti" ? 0: icon.name == "Discord" ? 3 :0}
                img={icon.icon}
                description={icon.name}
                link={icon.link}
              />
              {icon.name == "LogoTuti" ? <SeparatorSL /> : null}
            </>
          );
        }))
      }
    </ContainerSL>
  );
};
