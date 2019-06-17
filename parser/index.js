var fs = require('fs');
var path = require('path');

var readCursor = require('./readCursor');
var cursor = readCursor( fs.readFileSync( __dirname + '/Cursor' ) );



// var events = readEvents( fs.readFileSync( __dirname + '/Events' ) );

// var HEIGHT = 900;
// var OFFSET_Y = -20;

// var cursorSizes = [];

// var positions = cursor.map( ({ timestamp, x, y, width, height }) => {
//     var type = cursorSizes.findIndex( size => width === size.width && height === size.height );
//     if ( type === -1 ) {
//         type = cursorSizes.length;
//         cursorSizes.push({ width, height });
//     }
//     y = ( HEIGHT - y ) + OFFSET_Y;
//     return { x, y, type }
// })

// // var clicks = events
// //     .filter( event => event.type === 1 )
// //     .map( event => Math.floor( event.timestamp * 30 ) );

// fs.writeFileSync( outFile, JSON.stringify( { positions, clicks } ) );