import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../libs/validations";
import FormField from "../../components/form/FormField";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import FormErrorMessage from "../../components/form/FormErrorMessage";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    // setError("root");
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="emailOrUsername">Username or Email</Label>
        <Input
          register={register}
          name="emailOrUsername"
          placeholder="Username or Email"
        />
        {errors.emailOrUsername && (
          <FormErrorMessage>{errors.emailOrUsername.message}</FormErrorMessage>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <PasswordInput register={register} name="password" placeholder="Your password" />
        {errors.password && (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        )}
      </FormField>
      <Button type="submit">{isSubmitting ? "Loading..." : "Login"}</Button>
      {errors.root && (
        <FormErrorMessage>{errors.root.message}</FormErrorMessage>
      )}
      <Link to="/forgot-password">Lost your password?</Link>
    </form>
  );
};

export default LoginForm;
