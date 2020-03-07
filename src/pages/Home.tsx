import { styled } from "linaria/react";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 2rem 0;
`;

const Title = styled.h1`
  line-height: 1;
  padding: 1rem 2rem;
`;

const Area = styled.h2`
  line-height: 1;
  padding: 1rem 2rem;
`;

const CragLink = styled(Link)`
  display: block;
  font-size: var(--size-2);
  color: inherit;
  line-height: 1;
  padding: 1rem 2rem;
`;

export default function Home() {
  return (
    <Container>
      <Title>Crag Guide</Title>
      <Area>Wawa</Area>
      <CragLink to="/crag/uling">Uling</CragLink>
      <CragLink to="/crag/monkey">Monkey</CragLink>
      <CragLink to="/crag/slayer">Slayer</CragLink>
      <CragLink to="/crag/boogie">Boogie</CragLink>
    </Container>
  );
}
