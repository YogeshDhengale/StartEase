import Heading from "@/components/Heading/Heading";
import React from "react";

function page() {
  return (
    <>
      <Heading>Reports</Heading>
      <p className="text-sm text-muted-foreground">
        Browse through customized report
      </p>
      <div className="w-full grid md:grid-cols-4 md:grid-rows-9 lg:grid-rows-6 gap-4 mt-8"></div>
    </>
  );
}

export default page;
