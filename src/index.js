import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
function getName(name) {
    alert(name);
}
let App = React.createClass({
    get: function () {
        alert(123);
    },
    addStudent: function () {
        this.state.numberStudent = parseInt(this.state.numberStudent) + 1;
        this.state.age = parseInt(this.state.numberStudent) + 1

        this.setState(this.state);

    },
    getInitialState() {
        return {
            numberStudent: this.props.numberStudent,
            age: this.props.age
        }
    },

    render: function () {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <p>Number Student: {this.state.numberStudent} / Age: {this.state.age}</p>
                <button onClick={() => {
                    getName(this.props.name)
                }}>Save
                </button>
                <button onClick={this.addStudent}>Add Student</button>
                <Appsub />
            </div>
        );
    }
});
let Appsub = React.createClass({
    render: function () {
        return (
            <h3>I'm newbie</h3>
        );
    }
});
let InputTag = React.createClass({
    show: function () {
        alert(this.refs.text.value);
    },
    render: function () {
        return (
            <div>
                <select type="text" ref="text">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <button onClick={this.show}>Show text</button>
            </div>
        );
    }
});
let Album;
Album = React.createClass({
    next(){
        this.setState({image: this.state.image + 1 === 7 ? 7 : this.state.image + 1});
    },
    prev(){
        this.setState({image: this.state.image === 1 ? 1 : this.state.image - 1});
    },
    getInitialState(){
        return {
            image: 1
        }
    },
    render: function () {
        return (
            <div>
                <image src={"images" / +this.state.image + ".png"}/>
                <button onClick={this.next}>Next</button>
                <button onClick={this.prev}>Prev</button>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <Album />
        <InputTag />
        <App name="Hello, Component" numberStudent="10" age="18"/>

    </div>,
    document.getElementById('root')
);
registerServiceWorker();
