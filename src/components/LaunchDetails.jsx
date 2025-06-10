import { useState, useEffect } from 'react' 
import * as API from "../services/launches";
import { Box, Text, Flex, Alert, Button } from "@chakra-ui/react"
import { useParams, Link  } from "react-router";


function LaunchDetails() {
    const {launchId} = useParams();
    const [launch, setLaunch] = useState({});

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
        .then(setLaunch)
        .catch(console.log)
    }, [launchId])

  return (
    <>
    {/* scatola per i dettagli che c'è in ogni missione di space x */}
    {!launch ?( 
        <div>loading ...</div>
    ): (
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
            <Link to={`/rocket/${launch.rocket?.rocket_name}/${launch.rocket?.rocket_id}`}>
                <Button colorPalette="cyan" variant="solid" mt="4" size="lg">
                    {launch.rocket?.rocket_name}
                </Button>
            </Link>
        </Box>
    )}
    </>
  )
}

export default LaunchDetails