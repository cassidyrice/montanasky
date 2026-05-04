create extension if not exists vector;

create table if not exists sop_documents (
  id uuid primary key default gen_random_uuid(),
  source_file text not null,
  title text,
  workflow_type text,
  risk_level text default 'normal',
  content text not null,
  embedding vector(1536),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists sop_documents_embedding_idx
on sop_documents using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

create table if not exists support_queries (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  issue text not null,
  workflow text,
  answer text,
  sources jsonb,
  feedback text,
  created_at timestamptz default now()
);
