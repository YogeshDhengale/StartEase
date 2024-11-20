import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Payments</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through payments list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
