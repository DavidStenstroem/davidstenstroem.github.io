import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  height: 100%;
  padding: 10vw 3vw;
  font-size: 5vw;

  @media screen and (min-width: 600px) {
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
    font-size: 3vw;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`

const Home: React.FunctionComponent = () => (
  <StyledWrapper>
    <p>
      Hi, I'm David. A front end developer from Aarhus working with <strong>React</strong>, <strong>Vue.js</strong>, and all things{' '}
      <strong>JavaScript</strong>.
    </p>
    <br />
    <p>
      I'm currently working as a senior frontend developer at{' '}
      <strong>
        <a href="https://trendhim.com">Trendhim</a>
      </strong>
      . Before that I've worked at{' '}
      <strong>
        <a href="https://salling-group.com">Salling Group</a>
      </strong>
      ,{' '}
      <strong>
        <a href="https://salling-group.com">Lindberg</a>
      </strong>{' '}
      and others.
    </p>
    <br />
    <StyledLink href="mailto:david@stenstroem.dk">Email</StyledLink>
    <StyledLink href="https://github.com/DavidStenstroem">Github</StyledLink>
    <StyledLink href="https://linkedin.com/in/david-stenstroem">LinkedIn</StyledLink>
  </StyledWrapper>
)

export default Home
