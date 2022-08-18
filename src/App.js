import './App.css';
import {React, useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Axios from "axios";
import Rent from "./components/Rent"
import Footer from "./components/Footer";
import Home from './components/Home';


function App() {

  const [Sdata, setSdata] = useState([]);

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
    Axios.request(options).then(function (response) {
      console.log(response.data);
      setSdata(response.data.listing);
    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/rent" element={<div>
                <Rent Sdata={Sdata} />
            </div>} />
            <Route path="/" element={<div>
                <Home />
            </div>} />
            </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;