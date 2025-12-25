// localStorage.clear()
const homePagesboxes = document.querySelectorAll(".commonboxes");
const commonsec = document.querySelectorAll(".commonsec");
const back = document.querySelectorAll(".back");
const joke = document.querySelector(".joke");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const thirdbox = document.querySelector("#thirdbox");
const thankyouContainer = document.querySelector(".thankyoucontainer");
const thankyouform = document.querySelector(".thankyouform");
const thankyouinputmsg = document.querySelector("#thankyouinputmsg");
const thankyoudisplaybox = document.querySelector(".thankyoudisplaybox");
const todoh2 = document.querySelector(".todoh2");
const todopage = document.querySelector(".todo");
const todoform = document.querySelector(".todoform");
const todoinput = document.querySelector(".todoinput");
const important = document.querySelector("#important");
const todobox = document.querySelector(".todobox");
const positive = document.querySelector(".positive");
const thanyouh2 = document.querySelector(".thankyouh2");
const outerdiv = document.querySelector(".outerdiv");
const alltodo = document.querySelector(".alltodo");
const negative = document.querySelector(".negative");
const saidh2 = document.querySelector(".saidh2");
const saidform = document.querySelector(".saidform");
const saidinput = document.querySelector(".saidinput");
const saidmsgp = document.querySelector(".saidmsgp");
const saidmsg = document.querySelector(".saidmsg");
const root = document.documentElement;
const theam = document.querySelector("#theam");
const save = document.querySelector("#save");
const emojestrack = document.querySelector(".emojestrack");
const allBtn = document.querySelectorAll(".emojis-btn");
// Access date, month, year (based on system settings)
let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

// Motivational quotes array
const todoQuotes = [
  "Small steps every day lead to big success 🚀",
  "Focus on one task, finish it, then move ahead 🎯",
  "Your future depends on what you do today ⏳",
  "Discipline today creates freedom tomorrow 🔥",
  "Write it down, work on it, check it off ✅",
  "Progress matters more than perfection 🌱",
  "One completed task is better than ten planned 💪",
  "Stay consistent, results will follow automatically 🌟",
];
const thankYouQuotes = [
  "Thank you 😊 aapka support bohot matter karta hai",
  "Choti si thanks, lekin feeling dil se ❤️",
  "Grateful hoon ki aap yahan ho 🌸",
  "Thank you for being part of this journey ✨",
  "Aapka time, aapka effort – thank you 💙",
];
const dailyThoughts = [
  "Aaj ka din thoda heavy tha, par likhne ke baad halka lag raha hai 😌",
  "Kabhi-kabhi bas likh dena hi kaafi hota hai, solution baad me milta hai ✍️",
  "Jo dil me hai use likhne se clarity aati hai 🧠✨",
  "Aaj apne liye time nikala, ye bhi ek achievement hai 🌿",
  "Har din perfect nahi hota, par har din kuch sikhata zaroor hai 💭",
  "Likha hua dard, adha heal ho chuka hota hai ❤️",
];
const veryHappyMood = [
  "Aaj tumhari energy kamal ki lag rahi hai 🌟",
  "Is mood ko sambhaal ke rakho, ye rare hota hai 😄",
  "Tum aaj jo chaho kar sakte ho 💪",
  "Smile aaj tumhari superpower hai 😊",
  "Aaj ka din balanced lag raha hai 🌿",
  "Choti choti khushiyan bhi matter karti hain 🙂",
  "Tum sahi direction me ho, bas chalte raho 🚶‍♂️",
  "Aaj ka mood calm aur peaceful hai 😌",
];
const angryMood = [
  "Gussa aa raha hai, par ye bhi ek emotion hai 😤",
  "Thoda sa break lo, saans lo 🫁",
  "Reaction se pehle pause lena power hai 🛑",
  "Ye feeling permanent nahi hai, trust karo 🔥",
];
const sadMood = [
  "Aaj thoda heavy lag raha hai, samajh aata hai 😔",
  "Tum akela nahi ho, ye phase bhi nikal jayega 🤍",
  "Dil halka karna zaroori hota hai kabhi kabhi 💭",
  "Aaj slow chalna bilkul allowed hai 🐢",
];
const neutralMood = [
  "Kabhi kabhi bas normal rehna bhi theek hota hai 😐",
  "Aaj ka din average hai, aur ye bilkul okay hai 🙂",
  "Har din exciting ho, zaroori nahi 🌤️",
  "Shaant rehna bhi ek strength hai 🧘",
];
const nervousHappy = [
  "Aaj thoda pressure tha, par tumne handle kar liya 😅",
  "Perfect nahi tha din, par end me relief mila 🌿",
  "Stress ke beech bhi tum khade rahe — ye bhi strength hai 💪",
  "Sab smooth nahi hota, par tum rukhe nahi 😌",
];
// Images shown in Thank You container
let imagesArr = [
  "./image/1.jpeg",
  "./image/2.jpeg",
  "./image/3.jpeg",
  "./image/4.jpeg",
  "./image/5.jpeg",
  "./image/6.jpeg",
  "./image/7.jpeg",
  "./image/8.jpeg",
  "./image/9.jpeg",
  "./image/10.jpeg",
  "./image/11.jpeg",
  "./image/12.jpeg",
  "./image/13.jpeg",
  "./image/14.jpeg",
  "./image/15.jpeg",
  "./image/16.jpeg",
  "./image/17.jpeg",
  "./image/18.jpeg",
  "./image/19.jpeg",
  "./image/20.jpeg",
  "./image/21.jpeg",
  "./image/22.jpeg",
  "./image/23.jpeg",
  "./image/24.jpeg",
  "./image/25.jpeg",
  "./image/26.jpeg",
  "./image/27.jpeg",
  "./image/28.jpeg",
  "./image/29.jpeg",
  "./image/30.jpeg",
  "./image/31.jpeg",
  "./image/32.jpeg",
  "./image/33.jpeg",
  "./image/34.jpeg",
  "./image/35.jpeg",
  "./image/36.jpeg",
  "./image/37.jpeg",
];
let nervousHappyimagesArr = [
  "./image/nervous1.jpeg",
  "./image/nervous2.jpeg",
  "./image/nervous3.jpeg",
  "./image/nervous4.jpeg",
  "./image/nervous5.jpeg",
];

let veryHappyMoodImagesArr = [
  "./image/veryHappy1.jpeg",
  "./image/veryHappy2.jpeg",
  "./image/veryHappy3.jpeg",
  "./image/veryHappy4.jpeg",
];
let sadMoodImagesArr = [
  "./image/saidmood1.jpeg",
  "./image/saidmood2.jpeg",
  "./image/saidmood3.jpeg",
  "./image/saidmood4.jpeg",
  "./image/saidmood5.jpeg",
];
let angryMoodImagesArr = [
  "./image/angry1.jpeg",
  "./image/angry2.jpeg",
  "./image/angry3.jpeg",
  "./image/angry4.jpeg",
];
let neutralMoodImagesArr = [
  "./image/natural1.jpeg",
  "./image/natural2.jpeg",
  "./image/natural3.jpeg",
  "./image/natural4.jpeg",
  "./image/natural5.jpeg",
];

// TheamColor Array
let colorObj = {
  default: {
    first: "#f4eeff",
    sec: "#dcd6f7",
    third: "#a6b1e1",
    four: "#424874",
  },
  dark: {
    first: "#1e1e2e",
    sec: "#c7c7ff ",
    third: "#3b3b5c",
    four: "#2a2a3c",
  },
  mintgreen: {
    first: "#f4fbf7",
    sec: "#dff3ea",
    third: "#9ed6c3",
    four: "#2f6f5f",
  },
  blue: {
    first: "#f2f8ff",
    sec: "#dbe9ff",
    third: "#9bbcff",
    four: "#2f4f9f",
  },
  purple: {
    first: "#f7f4ff",
    sec: "#e6e0ff",
    third: "#b9c0f5",
    four: "#4a4f9d",
  },
  rosemint: {
    first: "#fff5f7",
    sec: "#fde2e7",
    third: "#f3a9b8",
    four: "#8b3a4a",
  },
  brown: {
    first: "#fdfaf6",
    sec: "#f1e7da",
    third: "#c8b6a6",
    four: "#5f4b3b",
  },
  orange: {
    first: "#fff7f0",
    sec: "#ffe1cc",
    third: "#ffb085",
    four: "#b94e32",
  },
};

//  function show line Utility function
let headlineInterval;
function displayheadline(arr, elem) {
  clearInterval(headlineInterval);
  let count = 0;
  headlineInterval = setInterval(() => {
    let random = Math.floor(Math.random() * arr.length);
    elem.innerText = arr[random];
    count++;
    if (count === arr.length) {
      clearInterval(headlineInterval);
    }
  }, 2000);
}

// This function chage color on your complete web page
function colorChange() {
  let color = localStorage.getItem("color");
  if (color === null) {
    root.style.setProperty("--first", colorObj.default.first);
    root.style.setProperty("--sec", colorObj.default.sec);
    root.style.setProperty("--third", colorObj.default.third);
    root.style.setProperty("--four", colorObj.default.four);
  } else {
    root.style.setProperty("--first", colorObj[color].first);
    root.style.setProperty("--sec", colorObj[color].sec);
    root.style.setProperty("--third", colorObj[color].third);
    root.style.setProperty("--four", colorObj[color].four);
  }
}
colorChange();
theam.addEventListener("change", () => {
  let theamValue = theam.value;
  localStorage.setItem("color", theamValue);
  colorChange();
});

//  this code is use to navigate one page to another page
homePagesboxes.forEach((value) => {
  value.addEventListener("click", () => {
    commonsec[value.id].style.display = "block";
  });
});
back.forEach((value) => {
  value.addEventListener("click", () => {
    commonsec[value.id].style.display = "none";
  });
});

/* ======================== 1 page Joke Page code ========================*/
//  This code is use to fetch joke api and show on page
async function jokeapi() {
  setup.innerText = "Thinking...";
  punchline.innerText = "Loading joke 😄";
  // Fetch joke
  try {
    let url = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await url.json();
    setup.innerText = data.setup;
    setTimeout(() => {
      punchline.innerText = data.punchline + "😂🤣";
    }, 5000);
    // if any error occur
  } catch (err) {
    punchline.innerText = "Oops! Something went wrong 😅";
  }
}

//  represent joke
joke.addEventListener("click", () => {
  jokeapi();
  thirdbox.style.animationPlayState = "running";
});

//  ******************************* 2 page code***********************************
/* ========================= TODO PAGE QUOTES LOGIC ========================= */
// Show quotes one by one on page click
todopage.addEventListener("click", () => {
  displayheadline(todoQuotes, todoh2);
});

/* ========================= TODO STORAGE & DISPLAY ========================= */
// Get todos from localStorage or create empty array
let todo = JSON.parse(localStorage.getItem("task")) || [];

// Render todos on UI
function tododisplay() {
  let cluster = "";
  todo.forEach((val, idx) => {
    cluster += `
      <div class="todochild">
        ${val.isimportant ? `<span class="tag">Imp</span>` : ""}
        <p class="todotext">${val.inputvalue}</p>
        <button class="delete  commonbtn" id="${idx}">Delete</button>
      </div>
    `;
  });

  alltodo.innerHTML = cluster;
}

// Initial display
tododisplay();

/* ========================= ADD NEW TODO ========================= */
// Add todo on form submit
todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  // Validation
  if (todoinput.value.trim() === "") {
    important.checked = false;
    return alert("😅 Please Enter Something 😅");
  }

  // Add new todo object
  todo.push({
    inputvalue: todoinput.value,
    isimportant: important.checked,
  });

  // Save & update UI
  localStorage.setItem("task", JSON.stringify(todo));
  tododisplay();

  // Reset form
  todoinput.value = "";
  important.checked = false;
});

/* ========================   DELETE TODO (EVENT DELEGATION) ========================= */
// Delete todo using event delegation
todobox.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.id;
    todo.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(todo));
    tododisplay();
  }
});

//  *********************** 3 page code ***************************************

// Display Animation And Motivation Quote
positive.addEventListener("click", () => {
  displayheadline(thankYouQuotes, thanyouh2);
  outerdiv.style.animationPlayState = "running";
});

//  Asses Save data
let msg = JSON.parse(localStorage.getItem("thankyoumsg"));
if (msg == null) {
  msg = [];
}

//  Asses  save month , year
let savemonth = JSON.parse(localStorage.getItem("thankyouMonth"));
let saveyear = JSON.parse(localStorage.getItem("thankyouYear"));

//  clear old month data
if (savemonth !== month || saveyear !== year) {
  localStorage.removeItem("thankyoumsg");
  msg = [];
  localStorage.setItem("thankyouMonth", JSON.stringify(month));
  localStorage.setItem("thankyouYear", JSON.stringify(year));
}

// Show save data function
function displayThanyouElemFun() {
  let sum = "";
  msg.forEach((val) => {
    sum += `<div class="thankyouchild">
            <span class="date">${val.currentdate}</span>
            <p>
            ${val.message}
            </p>
            <div>
            <button class="heart">🥰</button>
            <button class="happybtn">🙂</button>
            <button class="same">😑</button>
          </div>
       </div>
          `;
  });
  thankyoudisplaybox.innerHTML = sum;
}

displayThanyouElemFun();

//take your msg and display show littel animation
thankyouform.addEventListener("submit", (e) => {
  e.preventDefault();

  // check  user enter some value or not
  if (thankyouinputmsg.value.trim() === "") {
    alert(
      "😊 Sometimes it’s hard to write, but you can still be thankful for the good things happening in your life. Stay positive! 😊"
    );
    return;
  }

  // show random images to provide littel animation touch
  let count = 0;
  let id = setInterval(() => {
    let random = Math.floor(Math.random() * imagesArr.length);
    thankyouContainer.style.backgroundImage = `url(${imagesArr[random]})`;
    count++;

    if (count === 6) {
      clearInterval(id);
      thankyouContainer.style.backgroundImage = "none";
    }
  }, 1000);

  msg.push({ currentdate: date, message: thankyouinputmsg.value });
  localStorage.setItem("thankyoumsg", JSON.stringify(msg));
  localStorage.setItem("thankyouMonth", JSON.stringify(month));
  localStorage.setItem("thankyouYear", JSON.stringify(year));

  //  display current data vo you add
  displayThanyouElemFun();

  // ree intialise value
  thankyouinputmsg.value = "";
});

//************************************** 4 page code ****************************************/
negative.addEventListener("click", () => {
  displayheadline(dailyThoughts, saidh2);
});

let saidArr = JSON.parse(localStorage.getItem("saidmsg")) || [];
let todaydate = JSON.parse(localStorage.getItem("savedate"));

// 🔁 Daily reset logic
if (todaydate !=date) {
  localStorage.removeItem("saidmsg");
  saidArr = [];
  localStorage.setItem("savedate", JSON.stringify(date));
}

// Show data
function saidDataShow() {
  let sum = "";
  saidArr.forEach((val) => {
    sum += `<p class="saidmsgp">${val}</p>`;
  });
  saidmsg.innerHTML = sum;
}

saidDataShow();

// Submit form
saidform.addEventListener("submit", (e) => {
  e.preventDefault();

  if (saidinput.value.trim() === "") {
    alert("Don't be sad. Every day is not the same 🙂🤗");
    return;
  }

  saidArr.push(saidinput.value);
  localStorage.setItem("saidmsg", JSON.stringify(saidArr));
  localStorage.setItem("savedate", JSON.stringify(date));

  saidDataShow();
  saidinput.value = "";
});

// This is emojiee page code

// it is used to show a alert msg  based on user emoje
function showFelling(arr) {
  let random = Math.floor(Math.random() * arr.length);
  alert(arr[random]);
}

let emojiesArr = JSON.parse(localStorage.getItem("emojeee")) || [];

// it show your emojieeee
function showemojie() {
  let sum = "";
  emojiesArr.forEach((val) => {
    sum += `
      <div class="emojebox">
        <span class="date">${val.currentdate}</span>
        <div class="emojisimg">${val.emojie}</div>
      </div>
    `;
  });
  emojestrack.innerHTML = sum;
}

// call fnc
showemojie();
let selectemoje = "";

// select emojiee
allBtn.forEach((val) => {
  val.addEventListener("click", () => {
    selectemoje = val.innerHTML;
  });
});

let emojieee = document.querySelector(".emojieee");

//  shoe imaage based on user responce
function randomImagesFnc(arr) {
  let random = Math.floor(Math.random() * arr.length);
  emojieee.style.backgroundImage = `url(${arr[random]})`;
  let img = arr[random];
  localStorage.setItem("todayimg", JSON.stringify(img));
}
let getimg = JSON.parse(localStorage.getItem("todayimg"));

//  use to show image when user refresh page
if (getimg) {
  emojieee.style.backgroundImage = `url(${getimg})`;
}

let emojiDate = JSON.parse(localStorage.getItem("emojiDate"));
//  reset image for next day
if (emojiDate != date) {
  localStorage.removeItem("todayimg");
}


// save emoji

save.addEventListener("click", () => {
  //  check  user enter a value or not
  if (selectemoje === "") return;

  //  function call based on user responce
  if (selectemoje === "😃") {
    showFelling(veryHappyMood);
    randomImagesFnc(veryHappyMoodImagesArr);
  } else if (selectemoje === "😅") {
    showFelling(nervousHappy);
    randomImagesFnc(nervousHappyimagesArr);
  } else if (selectemoje === "😑") {
    showFelling(neutralMood);
    randomImagesFnc(neutralMoodImagesArr);
  } else if (selectemoje === "😞") {
    showFelling(sadMood);
    randomImagesFnc(sadMoodImagesArr);
  } else {
    showFelling(angryMood);
    randomImagesFnc(angryMoodImagesArr);
  }


  if (JSON.parse(localStorage.getItem("emojiDate")) === date) {
  alert("You already selected your mood for today 🙂");
  return;
}

emojiesArr.push({
  currentdate: date,
  emojie: selectemoje,
});

// store data
  localStorage.setItem("emojeee", JSON.stringify(emojiesArr));
  localStorage.setItem("emojiDate" , JSON.stringify(date));
  
//button pointer event set to none
    allBtn.forEach((val) => {
    val.style.pointerEvents = "none";
    val.style.opacity = "0.5";
  });

  save.style.pointerEvents = "none";
  showemojie();
});

//  clear old month data
if (savemonth !== month || saveyear !== year) {
  localStorage.removeItem("emojeee");
  emojiesArr = [];
  localStorage.setItem("thankyouMonth", JSON.stringify(month));
  localStorage.setItem("thankyouYear", JSON.stringify(year));
}


// frize btn
if(emojiDate == date){
  allBtn.forEach((val) => {
    val.style.pointerEvents = "none";
    val.style.opacity = "0.5";
  });
  save.style.pointerEvents = "none";
}


//  next day alll uncloke
if (emojiDate !== date) {
  save.style.pointerEvents = "auto";
  save.style.opacity = "1";
  allBtn.forEach((btn) => {
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
  });
}

let headerh1 = document.querySelector(".headerh1");
 async function motivationalquoteapi(){
  try{
  let url = await fetch(`https://dummyjson.com/quotes/random`);
  let res = await url.json();
   headerh1.innerHTML = res.quote;
  }
  catch(err){
    console.log(err)
  }
}
motivationalquoteapi()