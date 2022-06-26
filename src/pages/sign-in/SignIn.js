import { async } from '@firebase/util';
import React from 'react'
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

function SignIn() {

const log = async() =>{

  const {user} = await signInWithGooglePopup()
  createUserDocumentFromAuth(user)
}

  return (
    <div><button onClick={log}>Log</button></div>
  )
}

export default SignIn;