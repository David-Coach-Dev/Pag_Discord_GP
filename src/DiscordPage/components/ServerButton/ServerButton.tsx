import { ButtonSB } from "@/DiscordPage";
import { FC } from "react";
export interface PropsSB {
  id?: string;
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  isLive?: boolean;
  mentions?: number;
  img?: string;
  description?: string;
  link?: string;
}
export const ServerButton: FC<PropsSB> = ({
  selected,
  id,
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
      id={id}
      isHome={isHome}
      hasNotifications={hasNotifications}
      isLive={isLive}
      mentions={mentions}
      className={selected ? "active" : ""}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
    >
      <img src={img} alt={description} />
    </ButtonSB>
  );};

