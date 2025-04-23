class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    countUp = (e) => {
        this.setState({
                count: this.state.count + 1
            }
        )
    };

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.countUp}>Click me</button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);