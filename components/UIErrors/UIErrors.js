import React from "react";
import styles from './UIErrors.module.css'
const UIErrors = ({ errors }) => {
  return (
    <div style={{display: "flex"}}>
      {Object.keys(errors).length > 0 && (
        <div className={styles.errorMessages}>
            {Object.values(errors).map((value) => (
              <li key={value}><strong>{value}</strong></li>
            ))}
        </div>
      )}
    </div>
  );
};

export default UIErrors;
