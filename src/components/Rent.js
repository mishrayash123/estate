import React,{useEffect,useState} from "react";
import '../Css/rent.css';


const Rent = (props) => {
    const {Sdata} = props;
  
   

    return (
        <div className="mt-28">
        <div class=" w-75 mx-auto">
  <div class="">
    <h3 class=" text-3xl font-bold font-sans">Search properties to rent</h3>
  </div>
</div>
      <div className="mt-10">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-36 w-75 mx-auto">
            {
            Sdata.map(Sdata => (
                
                <div class="col">
                  <div class="card">
                    <img src={Sdata.thumbnail_url} class="card-img-top wit" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Price :{Sdata.rental_prices.per_month}/month</h5>
                      <p class="card-text">{Sdata.short_description}</p>
                    </div>
                  </div>
                </div>
        
            ))
        } </div>
        </div> 
   
    </div>
    );
};

export default Rent;