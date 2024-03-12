#!/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHTMLElement = void 0;
const log = console.log;
class customHTMLElement {
    constructor() { }
    // methods
    setAttributes(attributes) {
        this.attributes = attributes;
    }
    getAttributesStrings() {
        if (!this.attributes)
            return []; // Check if attributes array is undefined
        let attributeStrings = this.attributes.map((attribute) => {
            if (!attribute)
                return ""; // Check if current attribute is undefined
            const { name, value } = attribute;
            return `${name}="${value}"`;
        });
        return attributeStrings;
    }
    getAttributeString() {
        return this.getAttributesStrings().join(" ");
    }
}
exports.customHTMLElement = customHTMLElement;
let attributesObjectA = {
    name: "src",
    value: "https://www.example.com",
};
let attributesObjectB = {
    name: "target",
    value: "_blank",
};
let el = new customHTMLElement();
el.setAttributes([attributesObjectA, attributesObjectB]);
log(el.getAttributesStrings());
// console.log(el);
