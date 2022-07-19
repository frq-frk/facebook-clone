import React, { useState, useEffect } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { collection, onSnapshot } from "firebase/firestore";
import db from './firebase'



function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // console.log(db);
        const unsub = onSnapshot(collection(db,"posts"), (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({ id : doc.id,data:doc.data()}) ))
            // console.log("snapshot : ",snapshot.docs);
        })

    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {
                posts.map(post => (
                    <Post
                        key = {post.id}
                        profilePic = {post.data.profilePic}
                        message = {post.data.message}
                        timestamp = {post.data.timestamp}
                        username = {post.data.username}
                        image = {post.data.image}
                    >

                    </Post>
                ))
            }

        </div>
    )
}

export default Feed
