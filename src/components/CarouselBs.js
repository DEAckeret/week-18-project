import Carousel from 'react-bootstrap/Carousel';

function CarouselBs() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mr. Knowsathingortwo!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dr. Venti!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Incredible Novelist!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBs;