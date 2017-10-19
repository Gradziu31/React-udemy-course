let visibility = false;
const toggle = () => {
    visibility = !visibility;
    render();
}

const app = document.getElementById("app");
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>
            {visibility ? "Hide details" : "Show details"}
            </button>
            {visibility && (
                <p>Praesent facilisis sem enim, eget vulputate leo mollis fringilla. Vestibulum commodo eleifend massa, et fermentum nunc pulvinar ut.</p>
            )}
        </div>
    );
    ReactDOM.render(jsx,app);
};
render();
