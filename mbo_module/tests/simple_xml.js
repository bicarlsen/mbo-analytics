/* Simple XML Test Module */
var Test = require( './test' )
var Node = require( '../node_modules/simple_xml' )

/* Instantiation */
var root = new Node( 'test' )
Test.test( 'Instantiation', function() { return root.type === 'test' } )

/* Add Child - Basic */
var child = new Node( 'child' )
root.addChild( child )
Test.test( 'Add first child', function() { return root.children.indexOf( child ) >= 0 } )

/* Add Child - Position */
var c1 = new Node( 'child' )
var c2 = new Node( 'child' )
root.addChild( c1 )
root.addChild( c2 )

var c3 = new Node( 'child' )
root.addChild( c3, 1 )
Test.test( 'Add child with postion', function() { return root.children.indexOf( c3 ) === 1 } )

/* To String - Simple */
var simpleNode = new Node( 'simple' )
Test.test( 'To String - Simple', function() { return simpleNode.toString() === '<simple />' } )

/* To String - With Attributes */
simpleNode.attr( 'attr', 'testAttribute' )
simpleNode.addNamespace( 'default', 'http://default.com' )
Test.test( 'To String - With Attributes', function() { return simpleNode.toString() === '<simple attr="testAttribute" xmlns="http://default.com" />' } )

/* To String - With Content */
var textNode = new Node( 'text' )
textNode.setContent( 'test text' )
Test.test( 'To String - With Content', function() { return textNode.toString() === '<text>test text</text>' } ) 

/* To String - With Children */
cNode = new Node( 'root' )
ccNode = new Node( 'child' )
ccNode.setContent( 'child' )
cNode.addChild( ccNode )
console.log(cNode.toString())
Test.test( 'To String - With Child', function() { return cNode.toString() === '<root><child>child</child></root>'  } )


// Run the Test
Test.run() 