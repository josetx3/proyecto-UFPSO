export interface TokenRefreshRequest {
  refresh_token_id: string,
}

export interface TokenRefreshResponse {
  access_token: string,
  refresh_token: string,
  token_type: string,
}
