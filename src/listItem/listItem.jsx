import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from "react";
const ListItem=({index})=>{
  const [isHovered, setIsHovered]=useState(false)
  const trailer="https://media.istockphoto.com/id/1184888786/video/indian-farm.mp4?s=mp4-640x640-is&k=20&c=mNuGE9DEfImq5tYukcsxifFUNG0BwHCO7Q7MMZOZsYA=";
  return (
    <div className="listItem" style={{left:isHovered && index * 225-50+ index *2.5}}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCm92FzNUC-CCSVwkfFxvqtkwDxsznU93-uA&usqp=CAU" alt=""/>
  {isHovered && (
    <>
    <video src={trailer} autoPlay={true} loop/>
  
  {/* listItem  general information */}  
<div className="info">
    <div className="icon">
<PlayArrowIcon/>
<AddIcon/>
<ThumbUpOutlinedIcon/>
<ThumbDownAltOutlinedIcon />
    </div>

    <div className="itemInfoTop">
<span>2hr 30 mins</span>
<span className="limit">+18</span>
<span>2003</span>
    </div>  

    <div className="desc">
hello how are u today
hello how are u today
hello how are u today
hello how are u today
hello how are u today
hello how are u today
hello how are u today
    </div>

    <div className="genre">
Action
    </div>
      </div>
    
    </>
  )}
  
    </div>
    
  ) 
}
export default ListItem