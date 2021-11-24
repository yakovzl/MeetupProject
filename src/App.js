import { router , Switch } from 'react-router-dom';
import AllMeetUp from './pages/AllMeetUp';
import Favorite from './pages/Favorite';
import NewMeetUp from './pages/NewMeetUp';
import MainNavigation from './component/layout/MainNavigation';
import Layout from './component/layout/Layout';


function App() {
  return <div>
  <Layout>
  <Switch>
    <router path='/' exact>
     <AllMeetUp></AllMeetUp>
    </router>
    <router path='/favorite' exact>
     <Favorite></Favorite>
    </router>
    <router path='/new' exact>
     <NewMeetUp></NewMeetUp>
    </router>
    </Switch>
    </Layout>
  </div>;
}

export default App;
