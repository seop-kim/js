class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    };

    componentDidUpdate() {
        clearInterval(this.timerId);
    }

    render() {
        return <ul>
            <Item value={this.state.time.toLocaleString()}/>
            <Item value={this.state.time.toLocaleString()}/>
            <Item value={this.state.time.toLocaleString()}/>
        </ul>
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    render() {
        return <li>Item Component {this.props.value}</li>
    }
}


const container = document.getElementById('root')
ReactDOM.render(<App/>, container)