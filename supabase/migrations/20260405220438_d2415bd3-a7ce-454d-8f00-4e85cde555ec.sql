
CREATE TABLE public.social_pages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  page_url text NOT NULL,
  page_name text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.social_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own pages"
  ON public.social_pages FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own pages"
  ON public.social_pages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own pages"
  ON public.social_pages FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
