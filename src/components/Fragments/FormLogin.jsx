import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>

        <InputForm label="Password" type="password" placeholder="Enter your password" name="password"/>

        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    )
}

export default FormLogin