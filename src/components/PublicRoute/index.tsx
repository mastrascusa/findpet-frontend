import { Navigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { useLoading } from '../../hooks/useLoading'

import { PublicRouteProps } from '../../types/components/publicroute'
import { UserContextType } from '../../types/contexts/authcontext'
import { LoadingCircle } from '../LoadingCircle'

export function PublicRoute({ component }: PublicRouteProps) {
    const { user } = useAuth()
    const { isLoading } = useLoading()

    function checkAuth(user: UserContextType | undefined) {
        if (user) {
            if (isLoading) {
                return <LoadingCircle />
            } else {
                return <Navigate to='/home' /> //HomePage
            }
        } else {
            if (isLoading) {
                return <LoadingCircle />
            } else {
                return component
            }
        }
    }

    return checkAuth(user)
}
