import React from 'react'
import loadingGif from './img/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
        <h4>data is loading</h4>
        <img src={loadingGif} alt="loading..." />
        </div>
    )
}

