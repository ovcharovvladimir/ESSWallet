import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ className = '', color = '#000000' }) => {
  return (
    <div className={`spinner ${className}`}>
      <svg className="lds-spinner" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{background: 'none'}}>
        <circle cx="50" cy="50" fill="none" stroke={color} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(89.3628 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        </circle>
      </svg>
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

module.exports = Spinner
