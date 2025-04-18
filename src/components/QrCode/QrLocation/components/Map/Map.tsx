import React, { useCallback, useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";
import { useGeolocation } from "@uidotdev/usehooks";
import cl from "clsx";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoPlaces from "@/components/Inputs/CoPlaces/CoPlaces";
import { Item } from "@/components/Inputs/CoPlaces/types";
import { FORM_FIELD } from "@/components/QrCode/constants";
import { LatLong } from "@/components/QrCode/QrLocation/types";
import { Skeleton } from "@/components/ui/skeleton";

const CoMap = dynamic(() => import("@/components/CoMap/CoMap"), {
  ssr: false,
  loading: () => <Skeleton className={"h-80 w-full rounded-none"} />,
});

function Map({ setValue, watch }) {
  const lat = watch("lat");
  const long = watch("lng");

  const { handleError } = useErrors();
  const { longitude, latitude, error, loading } = useGeolocation();

  useEffect(() => {
    if (error) {
      handleError(error, { withSnackbar: true });
    }
  }, [error, handleError]);

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
    <div className={"relative z-0 flex flex-col gap-4"}>
      <CoPlaces width={"w-72 md:w-96"} onChange={handleChangeSearch} />
      <div
        className={cl("flex w-full justify-end", {
          "cursor-not-allowed": Boolean(error),
        })}>
        <CoButton
          disabled={Boolean(error)}
          loading={loading}
          variant={"secondary"}
          text={"set my position"}
          onClick={handleSetMyPos}
        />
      </div>

      <div className={"h-80"}>
        <CoMap position={{ lat: lat, lng: long }} />
      </div>
    </div>
  );
}

export default Map;
