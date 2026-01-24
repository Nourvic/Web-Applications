export const x = () => {
  //   console.log("Hello World !!")
  return 10;
};

const vfunc: () => string = () => {
  return "test from TS";
};

const zfunc: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const yfunc = (x: string, y: number) => {
  return ["Test", 7];
};
