import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllLogs, fetchAllProfiles } from './sanity/profileServices';
import Layout from './components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  const [profile, setProfiles] = useState([]);
  const [log, setLog] = useState([]);

  const getAllProfiles = async() =>{
    const data = await fetchAllProfiles();
    setProfiles(data);
  }

  const getAllLogs = async() =>{
    const data = await fetchAllLogs();
    setLog(data);
  }

  useEffect(()=>{
    getAllProfiles();
    getAllLogs();
  }, [])

  return (
    <>
     <Layout>
      <Routes>
        <Route path="/" element={<Home profile={profile} log={log}/>} />
        <Route path="profile/:profile" element={<Profile />} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
