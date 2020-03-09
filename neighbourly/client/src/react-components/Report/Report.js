/*  Full Queue component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import Header from '../Header/Header';
import ReportForm from '../ReportForm/ReportForm'
import { Link } from 'react-router-dom';
import "../Home/Home.css";
import logo from '../../logo.png';

const log = console.log

class Report extends React.Component {

    ///  React 'state'.  
    // Allows us to keep track of changing data in this component.
    // Each section of the Queue now has its own componenet, cleaning up the
    // JSX a lot.
    render() {
        return (
            <div className="App">

                { /* Header component with text props. */}
                <div class="mainBanner">
                    <img class="logo" alt={logo} src={logo} />
                    <text class="bannerText"><Header title="Neighbourly" /></text>
                </div>

                { /* Sub header component for posts. */}
                <div id="addAPost" class="subBannerLeft">
                    <h3 class="subBannerLabel"><text class="bannerText">Report a post</text></h3>
                    <Link to={{ pathname: './'}}>
                        { /* This element will link the URL path to home page */}
                        <button class="subBannerButton">
                            Go Back
                        </button>
                    </Link>
                </div>

                { /* Header component with text props. */}
                {/* <Header title="Neighbourly"
                subtitle="Add Post"/> */}

                <ReportForm
                    postNumber={this.props.location.state.postNum}
                />
            </div>
        );
    }
}

export default Report;
