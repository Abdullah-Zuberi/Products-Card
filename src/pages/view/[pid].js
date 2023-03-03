import { Router, useRouter } from 'next/router'
import axios from "axios";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter()
  const {pid} = router.query
const [myData, setMyData] = useState({});  
  
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => setMyData(res.data));
  }, []);

return(
  <>
    <h4>{myData.title}</h4>
    <h4>{myData.price}</h4>
    <h4>{myData.description}</h4>
    <h4>{myData.category}</h4>
  </>
)
}
export default Post;

