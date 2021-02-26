import React, { useState, useEffect } from "react";
import axiosWithAuth from '../auth/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState(null);
  const [refresh, setRefresh] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
      setColorList(res.data)})
    .catch(err => console.log(err))
  }, [refresh]);

  return (
    <>
    { colorList ? 
      <>
        <ColorList colors={colorList} updateColors={setColorList} refresh={refresh}  setRefresh={setRefresh} />
        <Bubbles colors={colorList} />
    </>
    : <h1>Loading...</h1> }
    </>
  );
};

export default BubblePage;
