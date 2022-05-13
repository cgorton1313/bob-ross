const bobRossData = require('../bob-ross-data.js');

async function testSomething() {
    // here you can call a function that is in bob-ross-data.js and wait for the result
    let someData = await bobRossData.sqlTest(); // says it is not a function
    console.log(someData);
    // inspect the log to see what kind of object you got back
}

testSomething();