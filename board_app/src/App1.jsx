import React from "react";
import './App.css';
``
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }
    
    componentDidMount = () => {
        console.log("화면이 렌더링되었습니다.");
    }

    componentDidUpdate= () => {
        console.log("props 값이 변경되었습니다.");
    }

    componentWillUnmount = () => {
        console.log("컴포넌트가 사라질 예정입니다.");
    }
    onClick = () => {
        // this.state.counter++;
        // console.log(this.state.counter);
        this.setState({counter : this.state.counter + 1})
    }
    render() {
        return (
            <>
                <h1>Class Component</h1>
                <p>{this.state.counter} clicked</p>
                <button onClick={this.onClick}>Click</button>
            </>
        )
    }
}
export default App