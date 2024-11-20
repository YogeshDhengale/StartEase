import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Expenses</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through expenses list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
