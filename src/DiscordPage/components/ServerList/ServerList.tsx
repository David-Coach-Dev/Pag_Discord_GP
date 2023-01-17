import { FC } from "react";
import { IconsData } from "@/DiscordPage";
import {
  ContainerSL,
  SeparatorSL,
  ServerButton,
} from "@/DiscordPage";

export const ServerList: FC = () => {
  let button;
  return (
    <ContainerSL>
      {button = IconsData.map((icon) => {
        return (
          <>
            {icon.key == "0" ? (
              <>
                <ServerButton
                  isHome
                  img={icon.icon}
                  description={icon.name}
                  link={icon.link}
                />
                <SeparatorSL />
              </>
            ) : (
                <ServerButton hasNotifications={icon.name=="Discord"? true: false}
                img={icon.icon}
                description={icon.name}
                link={icon.link}
              />
            )}
          </>
        );
      })}
    </ContainerSL>
  );
};
