import React from "react";
import Post from "./post";
import Comment from "./comment"
import Author from "./author"
import { Link } from "react-router-dom"; 

class Blog extends React.Component {
    render() {
        return (
            <>
            <br />
            <div className="container">
                <div className="card w-35 blog">
                    <p className="">Ad id est minim esse incididunt laborum ea consequat sint consectetur deserunt elit pariatur laboris. 
                        Nulla Lorem dolor ex ea Lorem eu magna anim pariatur ad. 
                        Voluptate ipsum aliqua nisi ipsum proident labore ad labore eu laboris ullamco nulla. 
                        Culpa voluptate laboris magna aliqua ex Lorem incididunt. 
                        Ad ex laborum veniam magna magna duis et sunt. Fusce tempor nisl magna, in volutpat velit 
                        semper et. Nulla facilisi. Cras blandit tempor dui quis accumsan. Vivamus a velit rhoncus, 
                        rhoncus dolor id, ultricies neque. Nulla ultricies malesuada sapien non lobortis. Aenean sit 
                        amet tellus id augue fringilla convallis ultricies sit amet ipsum. Nunc hendrerit consequat
                        metus, eu interdum ipsum blandit vel. Phasellus dolor erat, ultrices eget dolor vel, mattis 
                        scelerisque nisi. Donec gravida gravida nibh, sit amet tincidunt odio aliquet sit amet. Sed a 
                        molestie turpis. Curabitur orci ante, auctor eu euismod eget, fermentum ut quam. Duis ornare 
                        augue vitae sapien blandit, ac dictum nulla convallis. Curabitur at egestas enim. Quisque 
                        efficitur ac arcu at ullamcorper. Vivamus leo ante, consectetur efficitur eros quis, luctus feugiat odio.</p>
                <Author />
                </div>
                <Link to="/About">About Us</Link><br></br>
                <Link to="/Writers">Meet the Writers</Link><br></br>
                <Link to="/Social">Leave a Comment!</Link>
            </div>
            </>
        );
    }
}

export default Blog; 
