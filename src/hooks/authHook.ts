// hooks/useAuth.ts
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation, useRegisterMutation } from '../redux/slices/api/productApiSlice'
import { setCredentials, logout } from '../redux/slices/api/authSlice'
import type { RootState } from '../redux/store/store'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { token, user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  
  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const [register, { isLoading: registerLoading }] = useRegisterMutation()

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({ email, password }).unwrap()
      if (result.success && result.data.token) {
        dispatch(setCredentials({
          token: result.data.token,
          user: result.data.user
        }))
      }
      return result
    } catch (error) {
      throw error
    }
  }

  const handleRegister = async (fullName: string, email: string, password: string) => {
    try {
      const result = await register({ fullName, email, password }).unwrap()
      return result
    } catch (error) {
      throw error
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return {
    token,
    user,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    loginLoading,
    registerLoading,
  }
}