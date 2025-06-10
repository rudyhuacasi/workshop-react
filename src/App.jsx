import React from 'react' 
import { Heading, Container } from "@chakra-ui/react"
import LaunchItem from './components/LaunchItem';
import { Routes, Route  } from "react-router";
import './App.css'
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

function App() {  


  return (
    <>

    <Container>
      <Routes>
        <Route  path="/" element={<LaunchList />} />
        <Route  path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
      
    </Container>
      
    </>
  )
}

export default App
