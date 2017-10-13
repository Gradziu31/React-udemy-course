console.log("App.js is running!");

// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania

// my own work

const book = {
    title: <p>Some title from object.</p>, 
    subtitle: "Some subtitle from object.",
    options: ['One', 'Two']
};

const tamplate = ( 
<div> 
<h1> {book.title} </h1>
{book.subtitle && <p>{book.subtitle}</p>}

{(book.options.length > 0) ? "Here are your options" : "No options"}
<ol>
    <li>Item one</li>
    <li>Item two</li>  
</ol> 
</div> 
); 

// course
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}; 
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};



const appRoot = document.getElementById("app");
const renderCounterApp = () => {
    const tamplateTwo = (
        <div>
            <h1>Count: {count}</h1>  
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(tamplateTwo, appRoot);
};
renderCounterApp();
