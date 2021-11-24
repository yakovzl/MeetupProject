import NewMeetupForm from "../component/layout/NewMeetupForm";
import {useHistory} from 'react-router-dom';
function NewMeetUpPage(){

   const history=useHistory();

    function AddMeetupHandler(meetup){
      fetch('https://react-get-started-cda6c-default-rtdb.firebaseio.com/meetups.json',
      {
         method:'POST',
         body:JSON.stringify(meetup),
         headers:{
             'Content-Type' : 'application/json'
         }
      }
      ).then(()=>{
        history.replace('/');
      })
    }    
    return <div>
       New MeetUp Page
       <NewMeetupForm OnAddMeetup={AddMeetupHandler} />
    </div>
}

export default NewMeetUpPage