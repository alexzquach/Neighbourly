/*  Full Queue component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import Header from '../Header/Header';
import PostList from '../PostList/PostList';
import { Link } from 'react-router-dom';
import LoginReg from '../Login/LoginReg';
import logo from '../../logo.png';
import givingHelp from '../../givingHelp.png';
import gettingHelp from '../../gettingHelp.png';
import "./Home.css";
import "./Filtering.css";
import "../UserInformation/Profile.css";
import "../Login/Login.css";

import { getState } from "statezero";
import { logout } from "../../actions/user"
import BaseReactComponent from "../BaseReactComponent/index.js";

class Home extends BaseReactComponent {

    ///  React 'state'.  
    // Allows us to keep track of changing data in this component.

    // Generic handler for whenever we type in an input box.
    // We change the state for the particular property bound to the textbox from the event.
    filterPosts = () => {
        // Filters are of the form, {property: [value1, or value2, ... ]}
        // Gets the new filters inputed and updates the posts.
        const newFilters = this.getFilters();
        this.setState({
            filters: newFilters
        })
    }

    getFilters() {
        const filters = { // Blank filter structure
            types: [],
            location: null,
            sort: null,
        }
        // Get the sorting method selected.
        const sorts = Array.from(document.getElementsByClassName("sortType"));
        if (sorts.length === 0) {
            return filters;
        }
        filters.sort = sorts.filter(checkBox => checkBox.checked)[0].value;

        // Get the location selected.
        const locations = Array.from(document.getElementsByClassName("locationType"));
        filters.location = locations.filter(checkBox => checkBox.checked)[0].value;

        // Get the item types selected.
        const types = Array.from(document.getElementsByClassName("helpType"));
        const chosenTypes = types.filter(checkBox => checkBox.checked);
        filters.types = chosenTypes.map(checkBox => checkBox.value);

        return filters
    }

    // New code
    filterState({ posts }) {
        return { posts };
    }

    render() {
        // SERVER DATA NEEDED:
        // Get users from the server so we know whos logged in at the moment

        let username = 'Not Logged In'
        let userhelp = 0
        let userhelped = 0

        if (getState("someoneLoggedIn")) {
            username = getState("currentUser").name
            userhelp = getState("currentUser").helped
            userhelped = getState("currentUser").gottenHelped
        }

        return (
            <div className="App">
                { /* Header component with text props. */}
                <div class="mainBanner">
                    <img class="logo" alt={logo} src={logo} />
                    <text class="bannerText"><Header title="Neighbourly" /></text>
                    <div class="userInfoSection">
                        { /* Will bring you to a login/registration screen. */}
                        <LoginReg 
                        />
                        {/* Logs the user out*/}
                        <button class="generalUserButton" onClick={() => logout()}>Logout</button>

                        {/* Links to the user's information TESTING CODE AT THE MOMENT */}
                        <Link to={
                            { pathname: './UserInformation' }}>
                            <button class="generalUserButton">
                                My Info
                            </button>
                        </Link>

                        {/* Skeleton for the user information.*/}
                        <div class="profileInfoMain">
                            <span class="profileInfoName">{username}</span>
                            <span class="givingHelp bannerProfile">
                                <img class="helpPicture" alt={givingHelp} src={givingHelp} />
                                {userhelp} &nbsp;
                            </span>
                            <span class="gettingHelp bannerProfile">
                                <img class="helpPicture" alt={gettingHelp} src={gettingHelp} />
                                {userhelped}
                            </span>
                        </div>
                        <img class="profileInfoPicture" alt={logo} src={logo} />
                    </div>
                </div>

                { /* Sub header component for posts. */}
                <div class="subBannerLeft">
                    <h3 class="subBannerLabel"><text class="bannerText">Posts</text></h3>

                    <Link to={
                        { pathname: './AddPost'}}
                    > { /* This element will link the URL path to /queue */}
                        <button class="subBannerButton">
                            Add Post
                        </button>
                    </Link>
                </div>

                { /* Sub header component for filtering. */}
                <div class="subBannerRight">
                    <h3 class="subBannerLabel"><text class="bannerText">Filter Categories</text></h3>

                    <Link to={
                        { pathname: './UserTable' }}
                    >
                        <button class="subBannerButton">
                            Go To User List
	                    </button>
                    </Link>
                </div>
                { /* The Post List */}
                <div class="halfSection">
                    <PostList 
                        filters={this.getFilters()}
                    />
                </div>
                {/* Filtering list and buttons */}
                <div class="halfSection">

                    {/* NOTE: Although this could be extracted into a 
                    module, we don't know how to then get the checked 
                    filters from it so for the time being this stays here. */}
                    <div class="filterSection">
                        <div class="filterDivision">
                            <div class="divisionName"> What kind of help do you need?</div>
                            <ul class="divisionCategories">
                                <li><div class="categoryCheck"><label>
                                    <input class="helpType" type="checkbox" value="Any kind" defaultChecked />
                                    <span>Any kind</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="helpType" type="checkbox" value="Item" />
                                    <span>Item</span>
                                </label></div></li>
                                <li><div class="categoryCheck" ><label>
                                    <input class="helpType" type="checkbox" value="Housework" />
                                    <span>Housework</span>
                                </label></div></li>
                                <li><div class="categoryCheck" ><label>
                                    <input class="helpType" type="checkbox" value="Yardwork" />
                                    <span>Yardwork</span>
                                </label></div></li>
                                <li><div class="categoryCheck" ><label>
                                    <input class="helpType" type="checkbox" value="Moving" />
                                    <span>Moving</span>
                                </label></div></li>
                                <li><div class="categoryCheck" ><label>
                                    <input class="helpType" type="checkbox" value="Volunteering" />
                                    <span>Volunteering</span>
                                </label></div></li>
                            </ul>
                        </div>
                        <div class="filterDivision">
                            <div class="divisionName"> Where do you need this help?</div>
                            <ul class="divisionCategories">
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="Anywhere" name="location" defaultChecked />
                                    <span>Anywhere</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="GTA" name="location" />
                                    <span>GTA</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="Regent Park" name="location" />
                                    <span>Regent Park</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="Riverdale" name="location" />
                                    <span>Riverdale</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="Greenwood" name="location" />
                                    <span>Greenwood</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="locationType" type="radio" value="Don Mount" name="location" />
                                    <span>Don Mount</span>
                                </label></div></li>
                            </ul>
                        </div>
                        <div class="filterDivision">
                            <div class="divisionName"> Sort posts by...</div>
                            <ul class="divisionCategories">
                                <li><div class="categoryCheck"><label>
                                    <input class="sortType" type="radio" value="Date" name="sorting" defaultChecked />
                                    <span>Date</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="sortType" type="radio" value="Difficulty" name="sorting" />
                                    <span>Difficulty</span>
                                </label></div></li>
                                <li><div class="categoryCheck"><label>
                                    <input class="sortType" type="radio" value="Poster Name" name="sorting" />
                                    <span>Poster Name</span>
                                </label></div></li>
                            </ul>
                        </div>
                        <button class="commitFilterButton" onClick={() => this.filterPosts()}> Filter Posts </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
