import axios from "axios";
import React,{useEffect,useState} from "react";
import '../Css/rent.css';


const Rent = () => {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const options = {
    method: 'GET',
    url: 'https://zoopla.p.rapidapi.com/properties/list',
    params: {
      area: 'Oxford, Oxfordshire',
      identifier: 'oxford',
      category: 'residential',
      order_by: 'age',
      ordering: 'descending',
      page_number: '1',
      page_size: '40'
    },
    headers: {
      'X-RapidAPI-Key': 'e8d49997e3mshc19c5745cb99d78p1bb5a1jsnedfa2627415c',
      'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
    }
  };




  const getdata = async () => {
    axios.request(options).then(function (response) {

      setAllProperties(response.data.listing);
    }).catch(function (error) {
      console.error(error);
    });
  }

    
    const [filteredProperties , setFilteredProperties] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(0)
    const changePrice = (newPrice) => {
      setCurrentPrice(newPrice)
    }
    useEffect(() => {
     setFilteredProperties(allProperties);
    }, [allProperties]);

    useEffect(() => {
      console.log(filteredProperties.length,"filtered")
       }, [filteredProperties]);

    const filterProperties = () => {
      console.log('curPrice',typeof(currentPrice))
     if(currentPrice==="500"){
      const updateitems = allProperties.filter((currele) => {
        return (currele.rental_prices.per_month>=500 && currele.rental_prices.per_month<=1000);
      });
      console.log("filter result",updateitems)
      setFilteredProperties(updateitems)
      
     }

     if(currentPrice==="1000"){
      const updateitems = allProperties.filter((currele) => {
        
        return (currele.rental_prices.per_month>=1000 && currele.rental_prices.per_month<=3000);
      });
      setFilteredProperties(updateitems)
      
     }

     if(currentPrice==="300"){
      const updateitems = allProperties.filter((currele) => {
        
        return (currele.rental_prices.per_month>=300);
      });
      setFilteredProperties(updateitems)
     
     }
     
       
    }
    

    return (
        <div className="mt-28">
        <div class=" w-75 mx-auto">
  <div class="">
    <h3 class=" text-3xl font-bold font-sans">Search properties to rent</h3>
  </div>
</div>
<form className="mt-10" onSubmit={filterProperties}>
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
  <li class="list-group-item"><button type="button" class="btn btn-primary w-100 mt-3  bg-primary" onClick={filterProperties}>Search</button></li>
</ul>

</form>
      <div className="mt-10">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-36 w-75 mx-auto">
            {
            filteredProperties.map(SdataEle => (
                
                <div class="col">
                  <div class="card ">
                    <a href={SdataEle.details_url}>
                    <img src={SdataEle.image_150_113_url} class="card-img-top wit" alt="image is not in data" />
                    </a>
                    <div class="card-body bg-red-200">
                      <h5 class="card-title text-green-900 font-extrabold">{SdataEle.rental_prices.per_month}/month</h5>
                      <h5 class="card-title text-fuchsia-900 font-extrabold">{SdataEle.title}</h5>
                      <h5 class="card-title text-black font-semibold">{SdataEle.displayable_address}</h5>
                      <h5 class="card-title text-green-900  font-bold">{SdataEle.num_bedrooms} 🛌&ensp;&ensp; {SdataEle.num_bathrooms} 🛀 </h5>
                    </div>
                  </div>
                </div>
        
            ))
        } 
        {/* {filteredProperties.length} */}
        </div>
        </div> 
   
    </div>
    );
};


export default Rent
