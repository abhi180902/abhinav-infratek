# Abhinav Infratek

Professional construction and architecture website for Abhinav Infratek Engineers & Architects.

The project includes a Vite React frontend, an Express backend, PostgreSQL storage, JWT admin login, Cloudinary upload support, Nodemailer email notifications, and an owner-managed admin dashboard.

## Tech Stack

### Frontend

- React.js with Vite
- Plain CSS
- API-backed public sections with static fallbacks

### Backend

- Node.js
- Express.js
- PostgreSQL
- JWT authentication
- bcrypt password hashing
- Cloudinary uploads
- Nodemailer email notifications
- Helmet, CORS, rate limiting, Morgan, compression

## Current Public Website Sections

- Home hero
- About company
- Founder profile and qualifications
- Services
- Projects
- Contact form
- Footer with developer credit

The following sections are intentionally removed from the public website for now and can be added later:

- Careers
- Clients & Certifications
- Testimonials
- FAQ

## Admin Dashboard

Admin routes:

```text
/admin/login
/admin/dashboard
```

Admin modules:

- Projects
- Services
- Gallery
- Team Members
- Testimonials
- Clients
- Certificates
- Contact Messages
- Career Applications
- Blogs
- Company Information

CRUD behavior:

- Create records from the admin dashboard.
- Read records from PostgreSQL.
- Update records by editing JSON data.
- Delete records from PostgreSQL.
- Contact messages and career applications are read/delete inbox modules.
- Asset upload returns a Cloudinary URL that can be pasted into JSON fields.

Public Services, Projects, and Testimonials can load from the backend. If the backend is unavailable or empty, the frontend shows fallback content.

## Local Setup

Install frontend dependencies:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create backend environment file:

```text
backend/.env
```

Use `backend/.env.example` as the template.

Required backend variables:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/abhinav_infratek
JWT_SECRET=change-this-secret
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
EMAIL_USER=prasadsangamad162@gmail.com
EMAIL_PASS=
CLIENT_URL=http://localhost:5173
```

Optional frontend environment file:

```text
.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

## PostgreSQL Setup

Create database:

```text
abhinav_infratek
```

Run schema:

```text
backend/src/db/schema.sql
```

Seed starter public data:

```bash
cd backend
npm run seed
```

Create the first admin user manually in PostgreSQL. Do not expose public registration for admin users.

## Run Locally

Start backend:

```bash
cd backend
npm run dev
```

Backend health check:

```text
http://localhost:5000/api/health
```

Start frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Admin login:

```text
http://localhost:5173/admin/login
```

## Build

```bash
npm run build
```

## Security Notes

Never commit real environment files or secrets.

`.gitignore` should include:

```gitignore
.env
*.env
backend/.env
node_modules/
dist/
backend/node_modules/
```

If `.env` was pushed to GitHub, rotate all exposed secrets immediately.

## Deployment Plan

Recommended production setup:

- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL, Neon, or Supabase
- File uploads: Cloudinary
- Domain: `abhinavinfratekengs.in`

Production frontend env:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

Production backend env:

```env
DATABASE_URL=production_postgres_url
JWT_SECRET=strong_secret
CLOUDINARY_NAME=cloudinary_name
CLOUDINARY_KEY=cloudinary_key
CLOUDINARY_SECRET=cloudinary_secret
EMAIL_USER=prasadsangamad162@gmail.com
EMAIL_PASS=gmail_app_password
CLIENT_URL=https://abhinavinfratekengs.in
```

After domain purchase, connect `abhinavinfratekengs.in` and `www.abhinavinfratekengs.in` to Vercel using the DNS records Vercel provides.

## Developer Credit

Website developed by Abhishek S Sangamad.
