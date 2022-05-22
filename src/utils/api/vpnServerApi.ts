import axios from 'axios'
import { URL } from 'url'

type authTokenType = {
  token: string|null,
  ttl: number|null
}

type vpnUserCredentialsType = {
  username: string,
  password: string
}

type queryParams = {
  [index: string]: string
}

const authToken: authTokenType = {
  token: null,
  ttl: null,
}

const createUrl = (pathname: string, queryParams: queryParams = {}): URL => {
  const url = new URL(
    `/RestAPI${pathname}`,
    process.env.VPN_API_HOST
  )
  url.port = process.env.VPN_API_PORT

  for (let key in queryParams) {
    url.searchParams.set(key, queryParams[key])
  }

  return url
}

const checkAuthToken = (): boolean => {
  if (authToken.token === null || authToken.ttl === null) {
    return false
  }

  const now = Date.now() / 1000
  if (authToken.ttl >= now) {
    return false
  }

  return true
}

/**
 * Create auth token for VPN server api or just return it if it already exists
 */
export const apiAuth = async (): Promise<authTokenType> => {
  if (checkAuthToken()) {
    return authToken
  }

  const url = createUrl(
    '/APIAuthToken',
    {
      loginName: process.env.VPN_API_USER,
      password: process.env.VPN_API_PASSWORD,
      domainName: process.env.VPN_API_DOMAIN_NAME,
    }
  )

  const { status, data } = await axios.get(url.toString())

  const logPrefix = '[VpnServerApi::apiAuth]'
  if (status !== 200){
    throw new Error(`${logPrefix} Url ${url.toString} respond with status ${status}`)
  }

  const token = data['AuthTicket'] ?? null
  if (token === null) {
    throw new Error(`${logPrefix} There is no token in response from Url ${url.toString()}`)
  }

  const validDate = data['ValidDate'] ?? null
  if (validDate === null) {
    throw new Error(`${logPrefix} There is no validDate in response from Url ${url.toString()}`)
  }

  authToken.token = token
  authToken.ttl = validDate

  return authToken
}

/**
 * Create user on vpn server or return data if user already exist
 */
export const createVpnUser = async (username: string, password: string): Promise<vpnUserCredentialsType> => {
  const { token } = await apiAuth()

  const userCredentials = {
    givenName: username,
    password,
    templateName: process.env.VPN_API_TEMPLATE_NAME
  }

  const url = createUrl(
    '/CreateUser',
    {
      AuthToken: token,
      PRODUCT_NAME: 'MODULE_NAME',
      domainName: process.env.VPN_API_DOMAIN_NAME,
      inputFormat: JSON.stringify([userCredentials])
    }
  )

  const { status, data } = await axios.get(url.toString())

  const logPrefix = '[VpnServerApi::createVpnUser]'
  if (status !== 200){
    throw new Error(`${logPrefix} Url ${url.toString} respond with status ${status}`)
  }

  const vpnUsername = data[0]['USER_NAME'] ?? null
  if (vpnUsername === null) {
    throw new Error(`${logPrefix} There is no USER_NAME in response from Url ${url.toString()}`)
  }

  const vpnPassword = data[0]['USER_PASSWORD'] ?? null
  if (vpnPassword === null) {
    throw new Error(`${logPrefix} There is no USER_PASSWORD in response from Url ${url.toString()}`)
  }

  return {
    username: vpnUsername,
    password: vpnPassword,
  }
}
