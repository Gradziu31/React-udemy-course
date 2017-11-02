class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return( 
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (
                <p>Praesent facilisis sem enim, eget vulputate leo mollis fringilla. Vestibulum commodo eleifend massa, et fermentum nunc pulvinar ut.</p>
            )}
            </div>
        );
    };
}
 
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

// let visibility = false;
// const toggle = () => {
//     visibility = !visibility;
//     render();
// }

// const app = document.getElementById("app");
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>
//             {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && (
//                 <p>Praesent facilisis sem enim, eget vulputate leo mollis fringilla. Vestibulum commodo eleifend massa, et fermentum nunc pulvinar ut.</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx,app);
// };
// render();
