import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;









// import { useState , createContext } from "react";

// const FavoritesContext=createContext({
//     favorites: [],
//     totalfavorites:0,
//     addFavorite:(favoriteMeetup)=>{},
//     removeFavorite:(meetupId)=>{},
//     itemFavorite:(meetupId)=>{}
// });

// export function FavoritesContextProvider(props){

//     const [userFavorite , setuserFavorite ] = useState([]);

//     function addFavoriteHandler(favoriteMeetup){
//         setuserFavorite((prevMeetups)=>{
//            return prevMeetups.concat(favoriteMeetup)
//         })
//     }
//     function removeFavoriteHandler(meetupId){
//         setuserFavorite((prevMeetups)=>{
//             return prevMeetups.filter(meetup => {meetup.id !== meetupId})
//          })
//     }
//     function itemFavoriteHandler(meetupId){
//         return userFavorite.some(meetup =>{meetup.id === meetupId})
//     }

//     const context={
//         favorites:userFavorite,
//         totalfavorites:userFavorite.length,
//         addFavorite:addFavoriteHandler,
//         removeFavorite:removeFavoriteHandler,
//         itemFavorite:itemFavoriteHandler
//     }
//    return <FavoritesContext.Provider value={context}>
//        {props.children}
//    </FavoritesContext.Provider>
// }

// export default FavoritesContext;