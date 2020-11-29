import React from 'react'
import ShowcaseImage from './ShowcaseImage'
import ShowcaseText from './ShowcaseText'
import './showcase.css'

const ShowcaseContainer = () => {
    return (
        <div className='showcaseContainer'>
            <ShowcaseImage />
            <ShowcaseText />
        </div>
    )
}

export default ShowcaseContainer
