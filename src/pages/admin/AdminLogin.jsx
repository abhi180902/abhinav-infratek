import { useState } from 'react'
import { apiRequest, setAdminSession } from '../../services/api'

function AdminLogin() {
  const [form, setForm] = useState({ email: 'prasadsangamad162@gmail.com', password: '' })
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('Signing in...')
    try {
      const data = await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(form) })
      setAdminSession(data.token, data.user)
      window.location.href = '/admin/dashboard'
    } catch (error) {
      setStatus(error.message)
    }
  }

  return (
    <main className="admin-auth-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Admin Login</p>
        <h1>Manage Abhinav Infratek content.</h1>
        <label>Email<input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} type="email" required /></label>
        <label>Password<input value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} type="password" required minLength="6" /></label>
        <button type="submit">Login</button>
        {status && <p className="admin-status">{status}</p>}
        <a href="/">Back to website</a>
      </form>
    </main>
  )
}

export default AdminLogin
