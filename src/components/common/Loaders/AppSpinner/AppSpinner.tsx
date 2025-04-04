import React from "react";

import styles from "./appSpinner.module.css";

const AppSpinner = () => {
  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <div className={styles.spinner}>
        <div className={styles.inner} />
      </div>
    </div>
  );
};

export default AppSpinner;
