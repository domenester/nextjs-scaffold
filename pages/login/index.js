import { useEffect } from 'react'
import Loading from '../../components/atoms/loading'
import { useValidateAccessToken } from '../../services/auth'
import { useRouter } from 'next/router'
import { setAccess, setAccessToken } from '@bem/shared/localStorage'

const LoginPage = () => {
  const router = useRouter()
  return (
    <Loading />
  )
}

export default LoginPage
