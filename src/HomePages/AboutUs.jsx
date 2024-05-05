import person from '../assets/images/about_us/person.jpg'

const AboutUs = () => {
    return (
        <div>
            <h1 className="text-3xl text-center  font-bold text-yellow-500 ">About Us </h1>
            <div className="mt-5">
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline btn-warning">Get more info</button>
    </div>
  </div>
</div>

            </div>
            
        </div>
    );
};

export default AboutUs;