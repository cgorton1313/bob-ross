const bobRossData = require('../bob-ross-data.js');

async function testSomething() {
    // here you can call a function that is in bob-ross-data.js and wait for the result
    // let someData = await bobRossData.sqlTest();
    let paintingsData = await bobRossData.getPaintings();
    // console.log(someData);
    console.log(paintingsData);
}

testSomething(); // this was working? I haven't changed anything but when I tried it at home i couldn't get into the database