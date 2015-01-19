var mongoose = require( 'mongoose' ),
		Schema = mongoose.Schema,
		autoIncrement = require( 'mongoose-auto-increment' );
		
var InvitationSchema = new Schema( {
	email: {
		required: true,
		type: String,
		unique: true
	},
	plan: {
		default: "Omega",
		type: String
	},
	position: {
		type: Number
	}
} );

InvitationSchema.plugin( autoIncrement.plugin, { model: 'Invitation', field: 'position' } )

mongoose.model( 'Invitation', InvitationSchema );