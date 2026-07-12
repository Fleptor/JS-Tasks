// Strings practice.

let str = "Belal";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));

let text = "I Love JavaScript";

console.log(text.includes("Love"));
console.log(text.startsWith("I"));
console.log(text.endsWith("Script"));
console.log(text.replace("JavaScript", "Python"));
console.log(text.slice(0, 6));

let skills = "HTML,CSS,JavaScript,Bootstrap";

let skillsArray = skills.split(",");
console.log(skillsArray.length);
console.log(skillsArray[0]);
console.log(skillsArray[3]);
console.log(skills.includes("CSS"));
console.log(skills.toUpperCase());
console.log(skills.replace("Bootstrap", "React"));
