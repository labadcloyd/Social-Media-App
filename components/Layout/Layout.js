import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";

function Layout({children}) {
  return (
    <>
      <HeadTags />

      <Navbar />

      <Container style={{ paddingTop: "1rem" }} text>
        {children}
      </Container>
    </>
  );
}

export default Layout;
