import React from "react";
import "./buttons.scss";
import Button from "./Button";

const Buttons = () => {
  return (
    <>
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="green">
          BUTTON
        </Button>
        <Button color="green">BUTTON</Button>
        <Button size="small" color="green">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="green" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button
          size="large"
          color="blue"
          fullWidth
          onClick={() => console.log("cicked!")}
          onMouseMove={() => console.log("mouse moving!")}
        >
          BUTTON
        </Button>
        <Button color="green" fullWidth>
          BUTTON
        </Button>
        <Button size="small" color="pink" fullWidth>
          BUTTON
        </Button>
      </div>
    </>
  );
};

export default Buttons;
