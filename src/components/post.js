import React, { useState, useRef } from "react";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios";
import Comment from "./comment";
import Button from "react-bootstrap/Button";
const url = "https://62e8882393938a545be73f8e.mockapi.io/blog";

function Post() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [experience, setExperience] = useState('Thumbs up!');
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(url, {
                title: title,
                body: body,
                experience: experience
            });
            console.log(resp.data);
        } catch (error){
            console.log(error.response);
        }
        firstRef.current.value = '';
        secondRef.current.value = '';
    }




    

        return (
            <>
            <br />
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="inputForm">Title your post!</label><br></br>
                        <input ref={firstRef} type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" id="inputForm" maxLength={50}></input><br></br>
                        <label>
                            Leave your thoughts!
                        </label><br />
                        <textarea ref={secondRef} type="text" required value={body} onChange={(e) => setBody(e.target.value)} placeholder="This writer was so inspiring I left my job and became a..." cols={30} rows={5} maxLength={200}></textarea><br />
                        Maximum 200 characters.
                        <br />
                        To see changes, reload page.
                         <br />
                        <label><br />
                            Was your experience positive or negative?
                        </label><br />
                        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                            <option value="thumbsUp">Thumbs up!</option>
                            <option value="Thumbs down.">Thumbs down.</option>
                        </select><br />
                        <button>Submit</button>
                    </form>
                    <Comment />
                </div>
            </>
        );
    }


export default Post; 