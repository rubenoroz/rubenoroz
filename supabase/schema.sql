-- 1. Profiles Table (Main Bio and Personal Information)
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  title text not null,
  bio text,
  email text,
  phone text,
  location text,
  linkedin_url text,
  github_url text,
  cv_url text
);

-- Enable RLS for profiles
alter table profiles enable row level security;

-- Policies for profiles
create policy "Allow public read access to profiles" on profiles
  for select using (true);

create policy "Allow individual user to update their own profile" on profiles
  for update using (auth.uid() = id);

create policy "Allow individual user to insert their own profile" on profiles
  for insert with check (auth.uid() = id);

-- 2. Experiences Table
create table if not exists experiences (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references profiles(id) on delete cascade not null,
  company text not null,
  position text not null,
  description text,
  start_date text not null,
  end_date text,
  is_current boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for experiences
alter table experiences enable row level security;

-- Policies for experiences
create policy "Allow public read access to experiences" on experiences
  for select using (true);

create policy "Allow authenticated admin manage experiences" on experiences
  for all using (auth.role() = 'authenticated');

-- 3. Education Table
create table if not exists education (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references profiles(id) on delete cascade not null,
  institution text not null,
  degree text not null,
  description text,
  start_date text not null,
  end_date text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for education
alter table education enable row level security;

-- Policies for education
create policy "Allow public read access to education" on education
  for select using (true);

create policy "Allow authenticated admin manage education" on education
  for all using (auth.role() = 'authenticated');

-- 4. Projects Table
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  description text not null,
  image_url text,
  link_url text,
  category text not null, -- 'saas', 'tv', 'music', 'dev'
  status text,
  sort_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for projects
alter table projects enable row level security;

-- Policies for projects
create policy "Allow public read access to projects" on projects
  for select using (true);

create policy "Allow authenticated admin manage projects" on projects
  for all using (auth.role() = 'authenticated');

-- 5. Publications Table
create table if not exists publications (
  id uuid default gen_random_uuid() primary key,
  profile_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  authors text not null,
  journal_event text not null,
  publication_year integer not null,
  link_url text,
  description text,
  is_coil boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for publications
alter table publications enable row level security;

-- Policies for publications
create policy "Allow public read access to publications" on publications
  for select using (true);

create policy "Allow authenticated admin manage publications" on publications
  for all using (auth.role() = 'authenticated');

-- 6. Messages Table
create table if not exists messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text default 'unread', -- 'unread', 'read', 'archived'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for messages
alter table messages enable row level security;

-- Policies for messages
create policy "Allow public to insert contact messages" on messages
  for insert with check (true);

create policy "Allow authenticated admin to read/manage messages" on messages
  for all using (auth.role() = 'authenticated');
