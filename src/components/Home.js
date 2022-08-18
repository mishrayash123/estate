import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className=" position-absolute top-50 start-50 translate-middle ">
            <h3 className="text-center m-5 font-extrabold text-stone-900 text-3xl">Wellcome</h3>
            <h3 className="text-center m-5 font-extrabold text-fuchsia-900 text-3xl">Our </h3>
            <h3 className="text-center m-5 font-extrabold text-fuchsia-900 text-3xl"> Rent a Property Service</h3>
            <Link to="/rent" type="button" className=" btn btn-outline-primary  hover:bg-blue-900 text-red-900 block px-3 py-2 rounded-md hover:text-white text-base font-medium">
                                Start
                                </Link>
        </div>
    )
}

export default Home;