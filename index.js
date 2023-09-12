function greeting(name) {
  if (name === undefined || name === "") {
    console.log("Hello, World");
  } else {
    console.log("Hello, " + name);
  }
}

greeting("job");
