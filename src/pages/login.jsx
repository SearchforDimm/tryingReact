import { Link } from "react-router-dom"
import AuthLayout from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"
const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="text-sm mt-5 text-center">
                Don't have an account? {" "} <Link to="/register" className="font-bold text-blue-600">Register!</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage