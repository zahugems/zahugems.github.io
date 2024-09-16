import img from "../assets/img3.jpeg";

const Banner = () => {
    return ( 
        <div className="bg-primary flex justify-center">
          <img
            src={img}
            alt={`Slide`}
            className="h-64 object-cover"
          />
        </div>
     );
}
 
export default Banner;