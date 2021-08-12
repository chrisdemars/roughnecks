import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { db, auth } from '../firebase'


function Message() {

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const history = useHistory();
  useEffect (() => {
    async function checkAuth() {
      const user = await auth.currentUser;
      if(!user) {
        setTimeout(() => {history.push('/')}, 1000);
      } else {
        setTimeout(() => {setLoading(false)}, 500);
      }
    }
    checkAuth()
 }, [history])

  useEffect(() => {
    async function fetchMessage() {
      const rawContent = await db.collection('message').doc('L3QYuLwMIAJdGPphRY5s').get()
      const data = await rawContent.data()
      setMessage(data.content)
    } 
    fetchMessage();
 }, [])

  async function handleMessage(e) {
    e.preventDefault()
    try {
      await db.collection('message').doc('L3QYuLwMIAJdGPphRY5s').update({content: message})
    } catch(error) {
      alert(error);
    }
  }

  return (
    <>
    { loading ? (<p>Loading Message...</p>) : (      
      <form onSubmit={handleMessage}>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button>Submit</button>
      </form>) }
    </>
  )
}

export default Message;
