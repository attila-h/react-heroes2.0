import React from 'react'
import './FormContainer.css'

export default function FormContainer(props) {
  return (
    <div className="form-base">
      <div className='form-container'>
        {props.children}
      </div>
    </div>

  )
}
