import { useEffect, useState } from 'react';
import { getAccessToken } from '@bem/shared/localStorage';
import GlobalProviders from '@bem/provider/global';
import '../styles/globals.css'
import LoginWithTokenPage from './login/[token]';
import PrivateRoute from '@bem/provider/private';
import {publicRoutes} from '@bem/config/route';

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => setIsSSR(false), [])
  if (isSSR) return <></>;
  const pathname = window.location.pathname.substring(1).replace(/\//g, '')
  const isPublic = publicRoutes.includes(pathname)
  const token = getAccessToken()
  return (
    <GlobalProviders>
      {
        (token && !isPublic) && (
          <PrivateRoute>
            <Component {...pageProps} />
          </PrivateRoute>
        )
      }
      {
        isPublic && <Component {...pageProps} />
      }
      {
        !token && <LoginWithTokenPage {...pageProps} />
      }
    </GlobalProviders>
  )
}

export default MyApp
