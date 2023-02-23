import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/listItem";
import { useRef, useState } from "react";

const List=({listProp})=>{
    //make the slider not to overflow
const [slideNumber, setSlideNumber]=useState(0);

//make the arrow at left to appear when slider moves on click
const [isMoved, setIsMoved]=useState(false);


    const listRef=useRef()//use in getting the container Div
    const handleClick=(direction)=>{
        //when button is clicked setIsMoved=true
        setIsMoved(true)//initial value is now opposite
        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);   
listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        
        if(direction==="right" && slideNumber < 5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
                    }
                    
    }
    
    return(
        <div className="list">
<span className="listTitle">{listProp.title}</span>
<div className="wrapper">
<ArrowBackIosNewOutlinedIcon className="sliderArrow left"
    onClick={()=>handleClick("left")}
    style={{display:!isMoved && "none"}}//if slide doesnt move, hide arrow
/>
<div className="container" ref={listRef}> 
{/* Each listItem in List contains a movie, 
so each of the list component has 10 listItem, containing movies*/} 
{listProp.content.map((movieId, i)=>{
    return (
        <ListItem index={i} movieId={movieId}/>
    )
})}


</div>
<ArrowForwardIosOutlinedIcon className="sliderArrow right"
    onClick={()=>handleClick("right")}
/>
</div>
        </div>
    )
}
export default List;