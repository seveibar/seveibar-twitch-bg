import React, { useEffect, useState, useMemo } from "react"
import { styled } from "@material-ui/core"
import range from "lodash/range"
import { makeStyles } from "@material-ui/core/styles"
import colorPalettes from "nice-color-palettes"

const Container = styled("div")({
  position: "absolute",
  left: 0,
  right: -150,
  top: 0,
  bottom: 0,
  display: "flex",
  flexWrap: "wrap",
})
const Box = styled("div")(({ bg, size, x, y, r }) => ({
  margin: 8,
  backgroundColor: bg || "#fff",
  opacity: 0.03,
  transition: "transform 500ms linear",
  left: x,
  top: y,
  position: "absolute",
  width: size,
  height: size,
}))
const useStyles = makeStyles((theme) => {
  const obj = {}

  for (let i = 0; i < 90; i++) {
    const startRot = Math.floor(Math.random() * 90)
    obj[`@keyframes myEffect${i}`] = {
      "0%": {
        transform: `rotate(${startRot}deg)`,
      },
      "100%": {
        transform: `rotate(${startRot + 90}deg)`,
      },
    }
    obj[`rot${i}`] = {
      animation: `$myEffect${i} ${Math.round(
        500 + (i / 90) * 10000
      )}ms linear infinite`,
    }
  }

  return obj
})

export const SquaresBackground = () => {
  const classes = useStyles()
  const data = useMemo(() => {
    const palette = ["#00f", "#fff"]
    return range(800).map((i) => {
      const xd = Math.random() ** 2 * 800
      const yd = Math.random() ** 2 * 700
      const d = Math.sqrt(xd ** 2 + yd ** 2)
      const r = Math.round(Math.random() * 90)
      const bg = palette[Math.floor(Math.random() * palette.length)]
      const size = 50 + (Math.max(0, 800 - d) / 2) * Math.random() ** 2
      return { bg, xd, yd, d, r, size, ri: Math.floor((1 - size / 850) * 90) }
    })
  }, [])

  return (
    <Container>
      {data.map(({ xd, yd, d, r, size, ri, bg }, i) => {
        return (
          <Box
            className={classes[`rot${ri}`]}
            x={1280 - xd}
            y={720 - yd}
            r={r}
            bg={bg}
            size={size}
            key={i}
          />
        )
      })}
    </Container>
  )
}

export default SquaresBackground
