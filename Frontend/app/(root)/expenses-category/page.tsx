import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Expenses Categories</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through expenses categories list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
