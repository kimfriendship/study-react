const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");

class AppServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = config;
    this.app = app;

    //동시성 처리를 위한 준비 코드인데, 후반부에 설명이 들어갑니다.
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stop = false;
  }
  //실제로 이 클래스가 실행되는 실행 함수 부분입니다.
  //여기엔 수많은 app 설정 코드들이 존재하게됩니다.
  start() {
    this.app.use(helmet());
    this.app.use(bodyParser());
    this.app.use(cookieParser());
    this.app.use((req, res, next) => {
      console.log("middleware!!!!!");
      next();
    });

    return this;
  }
}

const createServer = (config = {}) => {
  const server = new AppServer();
  return server.start();
};

exports.createServer = createServer;
