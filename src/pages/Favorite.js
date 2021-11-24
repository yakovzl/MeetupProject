import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupsList from '../component/meetups/MeetupList';


function FavoritePage(){
    const favoriteCtx = useContext(FavoritesContext);
    let content;
    if(favoriteCtx.totalFavorites===0)
    {
       content=<p>You got no favorites yet. Start add some ?</p>
    }else {
       content=<MeetupsList meetups={favoriteCtx.favorites } />  
    }
    return <section>
      <h1> Favorite Page </h1>
       {content}
    </section>
}

export default FavoritePage