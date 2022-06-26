import { async } from '@firebase/util';
import React from 'react'
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

function SignIn() {

const log = async() =>{

  const response = await signInWithGooglePopup()
  console.log(response)
}

  return (
    <div><button onClick={log}>Log</button></div>
  )
}

export default SignIn;