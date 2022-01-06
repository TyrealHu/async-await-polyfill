function __awaiter(instance, args, generator) {
  function toP(value) {
    return value instanceof Promise ? value : new Promise(function(resolve, reject) {
      resolve(value);
    });
  }

  return new Promise(function(resolve, reject) {
    function fulfiiled(value) {
      try {
        run(generator.next(value));
      } catch(e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        run(generator.throw(value));
      } catch(e) {
        reject(e);
      }
    }

    function run(result) {
      result.done ? resolve(result.value) : toP(result.value).then(fulfiiled, rejected);
    }

    run((generator = generator.apply(instance, args || [])).next());
  });
}

function request1() {
  return Promise.resolve('this is request1');
}

function request2() {
  return Promise.resolve('this is request2');
}

__awaiter(this, [2], function *test(a) {
  console.log(a);
  var res = yield request1();
  console.log(res);
  res = yield request2();
  console.log(res);
  return res;
});
