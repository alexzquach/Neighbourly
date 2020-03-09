import React from 'react';
import "./Header.css";

/* The Header Component */
class Header extends React.Component {
    render() {
        const { title, subtitle } = this.props

        return (
            <div class="HeaderItem">
                <h1 class="HeaderItem">{title}</h1>
                <h5 class="HeaderItem">{subtitle}</h5>
            </div>
        )
    }
}

export default Header;