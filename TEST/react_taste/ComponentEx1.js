class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    // 컴포넌트가 화면에 출력될 때 호출
    componentDidMount() {
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    // 컴포넌트가 화면에서 제거될 때 호출
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // 출력
    render() {
        return <h1>{this.state.time.toLocaleTimeString()}</h1>
    }
}

const container = document.getElementById('root');
ReactDOM.render(<App/>, container);