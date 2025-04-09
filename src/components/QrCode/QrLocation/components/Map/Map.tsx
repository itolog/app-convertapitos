import React, { useCallback } from "react";

import { useGeolocation } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoPlaces from "@/components/Inputs/CoPlaces/CoPlaces";
import { Item } from "@/components/Inputs/CoPlaces/types";
import { FORM_FIELD } from "@/components/QrCode/constants";
import { LatLong } from "@/components/QrCode/QrLocation/types";
import { Skeleton } from "@/components/ui/skeleton";

const CoMap = dynamic(() => import("@/components/CoMap/CoMap"), {
  ssr: false,
  loading: () => <Skeleton className={"rounded-none w-full h-80"} />,
});

function Map({ setValue, watch }) {
  const lat = watch("lat");
  const long = watch("lng");

  const { longitude, latitude } = useGeolocation();

  const setPositionValues = useCallback(
    ({ lat, lng }: LatLong) => {
      setValue(FORM_FIELD.LATITUDE, lat);

      setValue(FORM_FIELD.LONGITUDE, lng);
    },
    [setValue],
  );

  const handleSetMyPos = useCallback(() => {
    if (latitude && longitude) {
      setPositionValues({
        lat: latitude,
        lng: longitude,
      });
    }
  }, [latitude, longitude, setPositionValues]);

  const handleChangeSearch = useCallback(
    (data: Item) => {
      setPositionValues({
        lat: data.y,
        lng: data.x,
      });
    },
    [setPositionValues],
  );

  return (
    <div className={"relative flex flex-col z-0 gap-4"}>
      <CoPlaces width={"w-72 md:w-96"} onChange={handleChangeSearch} />
      <div className={"flex w-full justify-end"}>
        <CoButton variant={"secondary"} text={"set my position"} onClick={handleSetMyPos} />
      </div>

      <div className={"h-80"}>
        <CoMap position={{ lat: lat, lng: long }} />
      </div>
    </div>
  );
}

export default Map;
