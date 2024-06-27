import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Fullname" type="text" placeholder="Insert your name here..." name="fullname"/>

        <InputForm label="email" type="email" placeholder="example@gmail.com" name="email"/>

        <InputForm label="Password" type="password" placeholder="Enter your password" name="password"/>

        <InputForm label="Confirm Password" type="password" placeholder="Confirm your password" name="ConfirmPassword"/>

        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    )
}

export default FormRegister