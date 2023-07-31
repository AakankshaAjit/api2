

import React, { useEffect, useState } from "react";
import Axios from "axios"
import Loader from "./Components/Loader";
import Card from "./Components/Card";
const API = "https://dummyjson.com/products";

const App = () => {
  const [products, Setproducts] = useState([]);
  const[Loading,SetLoading] = useState(false)

  const fetchMydata = async () => {
    SetLoading(true)
    await Axios.get(API)
      .then((res) => {
       if(res.data.products){
        Setproducts(res.data.products);
       }
      })
      .catch((err) => console.log(err));

      SetLoading(false)
  };

  useEffect(() => {
    fetchMydata();
  }, [])

  return (
    <>
 {Loading ? <Loader/> :
 <>


{products &&
        products.map((e) => (
          <Card key={e._id} title={e.title} price={e.price} discountPercentage={e.discountPercentage} brand={e.brand} description={e.description} thumbnail={e.thumbnail}  />
        ))}
 </>




 }
    </>
  );
};

export default App;