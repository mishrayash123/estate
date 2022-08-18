import React,{useEffect,useState} from "react";
import '../Css/rent.css';


const Rent = (props) => {
    const {Sdata}= props;
    const [currentPrice, setCurrentPrice] = useState('')
    const changePrice = (newPrice) => {
      setCurrentPrice(newPrice)
    }
  
    const MyFilter = () => {
    //  if(currentPrice===500){
    //   const updateitems = Sdata.filter((currele) => {
    //     return (currele.rental_prices.per_month>=500 && currele.rental_prices.per_month<=1000);
    //   });
    //    SetSdata(updateitems);
    //  }
    }

    return (
        <div className="mt-28">
        <div class=" w-75 mx-auto">
  <div class="">
    <h3 class=" text-3xl font-bold font-sans">Search properties to rent</h3>
  </div>
</div>
<form className="mt-10" onSubmit={MyFilter}>
<ul class="list-group list-group-horizontal w-75 row row-cols-1 row-cols-md-3 g-4 mx-auto">
  <li class="list-group-item"><div class="input-group mb-3 mt-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="Oxford">Oxford</option>
    <option value="Florida">Florida</option>
    <option value="New yark">New yark</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Location</label>
</div></li>
  <li class="list-group-item"><div class="input-group mb-3 mt-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="when moove in">when moove in</option>
    
  </select>
  <label class="input-group-text" for="inputGroupSelect02">When</label>
</div></li>
  <li class="list-group-item"><div class="input-group mb-3 mt-3">
  <select class="form-select" id="inputGroupSelect02"  onChange={(event) => changePrice(event.target.value)}
        value={currentPrice}>
    <option selected>Choose...</option>
    <option value="500">500-1000</option>
    <option value="1000">1000-3000</option>
    <option value="3000">3000-max</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Price</label>
</div></li>
  <li class="list-group-item"><div class="input-group mb-3 mt-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="House">House</option>
    <option value="Flat">Flat</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Property Type</label>
</div></li>
  <li class="list-group-item"><button type="button" class="btn btn-primary w-100 mt-3  bg-primary" onClick={MyFilter}>Search</button></li>
</ul>

</form>
      <div className="mt-10">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-36 w-75 mx-auto">
            {
            Sdata.map(Sdata => (
                
                <div class="col">
                  <div class="card ">
                    <a href={Sdata.details_url}>
                    <img src={Sdata.image_150_113_url} class="card-img-top wit" alt="image is not in data" />
                    </a>
                    <div class="card-body bg-red-200">
                      <h5 class="card-title text-green-900 font-extrabold">{Sdata.rental_prices.per_month}/month</h5>
                      <h5 class="card-title text-fuchsia-900 font-extrabold">{Sdata.title}</h5>
                      <h5 class="card-title text-black font-semibold">{Sdata.displayable_address}</h5>
                      <h5 class="card-title text-green-900  font-bold">{Sdata.num_bedrooms} 🛌&ensp;&ensp; {Sdata.num_bathrooms} 🛀 </h5>
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