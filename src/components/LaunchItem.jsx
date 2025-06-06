import React from 'react'
import { Box, Text, Flex, Alert, Icon, Button } from "@chakra-ui/react"
import { FaCalendarAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { format } from "date-fns";
import { it } from "date-fns/locale"


function LaunchItem(launch) {
  return (
    <>
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
          <Flex align="center">
            <Icon mr="2">
              <FaCalendarAlt/>
            </Icon>
            {format(new Date(launch.launch_date_local), "d MMMM yyyy", { locale: it })}
          </Flex>
            <Button colorPalette="cyan" variant="solid" mt="4" size="lg">
                Dettagli <FaArrowAltCircleRight />
            </Button>
        </Box>
    </>
  )
}

export default LaunchItem