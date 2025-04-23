class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.changeParent = this.changeParent.bind(this);
    }

    changeParent(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <CustomInput onChange={this.changeParent} />
                <p>{this.state.value}</p>
            </div>
        )
    }
}

class CustomInput extends React.Component {
    render() {
        return (
            <input onChange={this.props.onChange} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
