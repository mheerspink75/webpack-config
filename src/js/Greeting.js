Greeting = () => 'Hi';
console.log(Greeting());

document.getElementById('Test').innerHTML = Greeting() + ', it works!';
console.log(process.env.Test);