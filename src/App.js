import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

import base from './base'

class App extends Component {
  constructor(props){
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {
      },
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user })
        console.log(user)
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
    
  }

  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  

  auth(provider){
    console.log(provider)
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    
    return (
      <div className="container">
        {
          this.state.isLoggedIn &&
          <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
            {this.state.user.displayName}
            <NewComment postNewComment={this.postNewComment} />  
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
          </div>
        }
        {!this.state.isLoggedIn && 
          <div className='alert alert-info'>
            <button className='btn btn-primary' onClick={() => this.auth('facebook')}>Logar com facebook</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
