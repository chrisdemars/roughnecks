import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

const NotificationBanner = () => {

  const [message, setMessage] = useState(null)
  useEffect(() => {
    async function fetchMessage() {
      const rawContent = await db.collection('message').doc('L3QYuLwMIAJdGPphRY5s').get()
      const data = await rawContent.data()
      setMessage(data.content)
    } 
    fetchMessage();
 }, [])

  return (
    <>
      {message?.length ? (<p className="client-message">{message}</p>) : (null)}
    </>
  )
}

export default NotificationBanner