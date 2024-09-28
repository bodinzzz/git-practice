function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
let tasks = [
  { job: "刷牙", time: 1000 },
  { job: "吃早餐", time: 3000 },
  { job: "寫功課", time: 1000 },
  { job: "吃午餐", time: 2000 },
];

doJob(tasks[0].job, tasks[0].time, function (data) {
  console.log(data);
  doJob(tasks[1].job, tasks[1].time, function (data) {
    console.log(data);
    doJob(tasks[2].job, tasks[2].time, function (data) {
      console.log(data);
      doJob(tasks[3].job, tasks[3].time, function (data) {
        console.log(data);
      });
    });
  });
});
