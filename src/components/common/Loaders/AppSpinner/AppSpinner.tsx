import React from "react";

import styles from "./appSpinner.module.css";

const AppSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.inner} />
    </div>
  );
};

export default AppSpinner;
