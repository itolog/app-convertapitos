import React from "react";

import { APP_ENV } from "@/constants";

const TanStackRouterDevtools =
  process.env.NODE_ENV === APP_ENV.PROD
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export default TanStackRouterDevtools;
