import React, { Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';

export const withHelmet = (component: () => React.ReactNode) => () =>
(
  <HelmetProvider>
    <Suspense fallback={"Loading"}>{component()}</Suspense>
  </HelmetProvider>
);
