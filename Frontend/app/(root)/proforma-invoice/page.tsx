import Heading from "@/components/Heading/Heading";
import React from "react";
import TableContainer from "./TableContainer";

function page() {
  return (
    <>
      <Heading>Proforma Invoice</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through proforma invoice list
      </p>
      <TableContainer />
    </>
  );
}

export default page;
