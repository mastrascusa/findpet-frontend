import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";

import { PrivateRouteProps } from "../types/components/privateroute";
import { UserContextType } from "../types/contexts/authcontext";
import { LoadingCircle } from "./LoadingCircle";

export function PrivateRoute({ component }: PrivateRouteProps) {
    const { user } = useAuth()
    const { isLoading } = useLoading()

    function checkAuth(user: UserContextType | undefined) {
        if (user) {
            if (isLoading) {
                return <LoadingCircle />
            } else {
                return component
            }
        } else {
            if (isLoading) {
                return <LoadingCircle />
            } else {
                return  <Navigate to='/' /> //LandingPage
            }
        }
    }

    return checkAuth(user)
}
