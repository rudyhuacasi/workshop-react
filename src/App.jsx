import { useState, useEffect } from 'react' 
import { Heading, Button, Container } from "@chakra-ui/react"
import * as API from "./services/launches";
import LaunchItem from './components/LaunchItem';
import { RiArrowRightLine } from "react-icons/ri"
import './App.css'

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);

  return (
    <>
    <div style={{ padding: 20 }}>
      <Button colorScheme="teal">¡Hola Chakra!</Button>
    </div>
    <Container>
      <Heading as="h4" size="5xl">Space X</Heading>
      <ul>
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </ul>
      
    </Container>
      
    </>
  )
}

export default App
