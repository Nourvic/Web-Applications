const myFunction = async () => {
  return "Hello Wrold";
};

const myFunc2 = () => {
  return new Promise<string>((resolve, reject) => {
    resolve("Hello World");
  });
};
