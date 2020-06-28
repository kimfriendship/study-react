import React, { useEffect, useContext } from "react";
import { GameContext } from "../App.js";

const Paths = ({ canvasRef, profile }) => {
  const context = useContext(GameContext);
  const { mainState } = context;
  const { players, profiles, ladder } = mainState;

  let canvas = null;
  let ctx = null;
  let legGap = 15;
  let isCrossing = false;
  let diffX = 0;
  let ballX = 0;
  let ballY = 2;
  let LR = 0;
  let LC = 0;

  const drawBalls = (p) => {
    ctx.beginPath();
    ctx.arc(ballX + diffX * p + 1, ballY, 2, 0, Math.PI * 2);
    ctx.fillStyle = profiles[p].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLegs = (p, move, ballX, ballY) => {
    isCrossing = true;
    const stickGap = canvas.width / (players * 2);
    const rightGap = stickGap * (LC ? 2 * LC + 3 : 3);
    const leftGap = stickGap * (LC === 1 ? LC : 2 * LC - 1);

    if (move > 0) {
      for (let i = 0; ballX < rightGap; i++) {
        console.log("drawing right leg");
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 1, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }
    if (move < 0) {
      console.log("condition", ballX, leftGap);
      for (let i = 0; ballX > leftGap; i++) {
        console.log("drawing left leg");
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 1, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }

    console.log("cross", move);
    ballY += 0.5;
    return ballX;
  };

  const drawLines = (p) => {
    console.log("hi");

    // if (ballY === canvas.height) clearInterval(startDrawing);
    if (ballY === canvas.height || isCrossing) return;

    const checkLegs = ballY % legGap === 0;
    let move = 0.5;
    let straight = true;
    let right = false;
    let left = false;

    drawBalls(p);
    ballY += move;
    // if (checkLegs) {
    //   if (LR <= 8) {
    //     right = ladder[LR][LC] === 1;
    //     left = ladder[LR][LC - 1] === 1;
    //     straight = right || left ? false : true;
    //     console.log(LR, LC, right, left);
    //   }

    //   if (straight) {
    //     ballY += move;
    //     drawBalls(p, ballX, diffX, ballY);
    //   }

    //   if (right) {
    //     console.log("right", ballX);
    //     ballX = crossLegs(p, 0.5, ballX, ballY);
    //     isCrossing = false;
    //     LC += 1;
    //   }

    //   if (left) {
    //     console.log("left", ballX);
    //     ballX = crossLegs(p, -0.5, ballX, ballY);
    //     isCrossing = false;
    //     LC -= 1;
    //   }
    // } else {
    //   drawBalls(p, ballX, diffX, ballY);
    // }

    // if (checkLegs) LR++;
    // if (!checkLegs && straight) ballY += move;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    canvas = canvasRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext("2d");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ballX = (canvas.width / (players * 2)) * (LC ? LC : 2 * LC + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    diffX = ballX * 2;
    // console.log(canvas, ctx, ballX, diffX);
    // const test = (ballX) => {
    //   ctx.beginPath();
    //   ctx.arc(ballX, 2, 3, 0, Math.PI * 2);
    //   ctx.fillStyle = "red";
    //   ctx.fill();
    //   ctx.closePath();
    // };
    // test(ballX);
    setInterval(() => drawLines(profile), 10);
  });

  return <canvas></canvas>;
};

export default Paths;
