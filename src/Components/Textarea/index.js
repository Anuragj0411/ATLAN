import React from 'react'

function TextArea({...props}) {
  return (
    <textarea id="textarea" rows="4" cols="50" {...props}></textarea>
  )
}

export default TextArea