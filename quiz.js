let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");
let start = document.getElementById("start")
let nxt = document.getElementById("next")
let con = document.getElementById("ops")
let op1 = document.getElementById("op1")
let bck = document.getElementById("back")
let point = document.getElementById("point1")
let ans = document.getElementById("ans")
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
function shuffleOptions() {
  const options = [op1, op2, op3, op4];

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]]; // Swap
  }

  return options;
}

let attemts = 0;
let num;
let d;
const recieveClick = async (e) => {
  console.log("Clicked")
  try {
    nxt.disabled = true;
    setTimeout(() => {
      nxt.disabled = false;
    }, 5000)
    let f = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    d = await f.json();
    console.log(d)
    shuffledop = shuffleOptions()
    op2.disabled = false;
    op4.disabled = false;
    op3.disabled = false;
    op1.disabled = false;
    op1.style.backgroundColor = "#3498db ";
    op2.style.backgroundColor = "#3498db";
    op3.style.backgroundColor = "#3498db";
    op4.style.backgroundColor = "#3498db";
    ans.innerText = ""
    h1.innerText = decodeHTML(d.results[0].question);
    console.log(d.results[0].correct_answer)
    shuffledop[1].innerText = decodeHTML(d.results[0].correct_answer)
    shuffledop[2].innerText = decodeHTML(d.results[0].incorrect_answers[1])
    shuffledop[3].innerText = decodeHTML(d.results[0].incorrect_answers[2])
    shuffledop[0].innerText = decodeHTML(d.results[0].incorrect_answers[0])
    start.style.display = "none"
    nxt.style.display = "block"
    con.style.display = "flex"
    bck.style.display = "flex"
  } catch {
    console.error("error in fetching");
  }
}

nxt.addEventListener('click', recieveClick)

btn.addEventListener("click", recieveClick);
btn.addEventListener('click', () => {
  point.innerText = 0;
  attemts = 0;
})
bck.addEventListener('click', () => {
  start.style.display = "flex"
  nxt.style.display = "none"
  con.style.display = "none"
  bck.style.display = "none"
  h1.innerText = "QUIZ APP"
})
const correct = (e) => {
  if (e.innerText === decodeHTML(d.results[0].correct_answer)) {

    num = parseInt(point.innerText)
    point.textContent = num + parseInt(1)
    e.style.backgroundColor = "lightgreen";
  }
  else {
    e.style.backgroundColor = "red";
    ans.innerText = `ANSWER: ${decodeHTML(d.results[0].correct_answer)}`;
  }
  console.log("inside correct function")
  attemts += 1;

}
op1.addEventListener('click', () => {
  correct(op1)
  op2.disabled = true;
  op4.disabled = true;
  op3.disabled = true;
})
op2.addEventListener('click', () => {
  correct(op2)
  op1.disabled = true;
  op4.disabled = true;
  op3.disabled = true;
})
op3.addEventListener('click', () => {
  correct(op3)
  op2.disabled = true;
  op4.disabled = true;
  op1.disabled = true;
})
op4.addEventListener('click', () => {
  correct(op4)
  op2.disabled = true;
  op1.disabled = true;
  op3.disabled = true;
})




