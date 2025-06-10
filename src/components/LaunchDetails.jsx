import React from 'react'
import { useParams  } from "react-router";


function LaunchDetails() {
    let {launchId} = useParams();
  return (
    <>LaunchDetails {launchId}</>
  )
}

export default LaunchDetails