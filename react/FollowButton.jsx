import React from "react"
import { useCssHandles } from "vtex.css-handles"
import './followbutton'

const CSS_HANDLES = [
    "followButton",
    "followButtonContainer"
]

const FollowButton = () => {
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles.followButtonContainer}`}>
        	<div className={`${handles.followButton}`}>
          	SEGUIR
        	</div>
        </div>
    )
}

export default FollowButton