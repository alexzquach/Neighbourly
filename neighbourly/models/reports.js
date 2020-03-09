/* Reports mongoose model */
const mongoose = require('mongoose')

// notice there is not column named isLoggedIn, as we now use 
// session for curent user
const Report = mongoose.model('Reports', {
	reporterName: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	postNumber: {
		type: Number,
		required: true,
		// default: 1
	},
	complaint: {
		type: String,
		requirrd: true
	}
})

module.exports = { Report }