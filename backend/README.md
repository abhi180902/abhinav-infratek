# Abhinav Infratek Backend

Express + PostgreSQL backend for the Abhinav Infratek website and admin dashboard.

## Features

- Express API server
- PostgreSQL database through `pg`
- JWT admin authentication
- bcrypt password verification
- Protected CRUD routes
- Public contact form route
- Contact email notification through Nodemailer
- Cloudinary upload endpoint for images and PDFs
- Career resume upload support
- Admin inbox routes for contact messages and career applications
- Helmet, CORS, Morgan, compression, and rate limiting
- Extra email-specific rate limiter for contact/career submissions

## Setup

Install dependencies:

```bash
npm install
```

Create `.env` from `.env.example`:

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

Important: `EMAIL_PASS` must be a Gmail App Password, not the normal Gmail password.

## Database

Create PostgreSQL database:

```text
abhinav_infratek
```

Run schema:

```text
src/db/schema.sql
```

Seed starter records:

```bash
npm run seed
```

## Admin User

Admin registration is intentionally not public.

Generate a bcrypt hash:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('Admin@12345',10).then(console.log)"
```

Insert admin user in PostgreSQL:

```sql
insert into users (name, email, password_hash, role)
values (
  'Prasad Sangamad',
  'prasadsangamad162@gmail.com',
  'PASTE_HASH_HERE',
  'admin'
);
```

## Run

```bash
npm run dev
```

Health check:

```text
http://localhost:5000/api/health
```

## API Routes

```text
/api/health
/api/auth
/api/projects
/api/services
/api/gallery
/api/team
/api/testimonials
/api/clients
/api/certificates
/api/contact
/api/careers
/api/blogs
/api/company-info
/api/users
/api/uploads
```

## CRUD Pattern

Editable modules use this pattern:

```text
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

The same pattern applies to services, gallery, team, testimonials, clients, certificates, blogs, company info, and users.

Contact and career routes are public for submission, but protected for admin reads/deletes.

## Uploads

Admin upload endpoint:

```text
POST /api/uploads
```

Request type:

```text
multipart/form-data
```

Fields:

```text
file: image or PDF
folder: optional Cloudinary folder
```

Returns:

```json
{
  "url": "https://...",
  "publicId": "...",
  "resourceType": "image",
  "originalName": "file.jpg"
}
```

## Email Limits

Contact and career email routes are limited to 5 requests per hour per IP address.

Global API rate limit is also enabled in `src/app.js`.

## Deployment

Render settings:

```text
Root directory: backend
Build command: npm install
Start command: npm start
```

Required production env:

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

After deploying, test:

```text
https://your-render-backend-url.onrender.com/api/health
```

## Security

Do not commit `.env`.

If `.env` was committed or pushed, rotate all secrets immediately.
