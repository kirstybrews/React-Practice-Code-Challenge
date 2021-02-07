import React from 'react';

export default class Form extends React.Component {

    state = {
        addToBudget: 0
    }

    handleChange = (e) => {
        this.setState({
            addToBudget: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.moreMoney(this.state.addToBudget)
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Amount:
                    <input onChange={this.handleChange} type="number" />
                </label>
                <input type="submit" />
            </form>
        )
    }
}