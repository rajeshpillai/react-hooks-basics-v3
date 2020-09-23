import React, { useContext } from "react";
import PropTypes from "prop-types";

// import GlobalContext from "../../context/global-context";
import Context from "../../context/context";

export default function ProgressBar({ percent, width, height = 9 }) {
  // const GlobalData = useContext(GlobalContext);

  const { global_data } = useContext(Context);
  // console.log("pvContext", global_data, setGlobalData);

  const getWidthAsPercent = () => {
    return Number((width * percent) / 100);
  };

  const getColor = per => {
    if (per == 100) return "green";
    return per > 50 ? "orange" : "red";
  };

  return (
    <div
      style={{
        border: "solid 1px lightgray",
        width: width,
        backgroundColor: "lightgray"
      }}
    >
      {/* {GlobalData.theme} */}
      {/* {pvContext.theme} */}
      {global_data.theme}
      <div
        style={{
          width: getWidthAsPercent(),
          height: height,
          color: "#ddd",
          backgroundColor: getColor(percent)
        }}
      >
        <span style={{ fontSize: "0.6em", fontWeight: "bold" }}>
          {percent}%
        </span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired
};
