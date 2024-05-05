import AboutUs from "./AboutUs";
import Banner from "./Banner"
import Services from "./Services";


const Home = () => {
    return (
        <div className="mt-10 mb-10 ">
            <Banner></Banner>
            <div className="mt-10">
                <AboutUs></AboutUs>
                <Services></Services>
            </div>
            
            
            
        </div>
    );
};

export default Home;