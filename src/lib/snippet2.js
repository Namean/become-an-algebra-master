#!/bin/env node
// snippet2.js

const log = console.log;

class customElement {
  constructor() {}

  // methods

  getTagName() {
    return this.tagName;
  }
  setTagName(tagName) {
    this.tagName = tagName;
  }
  getInnerText() {
    return this.innerText;
  }
  setInnerText(innerText) {
    this.innerText = innerText;
  }
  getAttributes() {
    return this.attributes;
  }
  setAttributes(attributes) {
    this.attributes = attributes;
  }
  getAttributesString() {}
}

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
    const { tagName, innerText, pizza = "french fry" } = this;
    const attributeString = this.getAttributesStrings().join(" ");

    log("\n");
    log(
      `<${tagName} ${attributeString}>${innerText.toLowerCase()}</${tagName}>`
    );
  },
};

a.toString();
a.getAttributesStrings();
