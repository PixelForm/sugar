import { readtime } from './readtime'

const textualElements = document.querySelectorAll('[est-content]')

let index = 0

for( ; index < textualElements.length; index++ ) {
    const text = textualElements[index].innerHTML
    const duration: number = Math.round( readtime( text ) )
    const readTime: string = duration < 1 ? '1' : `${ duration }`

    const closest = textualElements[index].parentElement?.querySelector('[est-readtime]')

    if( closest ) closest.textContent = readTime
}