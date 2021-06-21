import React from 'react'
import ProgressBar from 'react-animated-progress-bar';
const progressbar={
    backgroundColor:'#000'
}
function ProgressCards() {
    return (
        <div className="card shadow border-0" style={{height: 'auto',width: '300px',marginBottom: '18px'}}>
        <div className="card-body">
        <ProgressBar
        width="250px"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#000"
        trackBorderColor="grey"
        style={progressbar}
      />
        </div>
        </div>
    )
}

export default ProgressCards
