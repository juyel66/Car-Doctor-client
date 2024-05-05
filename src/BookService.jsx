import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id , price, img} = service;
  const {user} = useContext(AuthContext);
  const handleBookService = event =>{
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    // const email = form.email.value;
    const order = {
        CustomerName: name,
         date, 
         email,
         service: title,
         service_id: _id,
         price: price,
         image: img
    }
    console.log(order);
    fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(order)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
          alert('data loaded successfully');
        }
    })

    
  }
  return (
    <div>
      <div>
        <h1 className="mt-16 text-3xl text-center font-bold">
          Book service:{title}
        </h1>
        <div className="card bg-gray-300 shrink-0 mb-10 border-2 border-gray-500 w-full  shadow-2xl mt-10">
          <form onSubmit={handleBookService}  className="card-body">
            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>


            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                  type="text"
                
                  className="input input-bordered"
                  required
                  defaultValue={"$"+price}
                />
              </div>
            </div>
            <div className="form-control mt-6">
            <input type="submit" className="btn bg-red-500 hover:bg-yellow-500 text-white text-xl" value='Confirm Order' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
