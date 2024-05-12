let quote = document.querySelector(".quote");
let person = document.querySelector('.person');
let btn = document.querySelector('.changeQuote');

let quotes = [
    {
        quote: `"Success is not final; failure is not fatal; it is the courage to continue that counts"`,
        person: `Winston S. Churchill`
    },
    {
        quote: `"Failure is simply the opportunity to begin again, this time more intelligently"`,
        person: `Henry Ford`
    },
    {
        quote: `"80% of Success is Showing Up"`,
        person: `Woody Allen`
    }, {
        quote: `"A wise man speaks because he has something to say, a fool speaks because he has to say something"`,
        person: `Plato`
    }, {
        quote: `"If you don't know what you want to achieve in your presentation your audience never will"`,
        person: `Harvey Diamond`
    }, {
        quote: `"Only the prepared speaker deserves to be confident"`,
        person: `Dale Carnegie`
    }, {
        quote: `"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success"`,
        person: `Dale Carnegie`
    }, {
        quote: `"We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes - understanding that failure is not the opposite of success, it's part of success" `,
        person: `Ariana Huffington`
    }, {
        quote: `"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty" `,
        person: `Winston Churchill`
    }, {
        quote: `"Success is stumbling from failure to failure with no loss of enthusiasm"`,
        person: `Winston Churchill`
    }, {
        quote: `"You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character"`,
        person: `Unknown`
    }, {
        quote: `"It's Not Whether You Get Knocked Down, It's Whether You Get Up"`,
        person: `Vince Lombardi`
    }, {
        quote: `"If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You"`,
        person: `Steve Jobs `
    },
];

function changeQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}

btn.addEventListener('click', changeQuote);