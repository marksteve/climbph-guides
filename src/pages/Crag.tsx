import { styled } from "linaria/react";
import React from "react";
import { Link } from "react-router-dom";
import cragImage from "../images/monkey/IMG_2758.jpg";

const Container = styled.div``;

const Crag = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  object-fit: cover;

  img {
    height: 100%;
  }
`;

const RouteList = styled.div`
  padding: 1em 0;
`;

const RouteLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  text-decoration: none;
  line-height: 1;
  padding: 1em 2em;
`;
const RouteName = styled.strong``;
const RouteGrade = styled.span``;

export default function Home() {
  return (
    <Container>
      <Crag>
        <img src={cragImage} alt="Monkey Wall" />
      </Crag>
      <RouteList>
      <RouteLink to="/route/">
        <RouteName>3 Monkeys and the Sun</RouteName>
        <RouteGrade>?</RouteGrade>
      </RouteLink>
      <RouteLink to="/route/">
        <RouteName>Handlanger</RouteName>
        <RouteGrade>?</RouteGrade>
      </RouteLink>
      <RouteLink to="/route/">
        <RouteName>I Got You Babe</RouteName>
        <RouteGrade>6c</RouteGrade>
      </RouteLink>
      <RouteLink to="/route/">
        <RouteName>The Gift</RouteName>
        <RouteGrade>7a</RouteGrade>
      </RouteLink>
      <RouteLink to="/route/">
        <RouteName>Seven Nation Army</RouteName>
        <RouteGrade>6a</RouteGrade>
      </RouteLink>
      <RouteLink to="/route/">
        <RouteName>Knockin’ on Heaven’s Door</RouteName>
        <RouteGrade>5b</RouteGrade>
      </RouteLink>
</RouteList>
    </Container>
  );
}
