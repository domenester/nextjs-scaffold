import { useEffect, useState } from 'react';
import {useFetch} from '../../hooks/fetch';
import {useRouter} from 'next/router'
import getConfig from 'next/config';

export const useValidateAccessToken = () => {
  const {
    publicRuntimeConfig: {AUTH_URL}
  } = getConfig();
  const router = useRouter()
  const [url, setUrl] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
    const _token = router.query.token
    if (_token) {
      setUrl(`${AUTH_URL}/provider/validate/${_token}`)
    }
    setToken(_token || false)
  }, [router.query])

  return [token, ...useFetch(url, {method: 'post'})]
}