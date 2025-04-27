class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.load();

        this.textChange = this.textChange.bind(this);
        this.textKeyDown = this.textKeyDown.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.changeCheckData = this.changeCheckData.bind(this);
    }


    save() {
        localStorage.state = JSON.stringify(this.state);
    }

    load() {
        const output = JSON.parse(localStorage.state);
        try {
            if (output && output.keyCount !== undefined && output.currentValue !== undefined && output.todos !== undefined) {
                return output;
            }
        } catch (e) {
        }

        return {
            keyCount: 0,
            currentValue: '',
            todos: [],
        };
    }

    componentDidUpdate() {
        this.save();
    }

    textChange(e) {
        this.setState({
            currentValue: e.target.value,
        })
    }

    textKeyDown(e) {
        const ENTER = 13;
        if (e.keyCode === ENTER) {
            this.buttonClick();
        }
    }

    buttonClick(e) {
        if (this.state.currentValue.trim() !== '') {
            this.setState({
                todos: [...this.state.todos, {
                    key: this.state.keyCount.toString(), isDone: false, text: this.state.currentValue,
                }]
            })
            this.state.keyCount += 1;
            this.state.currentValue = '';
        }
    }

    removeItem(key) {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.key !== key;
            })
        })
    }

    changeCheckData(key, changed) {
        let target = [...this.state.todos];
        target.filter((todo) => todo.key === key)[0].isDone = changed;
        this.setState({
            todos: target,
        })
    }

    render() {
        return <div>
            <h1>할 일 목록</h1>
            <input
                value={this.state.currentValue}
                onChange={this.textChange}
                onKeyDown={this.textKeyDown}/>
            <button onClick={this.buttonClick}>추가하기</button>
            <div>
                {this.state.todos.map((todo) => {
                    return <TodoItem
                        dataKey={todo.key}
                        isDone={todo.isDone}
                        text={todo.text}
                        removeItem={this.removeItem}
                        changeCheckData={this.changeCheckData}/>
                })}
            </div>
        </div>
    }
}


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: props.isDone,
        }
        this.checkboxClick = this.checkboxClick.bind(this);
    }

    checkboxClick() {
        const changed = !this.state.isDone;
        this.props.changeCheckData(this.props.dataKey, changed);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isDone !== this.props.isDone) {
            this.setState({
                isDone: this.props.isDone,
            })
        }
    }

    render() {
        const textStyle = {}
        textStyle.textDecoration = this.state.isDone ? 'line-through' : '';

        return (
            <div style={textStyle}>
                <input
                    type="checkbox"
                    checked={this.state.isDone}
                    onChange={this.checkboxClick}/>

                <span>{this.props.text}</span>
                <button onClick={() => this.props.removeItem(this.props.dataKey)}>제거</button>
            </div>

        )
    }
}

const container = document.getElementById('root');
ReactDOM.render(<App/>, container);