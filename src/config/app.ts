import { env } from "../utils"

export const appName = env("REACT_APP_TITLE", 'Fadhil Apps')

export const apiURL = env("REACT_APP_API_URL", "/")