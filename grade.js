function grade(score) {
  if (score > 100 || score < 0 || typeof score !== "number") {
    console.log("Your score must be 0 to 100!");
  } else if (score >= 80) {
    console.log("You got A");
  } else if (score >= 70) {
    console.log("You got B");
  } else if (score >= 60) {
    console.log("You got C");
  } else if (score >= 50) {
    console.log("You got D");
  } else {
    console.log("You got F");
  }
}

grade(0.1);
