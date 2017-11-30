import React from 'react'

const Comment = props => <p className='well'>{props.comment.comment}<br /><strong>Por:{props.comment.user.name}</strong></p>

export default Comment