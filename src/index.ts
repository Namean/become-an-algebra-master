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

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

enum lecture_types {
  VIDEO = "video",
  READING = "reading",
  QUIZ = "quiz",
}

let section1 = {
  id: 0,
  lecture_number: 5,
  lecture_type: lecture_types.VIDEO,
  title: "Introduction to operations",
  lecture_count: "4",
  duration: 8, // in minutes
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
