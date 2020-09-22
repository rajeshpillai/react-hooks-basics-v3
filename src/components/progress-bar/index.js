import React from 'react'
import PropTypes from 'prop-types';

export default function ProgressBar({percent, width, height=9}) {

  const getWidthAsPercent = () => {
    return Number((width * percent / 100))
  }

  const getColor = (per) => {
    if (per == 100) return "green";
    return per > 50 ? "lightgreen": "red";
  }

  return (
    <div style={{border: "solid 1px lightgray", width: width, backgroundColor:"lightgray"}}>
      <div style={{
        width: getWidthAsPercent(),
        height: height,
        color: "white",
        backgroundColor: getColor(percent)
      }}>
          <span>{percent}%</span>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired
}