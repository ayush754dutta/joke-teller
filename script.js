// 1. make an array of jokes:

const jokeArr = [
  "What do you call a fish with no eyes? Fsh!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "What do you call a cow with no legs?Ground beef.",
  "What do you call a deer with no eyes?No idear!",
  "What do you call a bee that can't make up its mind? A maybe.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "What's the difference between a tea bag and the English cricket team? A tea bag stays in the cup longer.",
  "Why did the Aussie break his leg throwing a ball? He forgot it was chained to his foot.",
  "A man calls the hospital where his pregnant wife was giving birth. But he accidentally rings Lord's by mistake. How's it going? he asks.The assistant replies We've got four out and expect to have the rest out before lunch. The last one was a duck.",
  "What did the cricket coach say to the batsman who kept getting out LBW? Don't move your feet!",
];

// 2. generate random num:

let random = Math.trunc(Math.random() * 10) + 1;
console.log(random);

// 3. select elements:

const btn = document.querySelector(".btn");
console.log(btn);

const jokeEl = document.querySelector(".joke-heading");
console.log(jokeEl);

btn.onclick = () => {
  jokeEl.innerHTML = `<h2>${jokeArr[random]}</h2>`;
  random = Math.trunc(Math.random() * 10);
};
