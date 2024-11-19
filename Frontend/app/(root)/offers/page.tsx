import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Offers</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through offers list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
