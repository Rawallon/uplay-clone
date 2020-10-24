import React from "react";

import ComplexOverview from "./overview/ComplexOverview";
import ComplexStatsOverview from "./overview/ComplexStatsOverview";
import SimpleOverview from "./overview/SimpleOverview";
import SimplestOverview from "./overview/SimplestOverview";

export default function Overview(props) {
  const appid = props.appid;
  const style = props.style;
  console.log(style);
  return (
    <>
    {
    (style === "ComplexOverview") &&<ComplexOverview AppID={appid}/> ||
    (style === "ComplexStatsOverview") &&  <ComplexStatsOverview AppID={appid}/> ||
    (style === "SimpleOverview") &&  <SimpleOverview AppID={appid}/>||
    (style === "SimplestOverview") &&  <SimplestOverview AppID={appid}/>
    }
    </>
  );
}
