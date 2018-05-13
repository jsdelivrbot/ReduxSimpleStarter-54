import React, { PureComponent } from 'react';

export default class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
};

