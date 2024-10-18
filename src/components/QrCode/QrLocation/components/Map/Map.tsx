import React, { useCallback, useEffect, useState } from "react";
import type { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";

import { mapConfig } from "@/configs";
import { useGeolocation } from "@uidotdev/usehooks";
import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import { FORM_FIELD } from "@/components/QrCode/constants";
import { LatLong } from "@/components/QrCode/QrLocation/types";
import { Skeleton } from "@/components/ui/skeleton";

const CoMap = dynamic(() => import("@/components/CoMap/CoMap"), {
  ssr: false,
  loading: () => <Skeleton className={"rounded-none w-full h-52"} />,
});

interface MapProps<FormValues extends FieldValues> {
  lat: LatLngExpression;
  long: LatLngExpression;
  setValue: UseFormSetValue<FormValues>;
}

function Map<FormValues extends FieldValues>({ lat, long, setValue }: MapProps<FormValues>) {
  const [position, setPosition] = useState<LatLong>([mapConfig.INIT_LAT, mapConfig.INIT_LONG]);
  const { longitude, latitude } = useGeolocation();

  useEffect(() => {
    if (lat && long) {
      setPosition([Number(lat), Number(long)]);
    }
  }, [lat, long]);

  const handleSetMyPos = useCallback(() => {
    setValue(
      FORM_FIELD.LATITUDE as Path<FormValues>,
      latitude as PathValue<FormValues, Path<FormValues>>,
    );

    setValue(
      FORM_FIELD.LONGITUDE as Path<FormValues>,
      longitude as PathValue<FormValues, Path<FormValues>>,
    );
  }, [latitude, longitude, setValue]);

  return (
    <div className={"flex flex-col gap-2 h-52"}>
      <div className={"flex w-full justify-end"}>
        <CoButton variant={"secondary"} text={"set my position"} onClick={handleSetMyPos} />
      </div>
      <CoMap position={position} />
    </div>
  );
}

export default Map;
