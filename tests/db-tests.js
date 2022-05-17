const bobRossData = require('../bob-ross-data.js');

async function testSomething() {
    // here you can call a function that is in bob-ross-data.js and wait for the result
    let someData = await bobRossData.sqlTest();
    console.log(someData);
}

testSomething();