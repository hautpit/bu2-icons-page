import React from "react";
import { CodeOutlined, TextBlockOutlined } from "bu2-sax-icons";
import { message } from "bu2-ui";
import reactNodeToString from "react-node-to-string";

interface Props {
  name: string;
  icon: React.ReactNode;
}

const IconPreview = (props: Props) => {
  const { name, icon } = props;

  const onCopySvg = () => {
    const iconElement = document.querySelector(`#icon-${name}`);
    if (iconElement) {
      const iconSvg = iconElement.querySelector(".bu2-icon");
      if (iconSvg) {
        navigator.clipboard.writeText(iconSvg.innerHTML);
        message.success("Đã copy svg icon");
      }
    }
  };

  return (
    <div className="icon-preview">
      <div className="icon" id={"icon-" + name}>
        {icon}
      </div>
      <div className="name">{name}</div>
      <div className="actions">
        <TextBlockOutlined
          className="icon-btn"
          onClick={() => {
            navigator.clipboard.writeText(`${name}`);
            message.success("Đã copy tên icon");
          }}
        />
        <CodeOutlined
          className="icon-btn"
          onClick={() => {
            onCopySvg();
          }}
        />
      </div>
    </div>
  );
};

export default IconPreview;
