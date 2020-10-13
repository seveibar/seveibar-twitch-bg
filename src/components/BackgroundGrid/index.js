import React, { useEffect, useState } from "react"
import { styled } from "@material-ui/core"
import range from "lodash/range"

const Container = styled("div")({
  position: "absolute",
  left: 0,
  right: -150,
  top: 0,
  bottom: 0,
  display: "flex",
  flexWrap: "wrap",
})
const Box = styled("div")({
  display: "inline-block",
  margin: 8,
  backgroundColor: "rgba(255,255,255,0.2)",
  transition: "transform 100ms",
  width: 20,
  height: 20,
})

export const BackgroundGrid = () => {
  const [frame, setFrame] = useState(0)
  const maxFrames = 2
  useEffect(() => {
    let frameIndex = 0
    let interval = setInterval(() => {
      setFrame((frameIndex + 1) % maxFrames)
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Container>
      {range(1000).map((i) => (
        <Box frame={frame} key={i} />
      ))}
    </Container>
  )
}

export default BackgroundGrid
