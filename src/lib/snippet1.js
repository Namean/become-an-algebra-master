str = `introduction to equations
evaluating expressions
inverse operations
simple equations
balancing equations
equations with subscripts
word problems into equations
consecutive integers`;

function skelitize(inputString) {
  return inputString.split(" ").join("-");
}

function wrapHTML(inputString, elementName, attribute) {
  if (!attribute) {
    return `<${elementName}>${inputString}</${elementName}>`;
  }
  return `<${elementName} ${attribute}="">${inputString}</${elementName}>`;
}

function setHTMLAttribute(inputString, attribute) {}

let stringArray = str.split("\n");
let skelitizedArray = stringArray.map((x) => {
  //   return x.split(" ").join("-");
  return skelitize(x);
});

let anchorsArray = skelitizedArray.map((x) => wrapHTML(x, "a", "src"));
let result = anchorsArray.map((x) => wrapHTML(x, "li"));

console.log(result[0].split(`src=""`));
