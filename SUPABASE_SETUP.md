# Supabase Setup Guide for Eagle Yoga Foundation

Currently, the application uses **Local Storage** for authentication and data persistence. To upgrade to **Supabase**, follow these steps:

## 1. Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and sign up.
2. Create a new project.
3. Once created, go to **Project Settings > API**.
4. Copy the `Project URL` and `anon public` key.

## 2. Connect Your App
Update your `.env` file with these credentials:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_KEY=your_anon_key_here
```

## 3. Create Tables
Go to the **SQL Editor** in your Supabase dashboard and run the following script to set up your database:

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- USERS TABLE
create table profiles (
  id uuid references auth.users not null primary key,
  email text unique not null,
  full_name text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ENROLLMENTS TABLE
create table enrollments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) not null,
  course_id text not null,
  status text default 'active',
  progress integer default 0,
  payment_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- HEALTH PROFILES TABLE
create table health_profiles (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) not null,
  data jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## 4. Enable Authentication
1. Go to **Authentication > Settings**.
2. Enable **Email/Password** provider.
3. (Optional) Disable "Confirm email" if you want instant login for testing.

## 5. Switch Service to Supabase
Once setup is complete, you can update `src/services/auth.js` to use the `supabase-js` client instead of `localStorage`.
