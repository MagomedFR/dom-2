// const div = document.createElement("div");
// div.className = "block";

// ----------------------Задача 1.3

// const b = document.createElement("b");
// b.classList.add("red", ",", "strong");

// ----------------------Задача 1.4

// const ul = document.createElement("ul");
// ul.className = "list";
// const li_1 = document.createElement("li");
// li_1.textContent = "привет, мир";
// ul.append(li_1);

// ----------------------Задача 1.5

// const div_1 = document.createElement("div");
// div_1.className = "red";

// const div_2 = document.createElement("div");
// div_2.className = "green";

// const div_3 = document.createElement("div");
// div_3.className = "blue";
// div_3.textContent = "я вложен";

// div_1.append(div_2);
// div_2.append(div_3);

// ----------------------Задача 1.6

// const div = document.createElement("div");

// const ul = document.createElement("ul");
// const li_1 = document.createElement("li");
// const li_2 = document.createElement("li");

// const url_1 = document.createElement("a");
// const url_2 = document.createElement("a");

// url_1.setAttribute("href", "/https://instagram.com/intocode");
// url_2.setAttribute("href", "/https://intocode.ru");

// url_1.textContent = "наш инстаграм";
// url_2.textContent = "наш сайт";

// div.append(ul);
// ul.append(li_1, li_2);
// li_1.append(url_1);
// li_2.append(url_2);

// ------------------------Задача 2.1

// const arr = ["html", "css", "js"];
// const ul = document.createElement("ul");

// for (let value of arr) {
//   const li = document.createElement("li");
//   li.textContent = value;
//   ul.prepend(li);
// }
// document.body.append;
// console.log(ul);

// --------------------------Задача 2.2

// const arr = ["html", "css", "js"];
// const ul = document.createElement("ul");

// function render(massiv) {
//   const ul = document.createElement("ul");

//   for (let value of massiv) {
//     const li = document.createElement("li");
//     li.textContent = value;
//     ul.prepend(li);
//   }
//   document.body.append;
//   console.log(ul);
// }

// render(arr);

// -----------------------------Задача 2.3

// const arr = [
//   {
//     name: "Google",
//     url: "https://google.com",
//   },
//   {
//     name: "Instagram",
//     url: "https://instagram.com",
//   },
//   {
//     name: "intocode",
//     url: "https://intocode.ru",
//   },
// ];

// function render(massiv) {
//   const ul = document.createElement("ul");

//   for (let value of massiv) {
//     console.log(value);
//     const li = document.createElement("li");
//     const url_1 = document.createElement("a");
//     url_1.textContent = value.name;
//     url_1.setAttribute("href", value.url);
//     ul.prepend(li);
//     li.prepend(url_1);
//   }
//   document.body.prepend;
//   console.log(ul);
// }
// render(arr);
