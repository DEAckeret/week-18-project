import React from 'react';
import { Card, Button, Container} from "react-bootstrap";
import CarouselBs from './CarouselBs';

function WriterSetup() {
  return (
    <div>
        <CarouselBs />
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"./images/man-image.svg"} />
                    <Card.Body>
                        <Card.Title>Mr. Knowsathingortwo</Card.Title>
                        <Card.Text>
                        Vitae elementum curabitur vitae nunc sed velit dignissim sodales. 
                        Pretium viverra suspendisse potenti nullam ac. Luctus accumsan tortor 
                        posuere ac ut consequat semper. Turpis egestas integer eget aliquet nibh praesent 
                        tristique magna sit. Neque gravida in fermentum et sollicitudin ac orci phasellus. 
                        Tempor orci eu lobortis elementum nibh tellus. Placerat in egestas erat imperdiet sed. 
                        Amet justo donec enim diam vulputate ut pharetra. Amet justo donec enim diam vulputate ut 
                        pharetra sit. Urna porttitor rhoncus dolor purus non enim praesent. Dui accumsan sit 
                        amet nulla facilisi morbi tempus iaculis. Ullamcorper morbi tincidunt ornare massa eget 
                        egestas purus.
                        </Card.Text>
                        <Button variant="primary" href="/Writers">Visit Profile</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"./images/man-image.svg"} />
                    <Card.Body>
                        <Card.Title>Dr. Venti</Card.Title>
                        <Card.Text>
                        Purus non enim praesent elementum facilisis leo vel fringilla est. 
                        Eget velit aliquet sagittis id consectetur purus ut. Dui faucibus in ornare quam. 
                        Nascetur ridiculus mus mauris vitae ultricies leo. Ac orci phasellus egestas tellus 
                        rutrum tellus. Urna et pharetra pharetra massa massa. Et molestie ac feugiat sed
                        lectus vestibulum mattis. Mauris pellentesque pulvinar pellentesque habitant morbi 
                        tristique senectus et netus.
                        </Card.Text>
                        <Button variant="primary" href="/Writers">Visit Profile</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"./images/man-image.svg"} />
                    <Card.Body>
                        <Card.Title>The Incredible Novelist</Card.Title>
                        <Card.Text>
                        Justo donec enim diam vulputate ut pharetra. Enim facilisis gravida neque 
                        convallis a cras semper. In tellus integer feugiat scelerisque varius morbi. 
                        Sollicitudin tempor id eu nisl nunc. Vitae tortor condimentum lacinia quis 
                        vel eros donec ac odio.
                        </Card.Text>
                        <Button variant="primary" href="/Writers">Visit Profile</Button>
                    </Card.Body>
                </Card>
    </div>
  )
}

export default WriterSetup