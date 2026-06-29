import { useState } from 'react'
import { apiRequest } from '../../services/api'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [status, setStatus] = useState('')

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function submitContact(event) {
    event.preventDefault()
    setStatus('Sending message...')
    try {
      await apiRequest('/contact', { method: 'POST', body: JSON.stringify(form) })
      setForm({ name: '', email: '', projectType: '', message: '' })
      setStatus('Message sent successfully. We will contact you soon.')
    } catch (error) {
      setStatus(error.message)
    }
  }

  return (
    <section className="section-shell contact-grid" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Start a project conversation.</h2>
        <p>Email: prasadsangamad162@gmail.com<br />Office: Vageesh Nagar 2nd Cross, Medleri road, Ranebennur, Karnataka</p>
        <div className="map-box">Vageesh Nagar 2nd Cross, Medleri road, Ranebennur, Karnataka</div>
      </div>
      <form className="contact-form" onSubmit={submitContact}>
        <input name="name" value={form.name} onChange={updateField} placeholder="Name" required />
        <input name="email" value={form.email} onChange={updateField} placeholder="Email" type="email" required />
        <select name="projectType" value={form.projectType} onChange={updateField} required>
          <option value="" disabled>Project type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Road / Bridge</option>
        </select>
        <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us about your project" required />
        <button type="submit">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
