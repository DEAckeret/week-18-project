import { Button } from "react-bootstrap";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

function Newsletter() {

    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    let navigation = useNavigate();


        return (
            <>
            <br />
                <div className="card w-35 newsletter">
                    <h3>This is a sign-up for the newsletter</h3>
                    <form>
                        <label for="fname">First name:</label><br />
                        <input type="text" required id="fname" name="fname" value={firstName} onChange={(e) => setFirst(e.target.value)} /><br />
                        <label for="lname">Last name:</label><br />
                        <input type="text" required id="lname" name="lname" value={lastName} onChange={(e) => setLast(e.target.value)} /><br />
                        <Button onClick={() => {navigation('/News')}} type="submit" id="subbutton" name="subbutton" variant="primary">Submit</Button><br />
                    </form>
                </div>
            </>
        );
    }


export default Newsletter; 