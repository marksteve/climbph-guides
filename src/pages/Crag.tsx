import { styled } from "linaria/react";
import { cover } from "polished";
import React from "react";
import { Link } from "react-router-dom";
import cragImage from "../images/monkey/IMG_2758.jpg";
import { ReactComponent as RouteSvg } from "../paths/monkey.svg";

const Container = styled.div``;

const Crag = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  object-fit: cover;
  position: relative;

  img {
    height: 100%;
  }
`;

const RoutePaths = styled(RouteSvg)`
  ${cover()}
  height: 100%;

  path {
    fill: #c3f;
  }
`;

const RouteList = styled.div`
  padding: 1em 0;
`;

const RouteLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  line-height: 1;
  padding: 1em 2em;
`;
const RouteNo = styled.span`
  width: 1em;
`;
const RouteName = styled.strong`
  flex: 1;
`;
const RouteGrade = styled.span`
  width: 2em;
`;

const routes = [
  {
    id: "the-gift",
    name: "The Gift",
    grade: "7a"
  },
  {
    id: "remember-me",
    name: "Remember Me",
    grade: "6b+"
  },
]

export default function Home() {
  return (
    <Container>
      <Crag>
        <img src={cragImage} alt="Monkey Wall" />
        <RoutePaths />
      </Crag>
      <RouteList>
        {routes.map((route, i) => (
          <RouteLink to={`/route/${route.id}`} key={i}>
            <RouteNo>{i + 1}</RouteNo>
            <RouteName>{route.name}</RouteName>
            <RouteGrade>{route.grade}</RouteGrade>
          </RouteLink>
        ))}
      </RouteList>
    </Container>
  );
}
