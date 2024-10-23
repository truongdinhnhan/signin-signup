import styles from './Button.module.css'

const Button = ({ type = 'button', children }) => {
  return (
    <button className={styles.button} type={type}>{children}</button>
  )
}

export default Button