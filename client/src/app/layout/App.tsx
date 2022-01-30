import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Activity } from '../models/Activity'
import 'semantic-ui-css/semantic.css'
import '../styles/common.scss'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'

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
      <ProfilePage/>
    </div>
  );
}

export default App;
