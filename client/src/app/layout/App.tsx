import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Activity } from '../models/Activity';
import Navbar from '../../features/common/Navbar';
import 'semantic-ui-css/semantic.css';
import '../styles/navbar.scss';
import '../styles/suggested-list.scss';
import '../styles/home-page.scss';
import ActivityList from '../../features/activities/dashboard/ActivityList';
import { Container, Grid } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import SuggestedUserList from '../../features/users/SuggestedUserList';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Activity[]>("https://localhost:44392/api/Activities");
      setActivities(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Grid className='main'>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={8}>
          <ActivityDashboard />
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={3}><SuggestedUserList/></Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
