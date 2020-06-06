function* generatorFunction() {
  console.log("안녕하세요");
  yield 1;
  console.log("제너레이터 함수");
  yield 2;
  console.log("function*");
  yield 3;
  return 4;
}

const generator = generatorFunction();

generator.next(); // 안녕하세요
generator.next(); // 제너레이터 함수
generator.next(); // function*
generator.next();

function* sumGeneratorFunction() {
  console.log("sumGenerator starts");
  let a = yield;
  console.log("got a");
  let b = yield;
  console.log("got b");
  return a + b;
}

const sumGenerator = sumGeneratorFunction();

sumGenerator.next(); // sumGenerator starts
sumGenerator.next(2); // got a
sumGenerator.next(5); // got b

function* infiniteAddGenerator() {
  let result = 0;
  while (true) {
    result += yield result;
  }
}

const add = infiniteAddGenerator();

add.next();
add.next(10); // 10
add.next(10); // 20
