class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            checked: false,
            fruits:['사과', '바나나', '배', '귤'],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let color = 'blue';

        if (this.state.checked) {
            color = 'red';
        }

        const textStyle = {
                color: color,
                fontSize: '20'
        };

        const list = this.state.fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>
        })


        return <div>
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleClick}
            />

            <input
                value={this.state.text}
                onChange={this.handleChange}
            />

            <h1 style={textStyle}>{this.state.text}</h1>

            <ul>{list}</ul>
        </div>
    }


    handleChange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    handleClick() {
        this.setState({
            checked: !this.state.checked
        })
    }
}

const container = document.getElementById('root');
ReactDOM.render(<App/>, container);