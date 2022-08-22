import React from "react";

const CustomButton = (props) => {
  const text = props.text;
  return (
    <div>
      <image src={props.imageSrc}></image>
      <button>
        <a href={props.url}></a>
      </button>
    </div>
  );
};

export default CustomButton;
