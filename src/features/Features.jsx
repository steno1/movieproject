import "./features.scss"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
const Features=({type})=>{
    const [content, setContent]=useState({});
    useEffect(()=>{
     const getRandomContent=async()=>{
        try{
const res=await axios.get(`/movies/random?type=${type}`,
{headers:{
    token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjBmZDk3NWUxOTJmNWY4NzZhOTJhNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzk4ODM2ODgsImV4cCI6MTY4MDQ4ODQ4OH0.A53J764ZcABoCA-ztMk4Gro9yZuhSb76pdKyGMv3Y3k"
}})
setContent(res.data[0])
        }catch(err){
            console.log(err)
        }
     } 
     getRandomContent();  
    },[type])
    console.log(content)
    return(
        //features container
    <div className="features">
    {/* if prop "type " exist show the div with className="category"
    also, if the prop of type is "movie" show "Movies", else show "Series" */}
    {type && (
        <div className="category">
<span>{type==="movie"?"Movies":"Series"}</span>
{/* Creating options*/}
<select name="genre" id="genre">
<option>Genre</option>
<option value='adventure'>Adventure</option>
<option value="comedy">Comedy</option>
<option value='Crime'>Crime</option>
<option value="fantasy">Fantasy</option>
<option value="historical">Historical</option>
<option value="romance">Romance</option>
<option value="sci-fi">Sci-fi</option>
<option value="thriller">Thriller</option>
<option value="western">Western</option>
<option value='animation'>Animation</option>
<option value="drama">Drama</option>
<option value ="documentary">Documentary</option>

</select>
        </div>
    )}
    <img 
     src={content.imgCoverPage} alt=''/>
       {/*  info container*/}
       <div className="info">
       {/*img and description span in info desc*/}
<img src={content.imgTitle} alt="title"/>
<span className="desc">
{content.desc}
</span>
{/*buttons div in info desc*/}
<div className="buttons">
<button className="Play">
    {/* Play icon from material ui */}
    <PlayCircleFilledOutlinedIcon/>
    <span>Play</span>
</button>
 
<button className="More">
    {/* Info icon from material ui */}
    <InfoOutlinedIcon/>
    <span>Info</span>
    
</button>
</div>

       </div>
        </div>
        )
}
export default Features