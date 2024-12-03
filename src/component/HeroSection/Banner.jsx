import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const data = [
  {
    url: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e1adc90fb318620f.jpg?q=20",
    url2: "https://rukminim2.flixcart.com/fk-p-flap/480/210/image/4d5fcc221f822ec2.jpg?q=20"
  },
  {
    url: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ec15c0f7104ee235.jpg?q=20",
    url2: "https://rukminim2.flixcart.com/fk-p-flap/480/210/image/6f89708ce8eebd38.png?q=20"
  },
  {
    url: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d6583cac23997646.jpg?q=20",
    url2: "https://rukminim2.flixcart.com/fk-p-flap/480/210/image/661edcc01650cdfd.jpeg?q=20"
  },
  {
    url: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e6dc4b4c88912592.jpg?q=20",
    url2: "https://rukminim2.flixcart.com/fk-p-flap/480/210/image/d06efc984c8f4307.jpeg?q=20"
  },
  {
    url: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a4cec1601ff88602.jpg?q=20",
    url2: "https://rukminim2.flixcart.com/fk-p-flap/480/210/image/4b08479397fa4ff8.jpg?q=20"
  },

]

const Banner = () => {
  return (
    <div className='m-4'>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={100}
        customTransition="transform 1s ease-in-out"
        swipeable={false}
        draggable={false}
        showDots={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        {data.map((item, index) => (
          <div key={index}>
            <img className="hidden md:block" src={item.url} alt="" />
            <img className="md:hidden" src={item.url2} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Banner