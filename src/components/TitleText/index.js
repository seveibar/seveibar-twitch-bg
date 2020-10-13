import React, { useEffect } from "react"
import useRafState from "react-use/lib/useRafState"
import { styled } from "@material-ui/core"
import { SplitColorChannelText } from "react-text-fun"
import qs from "qs"
import TwitterIcon from "@material-ui/icons/Twitter"

const Container = styled("div")({
  position: "absolute",
  paddingTop: 50,
  paddingLeft: 50,
  left: 0,
  top: 0,
  right: 0,
  height: 180,
  backgroundColor: "#fff",
})

const queryParams = qs.parse(window.location.search.split("?")[1])

export const TitleText = () => {
  const [ticks, setTicks] = useRafState(0)
  useEffect(() => {
    let i = 0
    let interval = setInterval(() => {
      i += 1
      setTicks(i)
    }, 16)
    return () => {
      clearInterval(interval)
    }
  }, [setTicks])

  return (
    <Container>
      <SplitColorChannelText
        text={queryParams.text || "Stream Starting Soon"}
        fontSize={96}
        rotation={Math.random() * 90}
        fill="#000"
        paddingLeft={20}
        fontWeight={900}
        rgbOffset={
          0 + (ticks % 200) > 100
            ? ticks % 7 > 3
              ? 0
              : Math.sin(ticks / 10) * Math.random() * 0.25
            : 0
        }
        addBlur={true}
        addNoise={true}
      />
    </Container>
  )
}

export default TitleText
