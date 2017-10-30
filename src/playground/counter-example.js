class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count -1
            };
        });
    }
    handleReset(){
        // w tym przypadku moge normalnie to zrobic bo od razu podmieni mi wartosc i prevState zwraca ostatnia czyli 0 a nie np. 15
        this.setState(() => {
            return{
                count: 0
            };
        });
        this.setState((prevState) => {
            return{
                count: prevState.count+1
            };
        });
        //drugi nowszy sposob jednak preferowany jest ten pierwszy - tutaj jesli zrobie 2 takie funkcje to nie dziala to poprawnie bo nie zdazy wyzerowac a juz dodaje do starej wartosci
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>   
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }; 
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const tamplateTwo = (
//         <div>
//             <h1>Count: {count}</h1>   
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(tamplateTwo, appRoot);
// };
// renderCounterApp();