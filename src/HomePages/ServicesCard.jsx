import { Link } from "react-router-dom";

const ServicesCard = ({item}) => {
  return (
    <div>
      <div className="card border-yellow-500 h-[400px] border-2 mt-5 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={item.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body  items-center text-center">
          <h2 className="card-title">{item.title}</h2>
          <p> Price: {item.price}</p>
          <div className="card-actions">
            <Link to={`/book/${item._id}`} className="btn btn-warning text-white">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
