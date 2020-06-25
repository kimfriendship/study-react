import React, { useContext, useEffect } from "react";
import { GameContext } from "../App.js";

const Canvas = () => {
  const context = useContext(GameContext);
  const { mainState } = context;
  const { players, legs, profiles, ladder } = mainState;
  const canvasRef = React.useRef(null);
  let canvas = null;
  let ctx = null;
  let legGap = 15;
  let ballX = 0;
  let ballY = 2;
  let LR = 0;
  let LC = 0;

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
        let stickY = rows[r].pos * legGap;

        ctx.beginPath();
        ctx.rect(stickX - diffX, stickY, diffX, 1);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
      }
      stickX += diffX;
    }
  };

  // const drawBalls = (diffX) => {};

  const drawLines = () => {
    if (ballY === canvas.height - 1) clearInterval(startDrawing);
    if (ballY === canvas.height - 1) return;
    ballX = canvas.width / (players * 2);
    const checkLegs = ballY % legGap === 0;
    let diffX = ballX * 2;
    let move = 0.5;

    for (let p = 0; p < players; p++) {
      ctx.beginPath();
      ctx.arc(ballX + diffX * p + 1, ballY, 2, 0, Math.PI * 2);
      ctx.fillStyle = profiles[p].color;
      ctx.fill();
      ctx.closePath();

      if (checkLegs) {
        LC = p;
        let turn = "straight";

        if (LR <= 8) {
          turn = ladder[LR][LC - 1] === 1 ? "right" : turn;
          turn = ladder[LR][LC] === 1 ? "left" : turn;
          console.log(LR, LC, turn);
        }

        if (turn === "right") ballX += move;
        if (turn === "left") ballX -= move;
        if (turn === "straight") ballY += move;
      }
    }

    if (checkLegs) LR++;
    if (!checkLegs) ballY += move;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvas = canvasRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    drawLadders();
    console.log(profiles);
    console.log(ladder);
  }, []);

  const startDrawing = setInterval(drawLines, 10);

  return <canvas className={"canvas"} ref={canvasRef}></canvas>;
};

export default Canvas;
