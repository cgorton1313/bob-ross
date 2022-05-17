const bobRossData = require('../bob-ross-data.js');

async function testSomething() {
    let someData = await bobRossData.sqlTest();
    console.log(someData);
}

testSomething();