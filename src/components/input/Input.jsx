import styles from "./Input.module.css";

const Input = ({ name, type = "text", register, placeholder = "Type something...", ...props }) => {
  return (
    <input
      name={name}
      {...register(name)}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
