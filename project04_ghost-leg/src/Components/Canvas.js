import React, { useContext, useEffect } from "react";
import { GameContext } from "../App.js";

const Canvas = () => {
  const context = useContext(GameContext);
  const { mainState, dispatch } = context;
  const { players, legs, profiles, ladder } = mainState;

  const canvasRef = React.useRef(null);
  let startDrawing = "";
  let canvas = null;
  let ctx = null;
  let resultArray = new Array(players).fill(0);
  let isCrossing = false;
  let legGap = 15;
  let ballX = 0;
  let ballY = 2;
  let LR = 0;
  let LC = 0;

  const drawLadders = () => {
    const width = canvas.width;
    const height = canvas.height;
    let stickX = width / (players * 2);
    let stickDiffX = stickX * 2;

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
        ctx.rect(stickX - stickDiffX, stickY, stickDiffX, 1);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
      }
      stickX += stickDiffX;
    }
  };

  const drawBalls = (ballX, diffX, ballY) => {
    ctx.beginPath();
    ctx.arc(ballX + diffX * 0 + 1, ballY, 2, 0, Math.PI * 2);
    ctx.fillStyle = profiles[0].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLegs = (move, ballX) => {
    isCrossing = true;
    const stickGap = canvas.width / (players * 2);
    const rightGap = stickGap * (LC ? 2 * LC + 3 : 3);
    const leftGap = stickGap * (LC === 1 ? LC : LC + 1);

    if (move > 0) {
      for (let i = 0; ballX < rightGap; i++) {
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.2, 0, Math.PI * 2);
        ctx.fillStyle = profiles[0].color;
        ctx.fill();
        ctx.closePath();
      }
    }
    if (move < 0) {
      for (let i = 0; ballX > leftGap; i++) {
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.2, 0, Math.PI * 2);
        ctx.fillStyle = profiles[0].color;
        ctx.fill();
        ctx.closePath();
      }
    }

    ballY += 0.5;
    return ballX;
  };

  const drawLines = () => {
    if (ballY === canvas.height) clearInterval(startDrawing);
    if (ballY === canvas.height || isCrossing) return;

    const checkLegs = ballY % legGap === 0;
    let diffX = ballX * 2;
    let move = 0.5;
    let straight = true;
    let right = false;
    let left = false;

    // for (let p = 0; p < players; p++) {

    if (checkLegs) {
      if (LR <= 8) {
        right = ladder[LR][LC] === 1;
        left = ladder[LR][LC - 1] === 1;
        straight = right || left ? false : true;
        console.log(LR, LC, right, left);
      }

      if (straight) {
        ballY += move;
        drawBalls(ballX, diffX, ballY);
      }

      if (right) {
        console.log("right", ballX);
        ballX = crossLegs(0.5, ballX);
        isCrossing = false;
        LC += 1;
      }

      if (left) {
        console.log("left", ballX);
        ballX = crossLegs(-0.5, ballX);
        isCrossing = false;
        LC -= 1;
      }
    } else {
      drawBalls(ballX, diffX, ballY);
    }
    // }

    if (checkLegs) LR++;
    if (!checkLegs && straight) ballY += move;
    // console.log(ballY, "straight", straight, "right", right, "left", left);
  };

  const matchResults = () => {
    // dispatch({ type: "GET_RESULTS", index: p, result });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvas = canvasRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    drawLadders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ballX = canvas.width / (players * 2);
    startDrawing = setInterval(drawLines, 5);
    console.log(ladder);
  }, []);

  return <canvas className={"canvas"} ref={canvasRef}></canvas>;
};

export default Canvas;
