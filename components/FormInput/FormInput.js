import styles from "./FormInput.module.css"
import React from 'react'

const FormInput = ({ icon, type, placeholder, name, label, onChange, value }) => {
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <div className={styles.input}>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} required/>
        {icon}
      </div>
    </div>
  );
};

export default FormInput;