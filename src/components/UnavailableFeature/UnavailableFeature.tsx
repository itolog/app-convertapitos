import React from "react";

import CoCard from "@/components/common/Cards/CoCard/CoCard";

const UnavailableFeature = () => {
  return (
    <CoCard>
      <div className={"flex h-full items-center p-3 text-xl md:text-2xl"}>
        The feature is not available
      </div>
    </CoCard>
  );
};

export default UnavailableFeature;
