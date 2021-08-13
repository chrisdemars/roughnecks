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

    if (user) {
      history.push('/message')
    }
  }

  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form onSubmit={handleSignIn}>
        <input type="text" title="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" title="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}

export default Login;