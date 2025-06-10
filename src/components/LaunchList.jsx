import { useState, useEffect } from 'react' 
import { Heading, Container } from "@chakra-ui/react"
import * as API from "../services/launches";
import LaunchItem from './LaunchItem';



function LaunchList() {
    const [launches, setLaunches] = useState([]);
    
      useEffect(() => {
        API.getAllLaunches().then(setLaunches)
      }, []);
    
  return (
    <>
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

export default LaunchList