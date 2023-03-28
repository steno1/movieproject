import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const ListItem=({index, movieId})=>{
  const [isHovered, setIsHovered]=useState(false);
  const [movie, setMovie]=useState({})
 useEffect(()=>{
  const getMovie=async()=>{
try{
const res=await axios.get("/movies/find/" +movieId,{
headers:{
  token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjBmZDk3NWUxOTJmNWY4NzZhOTJhNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzk4ODM2ODgsImV4cCI6MTY4MDQ4ODQ4OH0.A53J764ZcABoCA-ztMk4Gro9yZuhSb76pdKyGMv3Y3k"
} });
setMovie(res.data)
}catch(error){
console.log(error)
}

  };
  getMovie();
 },[movieId])
  return (
    <Link to ="/watch" state={{watchMovies:movie}}>
    <div className="listItem" style={{left:isHovered && index * 225-50+ index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
<img src={movie.imgCoverPage} alt=""/>
  {isHovered && (
    <>
    <video src={movie.trailer} autoPlay={true} loop/>
  
  {/* listItem  general information */}  
<div className="info">
    <div className="icons">
<PlayArrowIcon className="icon"/>
<AddIcon className="icon"/>
<ThumbUpOutlinedIcon className="icon"/>
<ThumbDownAltOutlinedIcon className="icon" />
    </div>

    <div className="itemInfoTop">
<span>{movie.duration}</span>
<span className="limit">{movie.limit}</span>
<span>{movie.year}</span>
    </div>  

    <div className="desc">
{movie.desc}
    </div>

    <div className="genre">
{movie.genre}
    </div>
      </div>
    
    </>
  )}
  
    </div>
    </Link>
    
  ) 
}
export default ListItem