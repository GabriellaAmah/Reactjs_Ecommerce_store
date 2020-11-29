import React from "react";
import { Button } from "react-bootstrap";

const ExploreButton = ({ type, text, classname, buttonId, onclick }) => {
  return (
    <div>
      <Button type={type} className={classname} id={buttonId} onClick={onclick}>
        {text}
      </Button>
    </div>
  );
};

export default ExploreButton;
