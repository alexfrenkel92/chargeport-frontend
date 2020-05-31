import React, { useState } from 'react';
import './SendPost.css';
import Button from '../components/Button';

function SendPost() {
    async function sendPost() {
        console.log(postContent);
        try {
            const fetchResponse = await fetch('http://localhost:8080/api/post', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(postContent)
            })
            const data = await fetchResponse.json();
            if (postContent.post_title === '') {
                alert('Kérlek adj címet a posztodnak');
                return false;
            }
            if(postContent.post_content === '') {
                alert('Kérlek fejtsd ki bővebben');
                return false;
            }
            setPostData({ post_title: '', post_content: '' });
            return data;
        } catch (error) {
            return error;
        }
    }

    const [postContent, setPostData] = useState({ post_title: '', post_content: '' });

    const handlePostTitle = (e) => {
        setPostData({ post_title: e.target.value, post_content: postContent.post_content });
    }

    const handlePostContent = (e) => {
        setPostData({ post_title: postContent.post_title, post_content: e.target.value });
    }


    return (
        <div className='send-post-wrapper'>
            <input id='post_title' className='send-post-title' value={postContent.post_title} onChange={handlePostTitle} placeholder='Poszt címe' />
            <input id='post_content' className='send-post-content' value={postContent.post_content} onChange={handlePostContent} placeholder='Poszt tartalma' />
            <Button className='send-post-button' textContent='Megosztás' onClick={sendPost} />
        </div>
    )
}

export default SendPost;
