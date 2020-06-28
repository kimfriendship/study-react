/* eslint-disable react-hooks/exhaustive-deps */
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
  let firstX = 0;
  let diffX = 0;
  let ballX = 0;
  let ballY = 2;
  let LR = 0;
  let LC = 0;

  const drawBalls = (p) => {
    ctx.beginPath();
    ctx.arc(ballX + 1, ballY, 2, 0, Math.PI * 2);
    ctx.fillStyle = profiles[p].color;
    ctx.fill();
    ctx.closePath();
  };

  const crossLegs = (p, move, ballX, ballY) => {
    isCrossing = true;
    const rightGap = firstX * (LC ? 2 * LC + 3 : 3);
    const leftGap = firstX * (LC === 1 ? LC : 2 * LC - 1);

    console.log("ballX", ballX);
    console.log("gaps", firstX, rightGap, leftGap);

    if (move > 0) {
      for (let i = 0; ballX < rightGap; i++) {
        console.log(profile, "drawing right leg");
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.1, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }
    if (move < 0) {
      console.log("condition", ballX, leftGap);
      for (let i = 0; ballX > leftGap; i++) {
        console.log(profile, "drawing left leg");
        ballX += move;
        ctx.beginPath();
        ctx.arc(ballX + 1, ballY, 0.1, 0, Math.PI * 2);
        ctx.fillStyle = profiles[p].color;
        ctx.fill();
        ctx.closePath();
      }
    }

    console.log("cross", move);
    ballY += 1;
    return ballX;
  };

  const drawLines = (p) => {
    if (ballY === canvas.height || isCrossing) return;

    const checkLegs = ballY % legGap === 0;
    let move = 0.5;
    let straight = true;
    let right = false;
    let left = false;

    if (checkLegs) {
      if (LR <= 8) {
        right = ladder[LR][LC] === 1;
        left = ladder[LR][LC - 1] === 1;
        straight = right || left ? false : true;
        console.log("line", p, LR, LC, right, left);
      }

      if (straight) {
        ballY += move;
        drawBalls(p, ballX, diffX, ballY);
      }

      if (right) {
        console.log(profile, "right", ballX);
        ballX = crossLegs(p, 0.5, ballX, ballY);
        isCrossing = false;
        LC += 1;
      }

      if (left) {
        console.log(profile, "left", ballX);
        ballX = crossLegs(p, -0.5, ballX, ballY);
        isCrossing = false;
        LC -= 1;
      }
    } else {
      drawBalls(p, ballX, diffX, ballY);
    }

    if (checkLegs) LR++;
    if (!checkLegs && straight) ballY += move;
  };

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    firstX = canvas.width / (players * 2);
    diffX = firstX * 2;
    ballX = firstX + diffX * profile;
    LC = profile;

    const startDrawing = setInterval(() => drawLines(profile), 10);
    return () => clearInterval(startDrawing);
  });

  return <canvas></canvas>;
};

export default Paths;
