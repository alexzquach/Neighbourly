import React, { Component } from "react";

export default class UserRow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { row } = this.props
        let ratio
        if (row.gottenHelped === 0) {
            ratio = row.helped
        } else {
            ratio = row.helped / row.gottenHelped
        }
        return (
            <tr>
                <td> {row.userName} </td>
                <td> {row.location}</td>
                <td> {ratio}</td>
            </tr>
        );
    }
}

