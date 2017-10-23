console.log("App.js is running!");
// JSX - JavaScript XML, poniżej jest kod w JSX jest to na styl scss->css więc musi użyc babel do skompilowania
// my own work
const book = {
    title: <p>Some title from object.</p>, 
    subtitle: "Some subtitle from object.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        book.options.push(option);
        e.target.elements.option.value = "";
        render();
    };
};

const onRemoveAll = () => {
    book.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*book.options.length);
    alert(book.options[randomNum]);
};

const appRoot = document.getElementById("app");

const render = () => {
    const tamplate = (
        <div> 
        <h1> {book.title} </h1>
        {book.subtitle && <p>{book.subtitle}</p>}
        <p>{book.options.length > 0 ? "Here are your options" : "No options"}</p>
        <button disabled={book.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        {
            <ol>
                {
                book.options.map((e) => {
                    return <li>{e}</li>;
                })
                }
            </ol> 
        }
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
        </div> 
        ); 
        ReactDOM.render(tamplate, appRoot)
};
render();