import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import { styled } from "@material-ui/core/styles"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { SocialIcon } from "react-social-icons"
import qs from "qs"

const Container = styled("div")({
  position: "absolute",
  right: 150,
  bottom: 150,
})

const SocialButton = styled("div")({
  display: "flex",
  alignItems: "center",
})

const Text = styled("div")({
  fontSize: 64,
  color: "#fff",
  fontWeight: 600,
})

const queryParams = qs.parse(window.location.search.split("?")[1])

const socials = ["twitter", "youtube", "discord", "twitch", "reddit"]

export const SocialIcons = () => {
  return (
    <Container>
      {socials
        .filter((network) => queryParams[network])
        .map((network) => (
          <SocialButton key={network}>
            <SocialIcon
              style={{ width: 96, height: 96, marginTop: 8 }}
              network={network}
              bgColor="rgba(0,0,0,0)"
              fgColor="#fff"
            />
            <Text>{queryParams[network]}</Text>
          </SocialButton>
        ))}
    </Container>
  )
}

export default SocialIcons
