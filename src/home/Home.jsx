import "./home.scss"
import Navbar from "../navbar/Navbar";
import Features from "../features/Features";
import List from "../movieList/List";
const Home=()=>{
    return(
        <div className="home">
    
        <Navbar />
        <Features type="movie"/>
        {/* Each List component has ListItem component
        and each list Component has 10 list Component*/}
        <List/>
        <List/>
        <List/>
        <List/>
        </div>
        
    )
}
export default Home;