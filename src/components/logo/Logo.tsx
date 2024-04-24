import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <a
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon iconId={"logo"} height={"44"} width={"44"} viewBox={"0 0 44 44"} />
    </a>

  );
};
