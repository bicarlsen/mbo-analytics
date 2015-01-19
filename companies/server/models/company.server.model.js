var mongoose = require( 'mongoose' ),
		Schema = require( 'mongoose' ).Schema;
		
var CompanySchema = new Schema( {
	accountType: {
		default: 'Beta',
		enum: [ 'Beta' ],
		required: true,
		type: String
	},
	mboId: {
		required: true,
		type: Number,
		unique: true
	},
	mboUsername: {
		type: String
	},
	mboPassword: { // TODO: Check security
		type: String
	},
	name: {
		type: String
	}
} );

mongoose.model( 'Company', CompanySchema );