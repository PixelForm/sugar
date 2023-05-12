import readTimeEstimate from 'read-time-estimate'

/**
 * 
 * @param {string} string - The input string. Can be an HTML string of which only the text will be counted that is within the tags.
 * @returns {number} - The duration of time it takes to read the content from the provided string.
 */
function readtime( string: string ) {
    const { duration } = readTimeEstimate( string )
    return duration
}

export { readtime }