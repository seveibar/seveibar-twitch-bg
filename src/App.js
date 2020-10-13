import React from "react"
import SquaresBackground from "./components/SquaresBackground"
import TitleText from "./components/TitleText"
import SocialIcons from "./components/SocialIcons"
import { styled } from "@material-ui/core"

const Container = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",
})
const BlackBox = styled("div")({
  position: "absolute",
  backgroundColor: "#000",
  left: 150,
  top: 180,
  width: 500,
  height: 320,
})

function App() {
  return (
    <Container>
      {/* <BackgroundGrid /> */}
      <SquaresBackground />
      <TitleText />
      <SocialIcons />
      {/* <BlackBox /> */}
    </Container>
  )
}

export default App
