/* MBO API Test Module */
var Test = require( './test' )
var MBO = require( '../node_modules/mbo_api' )

// Full Request
var mboQuery = MBO.createQuery( 'Service', 'Action' )
console.log( 'Response:', mboQuery.response )