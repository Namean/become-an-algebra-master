// snippet2.js

const log = console.log;

let a = {
  tagName: "a",
  innerText: "introduction to equations",
  attributes: [
    {
      name: "src",
      value: "https://www.example.com",
    },
    {
      name: "target",
      value: "_blank",
    },
  ],
  getAttributesStrings: function () {
    let attributes = this.attributes;
    let size = attributes.length - 1;
    let attributeStrings = attributes.map((x, index) => {
      const { name, value } = attributes[index];
      return `${name}="${value}"`;
    });

    return attributeStrings;
  },
  toString: function () {
    const { tagName, innerText } = this;
    const attributeString = this.getAttributesStrings().join(" ");

    console.log("\n");
    log(
      `<${tagName} ${attributeString}>${innerText.toLowerCase()}</${tagName}>`
    );
  },
};

a.toString();
a.getAttributesStrings();
