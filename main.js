let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
submit = document.querySelector(".sub");
yNum = document.querySelector(".years");
mNum = document.querySelector(".months");
dNum = document.querySelector(".days");
result = document.querySelector(".result");

const EPOCH = new Date(0);
const EPOCH_YEAR = EPOCH.getUTCFullYear();
const EPOCH_MONTH = EPOCH.getUTCMonth() + 1;
const EPOCH_DAY = EPOCH.getUTCDate();

submit.onclick = function () {
  let birthDay = new Date(`${year.value},${month.value},${date.value}`);
  console.log(birthDay);
  const diff = new Date(Date.now() - birthDay.getTime());
  y = Math.abs(diff.getUTCFullYear() - EPOCH_YEAR);
  m = Math.abs(diff.getUTCMonth() - EPOCH_MONTH);
  d = Math.abs(diff.getUTCDate() - EPOCH_DAY);
  result.style.display = "block";
  yNum.innerHTML = ` ${y}`;
  mNum.innerHTML = ` ${m}`;
  dNum.innerHTML = ` ${d}`;
};
