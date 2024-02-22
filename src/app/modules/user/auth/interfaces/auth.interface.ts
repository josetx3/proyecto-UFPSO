export interface TokenRefreshRequest {
  refresh_token: string,
}

export interface TokenRefreshResponse {
  access_token: string,
  refresh_token: string,
  token_type: string,
}
