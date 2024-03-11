let str = `Getting started
Algebra 1 - Operations
Algebra 1 - Equations
Algebra 1 - Polynomials
Algebra 1 - Factoring
Algebra 1 - Functions and graphing
Algebra 1 - Inequalities
Algebra 1 - Systems of Equations
Final exam
Onward to Algebra 2!
Algebra 2 - Exponents and radicals
Algebra 2 - Ratios and proportions
Algebra 2 - Factoring
Algebra 2 - Rational Functions
Algebra 2 - Advanced Equations
Algebra 2 - Systems of Equations
Algebra 2 - graphing
Algebra 2 - Manipulating Functions
Algebra 2 - Exponential and logrithmic Functions
Final exam and wrap-up`;

str
  .split("\n")
  .map((x, index) =>
    console.log(`<li><a href="#">Section ${index + 1}: ${x}</a></li>`)
  );
