import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
axios.get(url, {withCredentials: true})
.then(res=>{
  setBookings(res.data);
})
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-10 mb-10">
        Your bookings:{booking.length}
      </h1>
        <div className="overflow-x-auto">
          <table className="table">
           
            <tbody className="text-center">
                {
                    booking.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                }
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Bookings;
