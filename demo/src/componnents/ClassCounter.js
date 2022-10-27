import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    //componentDidMount : call when build a component
    componentDidMount() {
        console.log('the component mounted !');
    }

    //  componentDidUpdate : call when Update any state in a compennent
    componentDidUpdate() {
        console.log(`you click ${this.state.counter} of items`);
    }

    //componentWillUnmount : call when remove a component
    componentWillUnmount() {
        console.log('the component unmount !');
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        return (
            <div>
                <h1>Class Componnent Counter loded</h1>
                <p> number of counts {this.state.counter}</p>
                <button onClick={() => this.increaseCounter()}>
                    Click Me
                </button>
            </div>
        )
    }
}
