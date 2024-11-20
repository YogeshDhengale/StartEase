import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Products</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through products list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
