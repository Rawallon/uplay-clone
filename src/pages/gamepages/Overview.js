import React from "react";

import ComplexOverview from "./overview/ComplexOverview";
import ComplexStatsOverview from "./overview/ComplexStatsOverview";
import SimpleOverview from "./overview/SimpleOverview";
import SimplestOverview from "./overview/SimplestOverview";

export default function Overview(props) {
  const appid = props.appid;
  const pageStyle = props.style;

  if (pageStyle === "ComplexOverview")
    return <ComplexOverview AppID={appid} />;
  else if (pageStyle === "ComplexStatsOverview")
    return <ComplexStatsOverview AppID={appid} />;
  else if (pageStyle === "SimpleOverview")
    return <SimpleOverview AppID={appid} />;
  else if (pageStyle === "SimplestOverview")
    return <SimplestOverview AppID={appid} />;
}
