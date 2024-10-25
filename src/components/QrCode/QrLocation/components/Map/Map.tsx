import React, { useCallback, useEffect, useState } from "react";
import type { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";

import { mapConfig } from "@/configs";
import { useGeolocation } from "@uidotdev/usehooks";
import { LatLngExpression } from "leaflet";
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

interface MapProps<FormValues extends FieldValues> {
  lat: LatLngExpression;
  long: LatLngExpression;
  setValue: UseFormSetValue<FormValues>;
}

function Map<FormValues extends FieldValues>({ lat, long, setValue }: MapProps<FormValues>) {
  const [position, setPosition] = useState<LatLngExpression>([
    mapConfig.INIT_LAT,
    mapConfig.INIT_LONG,
  ]);
  const { longitude, latitude } = useGeolocation();

  useEffect(() => {
    if (lat && long) {
      setPosition([Number(lat), Number(long)]);
    }
  }, [lat, long]);

  const setPositionValues = useCallback(
    ({ lat, lng }: LatLong) => {
      setValue(
        FORM_FIELD.LATITUDE as Path<FormValues>,
        lat as PathValue<FormValues, Path<FormValues>>,
      );

      setValue(
        FORM_FIELD.LONGITUDE as Path<FormValues>,
        lng as PathValue<FormValues, Path<FormValues>>,
      );
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
        <CoMap position={position} />
      </div>
    </div>
  );
}

export default Map;
