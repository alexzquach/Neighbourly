import React from 'react';
import "../PostForm/PostForm.css";
import "../Comment/Comment.css";
import {deleteReport} from "../../actions/reports"

// import { Link } from 'react-router-dom';

class OneReport extends React.Component {
    /*  Common 'Lifecycle' methods 
        - constructor
        - componentDidMount
        - componentWillUnmount
    */

    constructor(props) { // When the componenet is created
        super(props)
        this.state = {
            seconds: 0
        }
    }

    render() {
    const { report } = this.props

        return (

        <li>
            {/*Our post div*/}
            <div class="commentMain" >	
                <div class="commenterName">{report.reporterName}</div>
                <div class="commentContent">{report.complaint} </div>
                <div class="commentDate report">Post Number: {report.postNumber}</div>
                {/* If you want a delete report button o.w we can remove it */}
                <div class="buttonSection">
                    <button class="generalButton" onClick={
                        () => {deleteReport(report._id)}
                        }>Retire Report
                    </button>
                </div>
            </div>
        </li>
        )
    }
}

export default OneReport;
