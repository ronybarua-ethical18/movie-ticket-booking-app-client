import styles from "./FormButton.module.css";
import Link from "next/link";

const FormButton = ({ text, icon, style, link, type, disabled, onClick, className }) => {
  return (
    <Link href={link ? link : ''} passHref>
      <button type={type} onClick={onClick} disabled={disabled} style={style} className={className}>
        {text} {icon}
      </button>
    </Link>
  );
};

export default FormButton;