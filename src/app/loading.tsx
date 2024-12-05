import { Spin } from "antd";
import React from "react";
import style from "../components/table.module.css";
const loading = () => {
  return (
    <div className={style.spin}>
      <Spin size="large" />
    </div>
  );
};

export default loading;
