import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
   const  [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <h1 className="text-xl font-bold mt-10 text-orange-500 text-center">Service</h1>
            <p className="text-3xl text-center  mt-3 font-bold">Our Service Area</p>
            <p className="text-center ">the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which  look even slightly believable. </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    services.map(item => <ServicesCard  key={item.id} item={item}></ServicesCard>)
                }

            </div>

            
        </div>
    );
};

export default Services;