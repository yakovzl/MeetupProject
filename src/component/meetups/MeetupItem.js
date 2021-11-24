import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupsItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
        </button>
      </div>
    </Card>
  </li>
  );
}

export default MeetupItem;


















// import {useContext} from ' react';

// import Card from '../ui/Card';
// import classes from './MeetupsItem.module.css';
// import FavoritesContext from '../../store/favorites-context';


// function MeetupItem(props){
//     // const favoriteCtx= useContext(FavoritesContext);

//     // const isFavorite=favoriteCtx.itemFavorite(props.id);

//     // function taggleFavoriteStatusHandler(){
//     //     if(isFavorite)
//     //     {
//     //         favoriteCtx.removeFavorite(propss.id)
//     //     }else{
//     //         favoriteCtx.addFavorite({
//     //             id:props.id,
//     //             image:props.image,
//     //             title:props.title,
//     //             address:props.address,
//     //             description:props.description
//     //         })
//     //     }
//     // }
    
//     return (
//     < li className={classes.item}>
//     <Card>
//     <div className={classes.image}>
//     <img src={props.image} alt={props.title}></img>
//     </div>
//     <div className={classes.content}>
//        <h3>{props.title}</h3>
//        <address>{props.address}</address>
//        <p>{props.description}</p>
//     </div>
//     <div className={classes.actions}>
//         <button onClick={taggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favorite' : 'To Favorite'}</button>
//     </div>
//     </Card>
//     </li>
//     );
// }
// export default MeetupItem;