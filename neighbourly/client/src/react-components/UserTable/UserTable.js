import React, { Component } from "react";
import "../Login/Login.css";
import { uid } from 'react-uid';
import UserRow from '../UserRow/UserRow';
import Header from '../Header/Header';
import logo from '../../logo.png';
import OneReport from '../OneReport/OneReport'
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import '../Header/Header.css';
import './UserTable.css';
import '../Comment/Comment.css';
import { getState } from "statezero";
import {getUsers} from "../../actions/user"
import {getReports} from "../../actions/reports"
import BaseReactComponent from "../BaseReactComponent/index.js";


export default class UserTable extends BaseReactComponent {
	filterState({users, reports}){
        return {users, reports};
	}


	render() {

		 const {users, reports} = this.state
		 getUsers()

		if (getState("adminLoggedIn")) {
			getReports()
			return (
				<div>
					{ /* Header component with text props. */}
					<div class="mainBanner">
						<img class="logo" alt={logo} src={logo} />
						<text class="bannerText"><Header title="Neighbourly" /></text>
					</div>
					{ /* Sub header component for user informaton. */}
					<div class="subBannerLeft">
						<h3 class="subBannerLabel"><text class="bannerText">User Information</text></h3>
						<Link to={{ pathname: './', state: { posts: this.props.posts } }}>
							{ /* This element will link the URL path to home page */}
							<button class="subBannerButton">
								Go Back
							</button>
						</Link>
					</div>

					{/* TODO: THIS SECTION SHOULD ONLY BE SEEN BY ADMINS */}
					{ /* Sub header component for reports (only for admin). */}
					<div class="subBannerRight">
						<h3 class="subBannerLabel"><text class="bannerText">User Complaints &amp; Reports</text></h3>
						<Link to={{ pathname: './', state: { posts: this.props.posts } }}>
							<button class="subBannerButton invisible">
								Go Back
							</button>
						</Link>
					</div>

					<div class="halfSection">
						{/* The user table to display each user's information. */}
						<section>
							<div class="container">
								<table>
									<thead>
										<tr class="header">
											<th><div>Username</div></th>
											<th><div>Location</div></th>
											<th><div>Help Ratio</div></th>
										</tr>
									</thead>
									<tbody>
										{users.map((row) => {
											return (
												<UserRow row={row} />
											)
										})}
									</tbody>
								</table>
							</div>
						</section>
					</div>
					<div class="halfSection">
						{/* Our report section only the admin can see. 
							If you want to make it invisible, rather than copy pasting you can 
							change the class to class="halfSection invisible" and
							class="subBannerRight invisible" up at line 39 to hide both the header and content	
						*/}
						{/* NOTE: reports are just comments with values changed:
							commenterName: reporterName
							commentDate: postNumber
							commentContent: actual complain.
	
							I copied this from CommentList.js and Comment.js since there is
							no logic for holding reports in there yet but I think a simple if
							condition will suffice. - Zuhab
						*/}
						<ul class="commentSection">
							{reports.map((report) => {
								return (
									<OneReport key={uid(report) /* unique id required to help React render more efficiently when we delete students. */}
										report={report}
										removeReport={this.removeReport}
									/>
								)
							})}

						</ul>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					{ /* Header component with text props. */}
					<div class="mainBanner">
						<img class="logo" alt={logo} src={logo} />
						<text class="bannerText"><Header title="Neighbourly" /></text>
					</div>
					{ /* Sub header component for user informaton. */}
					<div class="subBannerFull">
						<h3 class="subBannerLabel"><text class="bannerText">User Information</text></h3>
						<Link to={{ pathname: './', state: { posts: this.props.posts } }}>
							{ /* This element will link the URL path to home page */}
							<button class="subBannerButton">
								Go Back
							</button>
						</Link>
					</div>


					<div class="halfSection">
						{/* The user table to display each user's information. */}
						<section>
							<div class="container">
								<table>
									<thead>
										<tr class="header">
											<th><div>Username</div></th>
											<th><div>Location</div></th>
											<th><div>Help Ratio</div></th>
										</tr>
									</thead>
									<tbody>

										{users.map((row) => {
											return (
												<UserRow row={row} />
											)
										})}
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</div>
			);
		}
	}
}

