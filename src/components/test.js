const sum = (num1, num2, callback) => {
  try {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      const result = num1 + num2;
      callback(null, result);
    } else {
      throw new Error('Invalid number');
    }
  } catch (error) {
    callback(error, null);
  }
};

const sumAsync = (num1, num2) => {
  return new Promise((resolve, reject) => {
    sum(num1, num2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const sumPromise = () => {
  sumAsync(5, 6)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

const main = async () => {
  try {
    const promiseRes = await sumAsync(5, 6);
    return console.log(promiseRes);
  } catch (error) {
    return console.log(error);
  }
};

sum(5, 6, (err, result) => {
  if (err) return console.log(err.message);
  return console.log(result);
});
sumPromise(5, 6);
main();
