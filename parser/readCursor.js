// 8 byte double timestamp
// 1 byte ignore
// 1 byte visible (if 1)
// 4 byte float hotspot x
// 4 byte float hotspot y
// 8 bytes ignore
// 4 bytes float width (always an integer number though)
// 4 bytes float height (always an integer number though)

// if visible is true {
// 	5 bytes to ignore
	
// 	for each pixel of the height of the cursor image {
// 		4 byte integer length
// 		<length number of bytes to ignore>
// 	}
// }

module.exports = buffer => {

    var timestamp = offset => buffer.readDoubleLE( offset );
    var a = offset => buffer.readInt8( offset + 8 );
    var visible = offset => buffer.readInt8( offset + 9 );
    var hotspotX = offset => buffer.readFloatLE( offset + 10 );
    var hotspotY = offset => buffer.readFloatLE( offset + 14 );
    var x = offset => buffer.readFloatLE( offset + 18 );
    var y = offset => buffer.readFloatLE( offset + 22 );
    var width = offset => buffer.readFloatLE( offset + 26 );
    var height = offset => buffer.readFloatLE( offset + 30 );

    var recordLength = offset => {
        var length = 34;
        if ( visible( offset ) === 1 ) {
            length += 5;
            var h = height( offset );
            for ( var i = 0; i < h; i++ ) {
                var len = buffer.readInt32LE( offset + length );
                length += 4 + len;
            }
        }
        return length;
    }

    var readRecord = offset => {
        return {
            timestamp: timestamp( offset ),
            a: a( offset ),
            visible: visible( offset ),
            hotspotX: hotspotX( offset ),
            hotspotY: hotspotY( offset ),
            x: x( offset ),
            y: y( offset ),
            width: width( offset ),
            height: height( offset )
        }
    }

    var readRecords = () => {
        var offset = 0;
        var records = [];
        while ( offset < buffer.length ) {
            records.push( readRecord( offset ) )
            offset += recordLength( offset );
        }
        return records;
    }

    return readRecords();

}