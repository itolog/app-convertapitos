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
  loading: () => <Skeleton className={"rounded-none w-full h-92"} />,
});

interface MapProps<FormValues extends FieldValues> {
  lat: LatLngExpression;
  long: LatLngExpression;
  setValue: UseFormSetValue<FormValues>;
}
// TODO: fix typing
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

  const handleChange = useCallback(
    ({ lat, long }: { lat: LatLngExpression; long: LatLngExpression }) => {
      setValue(
        FORM_FIELD.LATITUDE as Path<FormValues>,
        lat as PathValue<FormValues, Path<FormValues>>,
      );

      setValue(
        FORM_FIELD.LONGITUDE as Path<FormValues>,
        long as PathValue<FormValues, Path<FormValues>>,
      );
    },
    [setValue],
  );

  const handleChangeSearch = useCallback(
    (data: Item) => {
      setValue(
        FORM_FIELD.LATITUDE as Path<FormValues>,
        data.y as PathValue<FormValues, Path<FormValues>>,
      );

      setValue(
        FORM_FIELD.LONGITUDE as Path<FormValues>,
        data.x as PathValue<FormValues, Path<FormValues>>,
      );
    },
    [setValue],
  );

  return (
    <div className={"relative flex flex-col z-0 gap-2 h-96"}>
      <CoPlaces width={"w-72 md:w-96"} onChange={handleChangeSearch} />
      <div className={"flex w-full justify-end"}>
        <CoButton variant={"secondary"} text={"set my position"} onClick={handleSetMyPos} />
      </div>

      <CoMap onChange={handleChange} position={position} />
    </div>
  );
}

export default Map;
