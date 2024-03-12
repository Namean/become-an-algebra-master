#!/bin/env node

const log = console.log;

// Type Aliases
type customNumber = number | undefined | null;
type customString = string | string[] | undefined | null;

// Interfaces
interface attributeObject {
  name: customString;
  value: customString | customNumber;
}

export class customHTMLElement {
  public tagName?: customString;
  private innerText?: customString;
  private attributes?: attributeObject[];

  constructor() {}

  // methods

  public setAttributes(attributes: attributeObject[]): void {
    this.attributes = attributes;
  }

  public getAttributesStrings(): string[] {
    if (!this.attributes) return []; // Check if attributes array is undefined

    let attributeStrings: string[] = this.attributes.map((attribute) => {
      if (!attribute) return ""; // Check if current attribute is undefined
      const { name, value } = attribute;
      return `${name}="${value}"`;
    });

    return attributeStrings;
  }

  public getAttributeString(): customString {
    return this.getAttributesStrings().join(" ");
  }
}

let attributesObjectA: attributeObject = {
  name: "src",
  value: "https://www.example.com",
};

let attributesObjectB: attributeObject = {
  name: "target",
  value: "_blank",
};

let el = new customHTMLElement();

el.setAttributes([attributesObjectA, attributesObjectB]);
log(el.getAttributesStrings());
// console.log(el);
