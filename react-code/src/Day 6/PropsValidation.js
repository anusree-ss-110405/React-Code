import React from 'react'
import PropTypes from 'prop-types';
export default function PropValidation(props) {
  return (
    <div>
        <h1>My name is {props.student}</h1>
    </div>
  )
}
PropValidation.propTypes={student:PropTypes.string}