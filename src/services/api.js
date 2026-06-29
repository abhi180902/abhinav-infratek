const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export function getAdminToken() {
  return localStorage.getItem('abhinav_admin_token')
}

export function setAdminSession(token, user) {
  localStorage.setItem('abhinav_admin_token', token)
  localStorage.setItem('abhinav_admin_user', JSON.stringify(user))
}

export function clearAdminSession() {
  localStorage.removeItem('abhinav_admin_token')
  localStorage.removeItem('abhinav_admin_user')
}

export async function apiRequest(path, options = {}) {
  const token = getAdminToken()
  const headers = { ...(options.headers || {}) }
  if (!(options.body instanceof FormData)) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API_URL}${path}`, { ...options, headers })
  const isJson = response.headers.get('content-type')?.includes('application/json')
  const payload = isJson ? await response.json() : null
  if (!response.ok) throw new Error(payload?.message || `API request failed: ${response.status}`)
  return payload
}
