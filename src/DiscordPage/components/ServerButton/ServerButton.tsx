import { ButtonSB } from "@/DiscordPage";
import { FC } from "react";
export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  img?: string;
  description?: string;
  link?: string;
}
export const ServerButton: FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  img,
  description,
  link
}) => {
  return (
    <ButtonSB
      isHome={isHome}
      hasNotifications={hasNotifications}
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

