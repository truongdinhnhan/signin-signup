import './form.css';

const FormErrorMessage = ({ children }) => {
  return (
    <div className="error-message">{children}</div>
  )
}

export default FormErrorMessage