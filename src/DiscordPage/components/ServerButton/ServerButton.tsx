import logo from "@/discordPage/assets/img/tuti.gif";
import { ButtonSB } from "@/DiscordPage";
import { FC } from "react";
export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}
export const ServerButton: FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <ButtonSB
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={logo} alt="Logo" />}
    </ButtonSB>
  );
};
