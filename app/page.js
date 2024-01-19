"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [image, setImage] = useState([]);

  const getImages = async () => {
    try {
      // const response = await axios.get("https://picsum.photos/v2/list");
      // const imgObj =  response.data;
      //  setImage(imgObj);
      //  console.log("clicked");
      

      // or with fetch 

     const res=await fetch("https://picsum.photos/v2/list");
     const raw = await res.json();
     setImage(raw)
        
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button id="button"
          onClick={getImages}
          className="text-bold bg-green-600 font-bold px-5 py-3 rounded-md"
        >
          click
        </button>
      </div>
      <div className="p-9 flex-wrap flex">
        {image.map((item) => {
          return (
            <img
              key={item.id}
              src={item.download_url}
              height={250}
              width={250}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </>
  );
};

export default Page;
