import React from 'react'
import './Card.css'

const ResumeCard = ({ title, subtitle, result, des }) => {
    return (
        <div className='resumeCard'>
            <div className='dash'>
                <span className='outerCircle'>
                    <span className='innerCircle'></span>
                </span>
            </div>
            <div className='resumeCardContent'>
                <div className='resumeCardAlign'>
                    <div>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                    <div>
                        <p className='marks'>{result}</p>
                    </div>
                </div>
                <p>{des}</p>
            </div>
        </div>
    )
}

export default ResumeCard