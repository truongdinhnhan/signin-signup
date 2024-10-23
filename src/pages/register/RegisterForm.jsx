import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../libs/validations";
import { useForm } from "react-hook-form";
import FormField from "../../components/form/FormField";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import FormErrorMessage from "../../components/form/FormErrorMessage";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/button/Button";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    setError("root");
  };

  return (
    <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          register={register}
          name="username"
          placeholder="truongnhan"
        />
        {errors.username && (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          register={register}
          name="email"
          type="email"
          placeholder="truongnhan@gmail.com"
        />
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <PasswordInput register={register} name="password" placeholder="Your password" />
        {errors.password && (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        )}
      </FormField>
      <Button type="submit">{isSubmitting ? "Loading..." : "Register"}</Button>
      {errors.root && (
        <FormErrorMessage>{errors.root.message}</FormErrorMessage>
      )}
    </form>
  )
}

export default RegisterForm