import React, { useState } from 'react'
import { auth } from '../firebase'
import { useHistory } from "react-router-dom";



function Login() {
  const history = useHistory()
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault()
    const allUsers = await auth.signInWithEmailAndPassword(email, password);
    const user = allUsers;

    if(user) {
      history.push('/message')
    }
  }

  return (
    <>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
          <button>Submit</button>
      </form>
    </>
  )
}

export default Login;
