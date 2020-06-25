import React, { useContext, useEffect } from "react";
import { GameContext } from "../App.js";

const Canvas = () => {
  const context = useContext(GameContext);
  const { mainState } = context;
  const { players, legs, profiles, ladder } = mainState;
  const canvasRef = React.useRef(null);
  let canvas = null;
  let ctx = null;

  const drawLadders = () => {
    const width = canvas.width;
    const height = canvas.height;
    let stickX = width / (players * 2);
    let diffX = stickX * 2;

    for (let c = 0; c < players; c++) {
      const rows = legs.filter((leg) => leg.line === c);

      ctx.beginPath();
      ctx.rect(stickX, 0, 2, height);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();

      for (let r = 0; r < rows.length; r++) {
        let stickY = rows[r].pos * 15;

        ctx.beginPath();
        ctx.rect(stickX - diffX, stickY, diffX, 1);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
      }
      stickX += diffX;
    }
  };

  const drawBalls = () => {
    let ballX = canvas.width / (players * 2);
    let diffX = ballX * 2;

    for (let p = 0; p < players; p++) {
      ctx.beginPath();
      ctx.arc(ballX + 1, 3, 2, 0, Math.PI * 2);
      ctx.fillStyle = profiles[p].color;
      ctx.fill();
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();
      ballX += diffX;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvas = canvasRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    drawLadders();
    drawBalls();
    console.log(legs);
    console.log(ladder);
  }, []);

  return <canvas className={"canvas"} ref={canvasRef}></canvas>;
};

export default Canvas;
