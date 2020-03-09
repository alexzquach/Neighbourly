import React from 'react';
import { Link } from 'react-router-dom';
import "../PostForm/PostForm.css";

import {addReport, updateReportForm} from "../../actions/reports"
import BaseReactComponent from "../BaseReactComponent/index.js";


/* Component for the Student Form */
class ReportForm extends BaseReactComponent {
    filterState({ reportForm}) {
        return { reportForm };
    }

    render() {

        const { reportForm } = this.state;

        const { reporterName, postNumber, complaint } = reportForm;

        return (
            <div>
                { /* Inputs to add student */}
                <input class="inputTextBox"
                    name='reporterName'
                    value={reporterName}
                    onChange={e => updateReportForm(e.target)}
                    type="text"
                    placeholder="Name" />

                <input class="inputTextBox"
                    name='postNumber'
                    value={postNumber}
                    onChange={e => updateReportForm(e.target)}
                    type="text"
                    placeholder={this.props.postNumber} />

                <input class="inputTextBox"
                    name='complaint'
                    value={complaint}
                    onChange={e => updateReportForm(e.target)}
                    type="text"
                    placeholder="Enter a complaint" />

                <Link to={{ pathname: './' }}>
                    <button class="submitButton add" onClick={addReport}>
                        Submit Report
	                </button>
                </Link>
            </div>
        )
    }
}

export default ReportForm;

