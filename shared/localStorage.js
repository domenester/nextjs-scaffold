const prefixes = {
  global: 'bemcare_provider_',
  access: 'access',
  accessToken: 'access_token'
}

const getData = (key) => {
  const item = localStorage.getItem(`${prefixes.global}${key}`)
  if (!item) return null
  return item
}

const setData = (key, data) => {
  localStorage.setItem(`${prefixes.global}${key}`, data)
  return data
}

export const getAccess = () => {
  const access = getData(prefixes.access)
  if (access) return JSON.parse(access)
}

export const getAccessToken = () => {
  return getData(prefixes.accessToken)
}

export const setAccess = (item) => {
  if (!item) return
  return setData(prefixes.access, JSON.stringify(item))
}

export const setAccessToken = (token) => {
  if (!token) return
  return setData(prefixes.accessToken, token)
}

export const removeAccessToken = () => {
  return localStorage.removeItem(`${prefixes.global}${prefixes.token}`)
}

export const clear = () => {
  localStorage.removeItem(`${prefixes.global}${prefixes.access}`)
  localStorage.removeItem(`${prefixes.global}${prefixes.accessToken}`)
}