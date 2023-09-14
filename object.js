const person = {
  name: "Jack",
  age: 23,
  gender: "Male",
  pet: {
    kind: "Dragon",
    age: 102,
  },
};

const keyName = "name";

/* console.log("Name:", person.name);
console.log("Name:", person[keyName]); */

const person2 = person;

person2.name = "Steve";

/* console.log("Name:", person2.name);
console.log("Name:", person.name);
 */

// * Array of object: data from fetching data

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

/* data.forEach((item, index) => {
  console.log(
    `Person ${index + 1} \nName: ${item.name} \nAge: ${item.age} \nJob: ${
      item.job
    }\n------------------`
  );
}); */

const resultStrong = data.reduce((preVal, val, index) => {
  return `${preVal}\nPerson${index + 1}\nName: ${val.name}\nAge: ${
    val.age
  }\nJob: ${val.job}\n------------------`;
});
