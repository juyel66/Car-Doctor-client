import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;

  return (
    <div>
      <h1 className="mt-16 text-3xl text-center font-bold">Book service:{title}</h1>
      <div className="card bg-gray-300 shrink-0 mb-10 border-2 border-gray-500 w-full  shadow-2xl mt-10">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
        
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-500 hover:bg-yellow-500 text-white text-xl">Login</button>
                </div>
              </form>
            </div>
    </div>
  );
};

export default CheckOut;
