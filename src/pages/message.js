import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { db, auth } from '../firebase';

function Message() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const history = useHistory();
    useEffect(() => {
        async function checkAuth() {
            const user = await auth.currentUser;
            if (!user) {
                setTimeout(() => {
                    history.push('/');
                }, 1000);
            } else {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        }
        checkAuth();
    }, [history]);

    useEffect(() => {
        async function fetchMessage() {
            const rawContent = await db
                .collection('message')
                .doc('L3QYuLwMIAJdGPphRY5s')
                .get();
            const data = await rawContent.data();
            setMessage(data.content);
        }
        fetchMessage();
    }, []);

    async function handleMessage(e) {
        e.preventDefault();
        try {
            await db
                .collection('message')
                .doc('L3QYuLwMIAJdGPphRY5s')
                .update({ content: message });
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            {loading ? (
                <p className='client-message'>Loading Message...</p>
            ) : (
                <div className='log-form'>
                    <h2>Message to clients</h2>
                    <form onSubmit={handleMessage}>
                        <textarea
                            name='message'
                            id='message'
                            cols='30'
                            rows='10'
                            placeholder='Message'
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }></textarea>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Message;
