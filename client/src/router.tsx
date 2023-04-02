import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/layouts/AuthLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";

export const router = createBrowserRouter([
    {
        element: <ContextWrapper />,
        children: [
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: "login"
            },
            {
                element: <Signup />,
                path: "signup"
            }
        ]
    }
    ]}
])

function ContextWrapper() {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}