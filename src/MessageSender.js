import { Avatar } from '@mui/material'
import React, {useState} from 'react'
import './MessageSender.css'

import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from './firebase'
import { collection, addDoc } from "firebase/firestore"; 
import {serverTimestamp} from "firebase/firestore";

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {

        e.preventDefault();
        const add = async() => {
            await addDoc(collection(db, 'posts'),{
                profilePic : user.photoURL,
                message : input,
                timestamp : serverTimestamp(), 
                username : user.displayName,
                image : imageUrl
            })
        }

        add();

        setInput('');
        setImageUrl('');

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className="messageSender__input" 
                    placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                    placeholder="image URL (Optional)"/>

                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color : 'red'}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color : 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color : 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
