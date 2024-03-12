const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

// const dom = new JSDOM(`<li><a src="">introduction-to-equations</a></li>
// <li><a src="">evaluating-expressions</a></li>
// <li><a src="">inverse-operations</a></li>
// <li><a src="">simple-equations</a></li>
// <li><a src="">balancing-equations</a></li>
// <li><a src="">equations-with-subscripts</a></li>
// <li><a src="">word-problems-into-equations</a></li>
// <li><a src="">consecutive-integers</a></li>`);

const dom = new JSDOM(``);
const document = dom.window.document;

let li = document.createElement("li");
let a = document.createElement("a");
a.innerText = "operations.html";
// src = document.createAttribute("src");
a.target = "_blank";
a.src = "operations.html";
a.toString = () => {
  console.log(`<a src="${a.src}">${a.innerText}</a>`);
};

let desiredAttributes = ["src", "target"];
let keys = Object.keys(a);

console.log(keys);

// desired result
// console.log(`<a ${attributeName[n[0]]}="${attributeValue[n[1]]}">${n.innerText}</a>`);
let result = keys.map((x) => (desiredAttributes.includes(x) === true ? x : ""));

// console.log(result);

// console.log(Object.keys(a).includes("src"));
// a.toString();
