import { GlobalRegistrator } from "@happy-dom/global-registrator";
import React from "react";

GlobalRegistrator.register();

React.useLayoutEffect = React.useEffect;
