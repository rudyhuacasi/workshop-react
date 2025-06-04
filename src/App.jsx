import { useState, useEffect } from 'react'
import { Heading, Stack, Button, Container } from "@chakra-ui/react"
import { DecorativeBox } from "compositions/lib/decorative-box"
import * as API from "./services/launches";
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
          <DecorativeBox key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </DecorativeBox>
        ))}
      </ul>
    </Container>
      
    </>
  )
}

export default App
