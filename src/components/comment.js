import React, { useState, useEffect } from "react";
import axios from "axios";

const url = 'https://62e8882393938a545be73f8e.mockapi.io/blog';


const Comment = (props) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getAxios();
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const getAxios = async () => {
        const response = await axios.get(url);
        setUserData(response.data);
      };

    const commentDelete = (id, e) => {
        e.preventDefault();
        axios.delete(`https://62e8882393938a545be73f8e.mockapi.io/blog/${id}`)
    }

    const updateAxios = async (id, e) => {
        e.preventDefault();
        try {
            const { data } = await axios({
                method: 'put',
                url: `https://62e8882393938a545be73f8e.mockapi.io/blog/${id}`,
                data: {
                    title: 'Chaos!!!',
                    body: 'THIS WAS MY FAVORITE BLOG EVER!!',
                    experience: 'unknown'
                }
            });
        
            console.log(data);
        } catch (err) {
            if (err.response.status === 404) {
                console.log('Resource could not be found!');
            } else {
                console.log(err.message);
            }
        }
    }
    
      return (
        <div>
          {
            userData && userData.map(user=>{
              return(
                <div className="card comment"
                 key={user.id} style={{alignItems:'center',margin:'20px 60px'}}>
                <h4>{user.title}</h4>
                <p>{user.body}</p>
                <p> {user.experience} </p>
                <button onClick={(e) => updateAxios(user.id, e)}>Update</button>
                <br /> 
                <button onClick={(e) => commentDelete(user.id, e)}>Delete</button><br />
                reload page to see changes. 
              </div>
              )
    
            })
          }
         
        </div>
      );
    }

export default Comment;
