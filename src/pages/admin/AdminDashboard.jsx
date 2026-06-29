import { useEffect, useMemo, useState } from 'react'
import { apiRequest, clearAdminSession, getAdminToken } from '../../services/api'
import { adminModules, getModule } from './adminModules'

const pretty = (value) => JSON.stringify(value, null, 2)

function AdminDashboard() {
  const params = new URLSearchParams(window.location.search)
  const activeKey = params.get('module') || 'projects'
  const activeModule = useMemo(() => getModule(activeKey), [activeKey])
  const [items, setItems] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [jsonText, setJsonText] = useState(pretty(activeModule.sample))
  const [status, setStatus] = useState('')
  const [uploadStatus, setUploadStatus] = useState('')
  const [uploadedUrl, setUploadedUrl] = useState('')

  useEffect(() => {
    if (!getAdminToken()) window.location.href = '/admin/login'
  }, [])

  useEffect(() => {
    setEditingId(null)
    setJsonText(pretty(activeModule.sample))
    setUploadedUrl('')
    loadItems(activeModule)
  }, [activeModule])

  async function loadItems(module = activeModule) {
    setStatus('Loading...')
    try {
      const data = await apiRequest(module.endpoint)
      setItems(Array.isArray(data) ? data : [])
      setStatus('')
    } catch (error) {
      setStatus(error.message)
    }
  }

  async function saveItem(event) {
    event.preventDefault()
    if (activeModule.readonly) return
    try {
      const payload = JSON.parse(jsonText)
      const path = editingId ? `${activeModule.endpoint}/${editingId}` : activeModule.endpoint
      const method = editingId ? 'PUT' : 'POST'
      await apiRequest(path, { method, body: JSON.stringify(payload) })
      setEditingId(null)
      setJsonText(pretty(activeModule.sample))
      await loadItems()
      setStatus('Saved successfully.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  async function uploadFile(event) {
    const file = event.target.files?.[0]
    if (!file) return
    setUploadStatus('Uploading...')
    try {
      const body = new FormData()
      body.append('file', file)
      body.append('folder', `abhinav-infratek/${activeModule.key}`)
      const result = await apiRequest('/uploads', { method: 'POST', body })
      setUploadedUrl(result.url)
      setUploadStatus('Upload complete. Copy the URL into the JSON field.')
    } catch (error) {
      setUploadStatus(error.message)
    } finally {
      event.target.value = ''
    }
  }

  async function deleteItem(id) {
    if (!confirm('Delete this item?')) return
    try {
      await apiRequest(`${activeModule.endpoint}/${id}`, { method: 'DELETE' })
      await loadItems()
      setStatus('Deleted successfully.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  function editItem(item) {
    setEditingId(item.id)
    setJsonText(pretty(item.data || item))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function logout() {
    clearAdminSession()
    window.location.href = '/admin/login'
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">Abhinav Infratek</a>
        <nav>
          {adminModules.map((module) => <a className={module.key === activeKey ? 'active' : ''} href={`/admin/dashboard?module=${module.key}`} key={module.key}>{module.label}</a>)}
        </nav>
        <button type="button" onClick={logout}>Logout</button>
      </aside>
      <section className="admin-workspace">
        <div className="admin-topbar">
          <div><p className="eyebrow">Admin Dashboard</p><h1>{activeModule.label}</h1></div>
          <button type="button" onClick={() => loadItems()}>Refresh</button>
        </div>

        {!activeModule.readonly && (
          <form className="admin-editor" onSubmit={saveItem}>
            <div><h2>{editingId ? 'Edit item' : 'Create item'}</h2><p>Update the JSON fields below. Upload images or PDFs, then paste the returned URL into the correct field.</p></div>
            <label className="admin-upload">Upload asset<input type="file" accept="image/*,application/pdf" onChange={uploadFile} /></label>
            {uploadStatus && <p className="admin-status">{uploadStatus}</p>}
            {uploadedUrl && <input value={uploadedUrl} readOnly onFocus={(event) => event.target.select()} />}
            <textarea value={jsonText} onChange={(event) => setJsonText(event.target.value)} spellCheck="false" />
            <div className="admin-actions"><button type="submit">{editingId ? 'Update' : 'Create'}</button><button type="button" onClick={() => { setEditingId(null); setJsonText(pretty(activeModule.sample)) }}>Reset</button></div>
          </form>
        )}

        {activeModule.readonly && <div className="admin-editor readonly"><h2>Read-only inbox</h2><p>This module shows submissions from the public website. Delete is available for cleanup.</p></div>}
        {status && <p className="admin-status">{status}</p>}

        <div className="admin-list">
          {items.length === 0 && <article className="admin-empty">No records found.</article>}
          {items.map((item) => <article className="admin-record" key={item.id}><div><strong>{item.data?.title || item.data?.name || item.data?.companyName || item.id}</strong><pre>{pretty(item.data || item)}</pre></div><div className="admin-record-actions">{!activeModule.readonly && <button type="button" onClick={() => editItem(item)}>Edit</button>}<button type="button" onClick={() => deleteItem(item.id)}>Delete</button></div></article>)}
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
