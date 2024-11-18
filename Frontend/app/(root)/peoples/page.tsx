import React from "react";
import Heading from "@/components/Heading/Heading";
import PeoplesTableContainer from "./PeoplesTableContainer";

function page() {
  return (
    <>
      <Heading>Peoples</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through peoples list
      </p>
      <PeoplesTableContainer />
    </>
  );
}

export default page;
