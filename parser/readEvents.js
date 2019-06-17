var HEADER_LENGTH = 32;
var STRIDE = 26;

// 8 byte double timestamp
// 1 byte ???
// 7 bytes ignore
// 4 byte float x?
// 4 byte float y?
// 2 bytes ???

module.exports = buffer => {

    var readRecord = offset => {

        return {
            timestamp: buffer.readDoubleLE( offset ),
            type: buffer.readInt8( offset + 8 ),
            x: buffer.readFloatLE( offset + 16 ),
            y: buffer.readFloatLE( offset + 20 ),
            b: buffer.readInt16LE( offset + 24 )
        }

    }

    var readRecords = () => {

        var offset = HEADER_LENGTH;
    
        var records = [];
    
        while ( offset < buffer.length - STRIDE ) {
    
            records.push( readRecord( offset ) );
    
            offset += STRIDE;
    
        }

        return records;

    }

    return readRecords();

}