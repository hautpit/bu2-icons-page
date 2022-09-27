import { message } from "bu2-ui";
import React from "react";

interface Props {
  name: string;
  icon: React.ReactNode;
}

const IconPreview = (props: Props) => {
  const { name, icon } = props;
  return (
    <div
      className="icon-preview"
      onClick={() => {
        navigator.clipboard.writeText(`<${name} />`);
        message.success("Đã copy component");
      }}
    >
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default IconPreview;
