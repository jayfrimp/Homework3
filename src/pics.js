import React from 'react'
import './css/sample-wallpaper.css'

function Pics(props) {
    return (
        <article class="wallpaper">
            <img src={props.pic} alt="pics #1" class="wallpaper" />
        </article>
    )
}

export default Pics