create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  password_hash text not null,
  role text not null default 'admin',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists projects (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists services (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists testimonials (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists gallery (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists clients (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists certificates (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists team_members (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists contact_messages (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists careers (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists blogs (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists company_information (id uuid primary key default gen_random_uuid(), data jsonb not null, created_at timestamptz default now(), updated_at timestamptz default now());
