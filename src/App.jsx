import { useState, useEffect } from 'react'
import { Heading, Stack, Button, Container, Box, Text, Flex, Alert } from "@chakra-ui/react"
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
          <Box bg="gray.200" my="6" p="4"  rounded="md" key={launch.flight_number}>
            <Flex justify="space-between">
              <Text textStyle="2xl">
                Missione <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>
              <Alert.Root status={launch.launch_success ? "success":"error"} variant="solid" w="28">
                <Alert.Indicator />
                <Alert.Title>{launch.launch_success ? "successo":"errore"}</Alert.Title>
              </Alert.Root>
            </Flex>
          </Box>
        ))}
      </ul>
    </Container>
      
    </>
  )
}

export default App
