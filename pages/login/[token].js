import { useEffect } from 'react'
import Loading from '../../components/atoms/loading'
import { useValidateAccessToken } from '../../services/auth'
import { useRouter } from 'next/router'
import { setAccess, setAccessToken } from '@bem/shared/localStorage'

const LoginWithTokenPage = () => {
  const [token, access, error] = useValidateAccessToken()
  console.log('token: ', token, access);
  const router = useRouter()
  useEffect(() => {
    if (error) {
      router.push('/login')
    } else {
      if (token && access) {
        setAccess(access)
        setAccessToken(token)
        router.push('/')
      }
      if (token === false) router.push('/login')
    }
  }, [token, access])
  return (
    <Loading />
  )
}

export default LoginWithTokenPage
