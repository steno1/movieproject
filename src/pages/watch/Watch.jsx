import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Watch=()=>{
    return(
        <div className="watch">
<div className="back">
<ArrowBackOutlinedIcon/>
Home

</div>
<video className="video" autoPlay progress controls src="https://media.istockphoto.com/id/1249558755/video/corcovado-national-park-costa-rica.mp4?s=mp4-640x640-is&k=20&c=SeqFrvNEiF0K4DSsKEFPeYDP6cOYLJzYtvFuBvALLBU="/>
        </div>
    )
}
export default Watch;