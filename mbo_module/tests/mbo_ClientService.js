/* MBO API Test Module */
var Test = require( './test' )
var ClientSrv = require( '../node_modules/mbo_ClientService' )
ClientSrv.setDefaultCredentials( 'Siteowner', 'apitest1234', -99 )

/* Get Clients *//*
var clientQuery = ClientSrv.searchClients()
clientQuery.on( 'result', function() { console.log( clientQuery.result ) } )

/* Get All Clients */
var clientQuery = ClientSrv.getAllClients()
clientQuery.on( 'result', function() { console.log( 'Result:', clientQuery.result.length ) } )
