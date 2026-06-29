# Abhinav Infratek Backend

Express + PostgreSQL API starter for the owner-managed website.

## What is already built

- Express server with Helmet, CORS, Morgan, compression, rate limiting, and JSON parsing.
- JWT admin login route at `/api/auth/login`.
- PostgreSQL connection using `pg`.
- CRUD-style protected routes for projects, services, gallery, team, testimonials, blogs, and users.
- Public contact message route.
- Career application route with PDF upload placeholder using Multer memory storage.
- PostgreSQL schema file for all requested collections/modules.

## Manual setup required

1. Copy `.env.example` to `.env`.
2. In PostgreSQL 18 / pgAdmin, create a database named `abhinav_infratek`.
3. Run `src/db/schema.sql` inside that database.
4. Install backend dependencies with `npm install` inside `backend`.
5. Create the first admin user manually, because registration is intentionally not public.
6. Add real Cloudinary credentials before production file uploads.
7. Add a Gmail App Password or SMTP credentials before Nodemailer email sending.
8. Start with `npm run dev`.

## API

- `/api/auth`
- `/api/projects`
- `/api/services`
- `/api/gallery`
- `/api/team`
- `/api/testimonials`
- `/api/contact`
- `/api/careers`
- `/api/blogs`
- `/api/users`

## Still incomplete by design

- Admin dashboard screens are previewed on the frontend, but full admin CRUD UI is not implemented yet.
- Cloudinary upload streaming must be connected with real credentials.
- Email notifications must be connected after SMTP credentials are available.
- Google Maps embed needs the real office address or map iframe.
- Production deployment needs Vercel, Render, PostgreSQL hosting, domain, and environment variables.
