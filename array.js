const myFavoriteFood = ["Popcorn", "Apple", "Salad", "Coke"];

console.log("Most favorite food index is " + myFavoriteFood.indexOf("Popcorn"));

// const myFavoriteFoodMore = myFavoriteFood.concat("Candy", "Jelly", "Juiec");

myFavoriteFood.push("Candy", "Jelly", "Juice");

console.log("My favorite food is " + myFavoriteFood); // Push method

// console.log("My favorite food is " + myFavoriteFoodMore); // Concat method

console.log(myFavoriteFood.includes("Popcorn"));
