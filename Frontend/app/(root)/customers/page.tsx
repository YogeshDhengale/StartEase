import React from "react";
import Heading from "@/components/Heading/Heading";
import CustomersTableContainer from "./CustomersTableContainer";

function page() {
  return (
    <>
      <Heading>Customers</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through client list
      </p>
      <CustomersTableContainer />
    </>
  );
}

export default page;
