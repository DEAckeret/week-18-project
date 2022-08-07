import React, { useState, useEffect } from "react";
import axios from 'axios';

const url = 'https://62e8882393938a545be73f8e.mockapi.io/blog';

function Update(props) {

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
  return (
    <>
    <button>Update</button>
    </>
  )
}

export default Update