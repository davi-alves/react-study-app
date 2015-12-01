import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { text: 'State title', count: 1 };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <Widget text={this.state.text} update={this.update} />
            </div>
        )
    }
}

const Widget = (props) => {
    return (
        <div>
            <h2>{props.text}</h2>
            <input type="text" onChange={props.update} />
        </div>
    )
}

export default App;
