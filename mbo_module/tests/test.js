/* Test Module */
module.exports = new Test()

function Test() {
	this.questions = []
	this.pass = 0
	this.fail = 0
	
}

Test.prototype.test = function( name, check ) {
	this.questions.push( new Question( name, check ) )
}

Test.prototype.run = function() {
	this.questions.forEach( function( q ) {
		if( q.result ) {
			this.pass++
			console.log( q.name + ': pass' )
		}
		else {
			this.fail++
			console.log( q.name + ': fail' )
		}
	}, this )
	
	console.log( '\n\n*** RESULTS ***\n' + 'Questions: ' + this.length() + '\nPass: ' + this.pass + '\nFail: ' + this.fail )
}

Test.prototype.length = function() {
	return this.questions.length
}

/*--- Question Object ---*/
function Question( name, check ) {
	this.name = name
	this.check = check
	
	var result = check()
	this.result = result
}

