"use strict";
const sections = {};
// durations are in minutes
const section = {
    id: "",
    section_number: "",
    title: "",
    lecture_count: "",
    duration: "",
    includes_resources: false,
    includes_quiz: false,
    complete: false,
    completion_date: "",
};
const lectures = {};
const lecture = {
    id: "",
    lecture_title: "",
    duration: "",
    has_resource: false,
    has_quiz: false,
    complete: false,
    completion_timestamp: "",
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var lecture_types;
(function (lecture_types) {
    lecture_types["VIDEO"] = "video";
    lecture_types["READING"] = "reading";
    lecture_types["QUIZ"] = "quiz";
})(lecture_types || (lecture_types = {}));
let section1 = {
    id: 0,
    lecture_number: 5,
    lecture_type: lecture_types.VIDEO,
    title: "Introduction to operations",
    lecture_count: "4",
    duration: 8,
    includes_resources: false,
    includes_quiz: false,
    complete: false,
    completion_date: "",
};
// function main() {
//   const course = {
//     title: "Become an Algebra Master",
//     course_url: "https://www.udemy.com/course/integralcalc-algebra/",
//     instructor: "Krista King",
//   };
//   document.querySelector("h1").innerText = course.title;
//   document.querySelector("h2").innerText = `created by ${course.instructor}`;
// }
// main();
console.log("Hello from TypeScript!");
