import {useContext} from 'react';
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation(){
  const favoriteCtx=useContext(FavoritesContext)
    return <header className={classes.header}>
    <div className={classes.logo}>React MeetUp</div>
    <nav>
     <ul>
       <li> <Link to="/" >AllMeetUp</Link></li>
       <li> <Link to="/new" >Add NewMeetUp</Link></li>
       <li> <Link to="/favorite" >
        My Favorite 
     
       {<span className={classes.badge}>
       {favoriteCtx.totalFavorites}</span> }
       </Link></li>

       </ul> 
       </nav>
    
    </header>
}

export default MainNavigation