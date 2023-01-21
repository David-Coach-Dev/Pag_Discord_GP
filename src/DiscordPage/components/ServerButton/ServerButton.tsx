import { ButtonSB } from "@/DiscordPage";
import { FC } from "react";
export interface Props {
  key?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  isLive?: boolean;
  mentions?: number;
  img?: string;
  description?: string;
  link?: string;
}
export const ServerButton: FC<Props> = ({
  selected,
  key,
  isHome,
  hasNotifications,
  isLive,
  mentions,
  img,
  description,
  link
}) => {
  return (
    <ButtonSB
      key={key}
      isHome={isHome}
      hasNotifications={hasNotifications}
      isLive={isLive}
      mentions={mentions}
      className={selected ? "active" : ""}
      onClick={() => {
        if (link) {
          //window.location.href = `${link}`;
          window.open(link, "_blank");
        }
      }}
    >
      <img src={img} alt={description} />
    </ButtonSB>
  );};

