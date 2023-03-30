import "./home.scss"
import Navbar from "../navbar/Navbar";
import Features from "../features/Features";
import List from "../movieList/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home=({type1})=>{
    const [lists, setList]=useState([]);
    const [genre, setGenre]=useState(null)
    useEffect(()=>{
        const getRandomList=async()=>{
            try{
const res=await axios.get(`lists${type1? "?type=" +type1 :""}${genre? "&genre" +genre:""}`,
{headers:{
    token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjBmZDk3NWUxOTJmNWY4NzZhOTJhNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzk4ODM2ODgsImV4cCI6MTY4MDQ4ODQ4OH0.A53J764ZcABoCA-ztMk4Gro9yZuhSb76pdKyGMv3Y3k"
}})

setList(res.data)          
}catch(err){
console.log(err)
            }
        };
        getRandomList();
    }, [type1, genre])
    return(
        <div className="home">
    
        <Navbar />
        <Features type={type1}/>
        {/* Each List component has ListItem component
        and each list Component has 10 list Component*/}
        {lists.map((list)=>{
          return (
            <List listProp={list} />
          )  
        })
        }
        
        </div>
        
    )
}
export default Home;