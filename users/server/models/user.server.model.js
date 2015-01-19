var mongoose = require( 'mongoose' ),
		Schema = mongoose.Schema,
		crypto = require( 'crypto' );
		
var UserSchema = new Schema( {
			firstName: {
				type: String,
				trim: true
			},
			lastName: {
				type: String,
				trim: true
			},
			email: {
				match: /.+\@.+\..+/,
				required: true,
				type: String,
				trim: true,
				unique: true
			},
			password: {
				required: true,
				type: String,
				validate: [ validatePassword, 'Password must be at least six characters long.' ]
			},
			salt: {
				type: String
			},
			company: {
				ref: 'Company',
				required: true,
				type: Schema.ObjectId
			},
			role: {
				default: 'Owner',
				enum: [ 'Owner' ],
				required: true,
				type: String
			},
			created: {
				default: Date.now(),
				type: Date,
			}
} );

// Methods
UserSchema.methods.authenticate = function( password ) {
	return this.password === this.hashPassword( password );
};

UserSchema.methods.hashPassword = function( password ) {
	return crypto.pbkdf2Sync( password, this.salt, 10000, 64 )
		.toString( 'base64' );
};

// Statics
UserSchema.statics.findOneByEmail = function( email, callback ) {
	this.findOne( { email: new RegExp( email, 'i' ) }, callback );
};

// Virtuals
UserSchema.virtual( 'fullName' )
.get( function() {
	return this.firstName + ' ' + this.lastName;
} )
.set( function( fullName ) {
	var splitName = fullName.split( ' ' );
	this.firstName = splitName[ 0 ] || '';
	this.lastName = splitName[ 1 ] || '';
} );

// Validators
function validatePassword( password ) {
	return password && password.length >= 6;
}

// Modifiers
UserSchema.pre( 'save', function( next ) { // Salt Password
	if ( this.password ) {
		this.salt = new Buffer( crypto.randomBytes( 16 ).toString( 'base64' ), 'base64' );
		this.password = this.hashPassword( this.password );
	}
	
	next();
} );

UserSchema.pre( 'save', function( next ) { // Capitalize Names
	var capitalize = function( string ) {
		return string[ 0 ].toUpperCase() + string.slice( 1 ).toLowerCase();
	};
	
	if ( this.firstName ) {
		this.firstName = capitalize( this.firstName );
	}
	if ( this.lastName ) {
		this.lastName = capitalize( this.lastName );
	}
	
	next();
} );

UserSchema.set( 'toJSON', {
	getters: true,
	virtuals: true
} );

mongoose.model( 'User', UserSchema )