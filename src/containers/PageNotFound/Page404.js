import React from 'react'
import { redirectLink } from '../../config'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Text = styled.p`
  font-size: 2rem;
`

const Button = styled.button`
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;

  :hover {
    background: #fff;
    color: #1aab8a;
  }

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }

  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  :hover:before,
  :hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`

const Page404 = () => {
  return (
    <Wrapper>
      <img
        src="https://media.giphy.com/media/ZeeUrTADWgFUc/source.gif"
        alt=""
      />
      <Text>We are sorry, but the page you requested is not found.</Text>
      <Button onClick={() => window.location.replace(redirectLink)}>
        Homepage
      </Button>
    </Wrapper>
  )
}

export default Page404
