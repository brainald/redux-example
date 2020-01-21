import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClickAdd() {
        this.props.add(this.state.value);
        this.setState({
            value: ''
        })
    };

    handleClickRemove() {
        this.props.remove(this.state.value);
        this.setState({
            value: ''
        })
    };

    render() {
        return (
            <div>
                <input type={"text"} value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.handleClickAdd}>Submit</button>
                <button onClick={this.handleClickRemove}>Delete</button>
            </div>
        );
    }
}

export default Form;