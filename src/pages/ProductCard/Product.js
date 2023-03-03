import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponent from "@/Component/CardComponent";

export default function Product() {
  const [myData, setMyData] = useState([]);
  const [filterMyData, setFilterMyData] = useState([]);

  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
    if (searchQuery !== "") {
      const arr = filterMyData.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      console.log(arr);
      setFilterMyData([...arr]);
    } else {
      setFilterMyData([...myData]);
    }
  };
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setMyData([...res.data]);
    });
  }, []);

  useEffect(() => {
    setFilterMyData([...myData]);
  }, [myData]);
  return (
    <>
      <div>
        Search:{" "}
        <input
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          padding: "30px",
          spacing: "0",
        }}
      >
        {filterMyData && filterMyData.length > 0
          ? filterMyData.map((post, index) => {
              return <CardComponent key={index} data={post} />;
            })
          : null}
      </div>
    </>
  );
}

