-- Schema dump generated on 2025-11-04 via Supabase MCP introspection.
BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA extensions;

CREATE TABLE public.transgrafica_clients (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name varchar(255) NOT NULL,
    company_name varchar(255),
    nif varchar(20),
    email varchar(255),
    phone varchar(50),
    mobile varchar(50),
    website varchar(255),
    address_line1 varchar(255),
    address_line2 varchar(255),
    city varchar(100),
    postal_code varchar(20),
    country varchar(100) DEFAULT 'Portugal'::character varying,
    payment_terms varchar(100) DEFAULT '30 dias'::character varying,
    credit_limit numeric(12,2) DEFAULT 0,
    discount_percentage numeric(5,2) DEFAULT 0,
    status varchar(50) DEFAULT 'active'::character varying,
    notes text,
    internal_notes text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    created_by uuid,
    search_vector tsvector,
    total_quotes integer DEFAULT 0,
    total_value numeric(15,2) DEFAULT 0,
    last_quote_date date,
    CONSTRAINT transgrafica_clients_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_clients_nif_key UNIQUE (nif),
    CONSTRAINT transgrafica_clients_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_clients IS 'Base de dados de clientes da Transgráfica';
COMMENT ON COLUMN public.transgrafica_clients.status IS 'Status do cliente: active, inactive, blocked';
COMMENT ON COLUMN public.transgrafica_clients.search_vector IS 'Vector de pesquisa full-text em português';

CREATE TABLE public.transgrafica_clientes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    codigo integer,
    nome_1 text NOT NULL,
    nome_2 text,
    morada_1 text,
    morada_2 text,
    codigo_postal varchar(50),
    pais varchar(50) DEFAULT 'PT'::character varying,
    telefone varchar(50),
    fax varchar(50),
    email varchar(255),
    www text,
    contribuinte varchar(50),
    zona text,
    distrito text,
    tipo_empresa text,
    areas_negocio text,
    vendedor text,
    angariador text,
    origem text,
    mercado varchar(100),
    situacao varchar(100) DEFAULT 'Ativo'::character varying,
    contabilidade text,
    condicoes_pagamento text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT transgrafica_clientes_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_clientes_codigo_key UNIQUE (codigo)
);

CREATE TABLE public.transgrafica_pricing_templates (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name varchar(255) NOT NULL,
    description text,
    work_type varchar(100) NOT NULL,
    is_active boolean DEFAULT true,
    is_default boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    created_by uuid,
    template_data jsonb NOT NULL,
    min_quantity integer DEFAULT 1,
    max_quantity integer,
    valid_from date DEFAULT CURRENT_DATE,
    valid_until date,
    CONSTRAINT transgrafica_pricing_templates_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_pricing_templates_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_pricing_templates IS 'Templates de preçário para diferentes tipos de trabalhos';
COMMENT ON COLUMN public.transgrafica_pricing_templates.template_data IS 'Estrutura JSON com custos base e multiplicadores';

CREATE TABLE public.transgrafica_work_templates (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name varchar(255) NOT NULL,
    description text,
    work_type varchar(100) NOT NULL,
    default_format varchar(100),
    default_paper_type varchar(255),
    default_print_type varchar(255),
    default_finish_type varchar(255),
    default_costs jsonb,
    default_imposition_settings jsonb,
    is_active boolean DEFAULT true,
    is_default boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    created_by uuid,
    metadata jsonb,
    CONSTRAINT transgrafica_work_templates_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_work_templates_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_work_templates IS 'Templates de trabalhos com especificações padrão';

CREATE TABLE public.transgrafica_quotes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    quote_number varchar(50) NOT NULL,
    status varchar(50) DEFAULT 'EM ESPERA'::character varying NOT NULL,
    client_id uuid,
    client_name varchar(255) NOT NULL,
    client_phone varchar(50),
    client_mobile varchar(50),
    client_email text,
    client_nif varchar(20),
    client_address text,
    delivery_date date,
    delivery_location text,
    delivery_instructions text,
    payment_terms varchar(100) DEFAULT '30 dias'::character varying,
    validity_period varchar(100) DEFAULT '30 dias'::character varying,
    discount_percentage numeric(5,2) DEFAULT 0,
    general_notes text,
    internal_notes text,
    subtotal numeric(12,2) DEFAULT 0 NOT NULL,
    profit_margin_percentage numeric(5,2) DEFAULT 30,
    profit_amount numeric(12,2) DEFAULT 0,
    tax_rate numeric(5,2) DEFAULT 23 NOT NULL,
    tax_amount numeric(12,2) DEFAULT 0,
    total_with_tax numeric(12,2) DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    created_by uuid,
    updated_by uuid,
    search_vector tsvector,
    ai_processed boolean DEFAULT false,
    ai_processing_data jsonb,
    at_portugal_text text,
    at_portugal_generated_at timestamp with time zone,
    CONSTRAINT transgrafica_quotes_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_quotes_quote_number_key UNIQUE (quote_number),
    CONSTRAINT transgrafica_quotes_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.transgrafica_clients(id),
    CONSTRAINT transgrafica_quotes_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id),
    CONSTRAINT transgrafica_quotes_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_quotes IS 'Orçamentos principais da plataforma';
COMMENT ON COLUMN public.transgrafica_quotes.status IS 'Status: EM ESPERA, EM PRODUÇÃO, APROVADO, ENVIADO, REJEITADO, CANCELADO';
COMMENT ON COLUMN public.transgrafica_quotes.ai_processed IS 'Indica se o orçamento foi processado com AI';

CREATE TABLE public.transgrafica_quote_works (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    quote_id uuid NOT NULL,
    code varchar(50),
    name varchar(255) NOT NULL,
    description text,
    format varchar(100),
    dimensions_width numeric(8,2),
    dimensions_height numeric(8,2),
    paper_type varchar(255),
    paper_weight numeric(8,2),
    print_type varchar(255),
    finish_type varchar(255),
    quantity integer DEFAULT 0 NOT NULL,
    ft_aberto varchar(100),
    ft_fechado varchar(100),
    notes text,
    technical_notes text,
    subtotal numeric(12,2) DEFAULT 0 NOT NULL,
    display_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    template_id uuid,
    ai_generated boolean DEFAULT false,
    ai_confidence_score numeric(3,2),
    CONSTRAINT transgrafica_quote_works_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_quote_works_quote_id_fkey FOREIGN KEY (quote_id) REFERENCES public.transgrafica_quotes(id) ON DELETE CASCADE,
    CONSTRAINT transgrafica_quote_works_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.transgrafica_work_templates(id)
);

COMMENT ON TABLE public.transgrafica_quote_works IS 'Trabalhos individuais dentro de um orçamento';
COMMENT ON COLUMN public.transgrafica_quote_works.ai_confidence_score IS 'Nível de confiança da extração AI (0.00 a 1.00)';

CREATE TABLE public.transgrafica_work_impositions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    work_id uuid NOT NULL,
    plate_width numeric(8,2) NOT NULL,
    plate_height numeric(8,2) NOT NULL,
    piece_width numeric(8,2) NOT NULL,
    piece_height numeric(8,2) NOT NULL,
    technical_margin numeric(5,2) DEFAULT 5.0,
    bleed_margin numeric(5,2) DEFAULT 3.0,
    pieces_per_width integer NOT NULL,
    pieces_per_height integer NOT NULL,
    total_pieces_per_plate integer NOT NULL,
    plates_needed integer NOT NULL,
    waste_percentage numeric(5,2) NOT NULL,
    rotation_applied boolean DEFAULT false,
    rotation_angle integer DEFAULT 0,
    print_side varchar(20) DEFAULT 'single'::character varying,
    color_mode varchar(20) DEFAULT '4c'::character varying,
    calculated_at timestamp with time zone DEFAULT now(),
    calculated_by uuid,
    visualization_data jsonb,
    custom_settings jsonb,
    CONSTRAINT transgrafica_work_impositions_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_work_impositions_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.transgrafica_quote_works(id) ON DELETE CASCADE,
    CONSTRAINT transgrafica_work_impositions_calculated_by_fkey FOREIGN KEY (calculated_by) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_work_impositions IS 'Cálculos matemáticos de imposição para cada trabalho';
COMMENT ON COLUMN public.transgrafica_work_impositions.waste_percentage IS 'Percentagem de desperdício de papel';

CREATE TABLE public.transgrafica_work_costs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    work_id uuid NOT NULL,
    name varchar(100) NOT NULL,
    category varchar(50) NOT NULL,
    description text,
    quantity numeric(10,2) DEFAULT 0,
    unit_cost numeric(10,2) DEFAULT 0,
    total_cost numeric(12,2) DEFAULT 0,
    is_automatic boolean DEFAULT true,
    is_editable boolean DEFAULT true,
    display_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    pricing_template_id uuid,
    metadata jsonb,
    CONSTRAINT transgrafica_work_costs_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_work_costs_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.transgrafica_quote_works(id) ON DELETE CASCADE,
    CONSTRAINT transgrafica_work_costs_pricing_template_id_fkey FOREIGN KEY (pricing_template_id) REFERENCES public.transgrafica_pricing_templates(id)
);

COMMENT ON TABLE public.transgrafica_work_costs IS 'Custos específicos para cada trabalho individual';
COMMENT ON COLUMN public.transgrafica_work_costs.category IS 'Categoria: material, labor, equipment, finishing';

CREATE TABLE public.transgrafica_quote_costs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    quote_id uuid NOT NULL,
    name varchar(100) NOT NULL,
    category varchar(50) NOT NULL,
    description text,
    quantity numeric(10,2) DEFAULT 0,
    unit_cost numeric(10,2) DEFAULT 0,
    total_cost numeric(12,2) DEFAULT 0,
    is_automatic boolean DEFAULT false,
    is_editable boolean DEFAULT true,
    display_order integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    CONSTRAINT transgrafica_quote_costs_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_quote_costs_quote_id_fkey FOREIGN KEY (quote_id) REFERENCES public.transgrafica_quotes(id) ON DELETE CASCADE
);

COMMENT ON TABLE public.transgrafica_quote_costs IS 'Custos globais aplicados ao orçamento inteiro';
COMMENT ON COLUMN public.transgrafica_quote_costs.category IS 'Categoria: transport, miscellaneous, setup';

CREATE TABLE public.transgrafica_audit_logs (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    table_name varchar(100) NOT NULL,
    record_id uuid NOT NULL,
    action varchar(20) NOT NULL,
    old_values jsonb,
    new_values jsonb,
    user_id uuid,
    ip_address inet,
    user_agent text,
    created_at timestamp with time zone DEFAULT now(),
    metadata jsonb,
    CONSTRAINT transgrafica_audit_logs_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_audit_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

COMMENT ON TABLE public.transgrafica_audit_logs IS 'Log de auditoria para todas as operações críticas';
COMMENT ON COLUMN public.transgrafica_audit_logs.action IS 'Ação: INSERT, UPDATE, DELETE';

CREATE TABLE public.transgrafica_ai_processing_logs (
    id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    status text NOT NULL,
    email_hash text NOT NULL,
    quote_id uuid,
    subject text,
    processing_time_ms integer NOT NULL,
    model text NOT NULL,
    confidence double precision,
    result jsonb,
    error_message text,
    issues text[],
    ip_address text,
    CONSTRAINT transgrafica_ai_processing_logs_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_ai_processing_logs_status_check CHECK (status = ANY (ARRAY['success'::text, 'error'::text]))
);

CREATE TABLE public.transgrafica_ai_processing_cache (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email_hash text NOT NULL,
    request_text text NOT NULL,
    raw_response jsonb,
    parsed_response jsonb,
    model text,
    prompt_version text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT transgrafica_ai_processing_cache_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_ai_processing_cache_email_hash_key UNIQUE (email_hash)
);

CREATE TABLE public.transgrafica_ai_processing_feedback (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    processing_id uuid NOT NULL,
    rating smallint NOT NULL,
    comments text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT transgrafica_ai_processing_feedback_pkey PRIMARY KEY (id),
    CONSTRAINT transgrafica_ai_processing_feedback_processing_id_fkey FOREIGN KEY (processing_id) REFERENCES public.transgrafica_ai_processing_logs(id) ON DELETE CASCADE,
    CONSTRAINT transgrafica_ai_processing_feedback_rating_check CHECK ((rating >= 1) AND (rating <= 5))
);

-- Indexes
CREATE INDEX ai_processing_cache_created_at_idx ON public.transgrafica_ai_processing_cache USING btree (created_at DESC);
CREATE INDEX ai_processing_logs_created_at_idx ON public.transgrafica_ai_processing_logs USING btree (created_at DESC);
CREATE INDEX ai_processing_logs_email_hash_idx ON public.transgrafica_ai_processing_logs USING btree (email_hash);
CREATE INDEX ai_processing_logs_quote_id_idx ON public.transgrafica_ai_processing_logs USING btree (quote_id);
CREATE UNIQUE INDEX ai_processing_feedback_processing_id_key ON public.transgrafica_ai_processing_feedback USING btree (processing_id);
CREATE INDEX idx_audit_logs_created_at ON public.transgrafica_audit_logs USING btree (created_at DESC);
CREATE INDEX idx_audit_logs_table_record ON public.transgrafica_audit_logs USING btree (table_name, record_id);
CREATE INDEX idx_audit_logs_user_id ON public.transgrafica_audit_logs USING btree (user_id);
CREATE INDEX idx_clientes_codigo ON public.transgrafica_clientes USING btree (codigo);
CREATE INDEX idx_clientes_contribuinte ON public.transgrafica_clientes USING btree (contribuinte);
CREATE INDEX idx_clientes_nome_1 ON public.transgrafica_clientes USING btree (nome_1);
CREATE INDEX idx_clientes_situacao ON public.transgrafica_clientes USING btree (situacao);
CREATE INDEX idx_clients_created_at ON public.transgrafica_clients USING btree (created_at DESC);
CREATE INDEX idx_clients_email ON public.transgrafica_clients USING btree (email);
CREATE INDEX idx_clients_nif ON public.transgrafica_clients USING btree (nif);
CREATE INDEX idx_clients_search_vector ON public.transgrafica_clients USING gin (search_vector);
CREATE INDEX idx_clients_status ON public.transgrafica_clients USING btree (status);
CREATE INDEX idx_pricing_templates_active ON public.transgrafica_pricing_templates USING btree (is_active);
CREATE INDEX idx_pricing_templates_valid ON public.transgrafica_pricing_templates USING btree (valid_from, valid_until);
CREATE INDEX idx_pricing_templates_work_type ON public.transgrafica_pricing_templates USING btree (work_type);
CREATE INDEX idx_quote_costs_category ON public.transgrafica_quote_costs USING btree (category);
CREATE INDEX idx_quote_costs_display_order ON public.transgrafica_quote_costs USING btree (quote_id, display_order);
CREATE INDEX idx_quote_costs_quote_id ON public.transgrafica_quote_costs USING btree (quote_id);
CREATE INDEX idx_quote_works_display_order ON public.transgrafica_quote_works USING btree (quote_id, display_order);
CREATE INDEX idx_quote_works_quote_id ON public.transgrafica_quote_works USING btree (quote_id);
CREATE INDEX idx_quote_works_template_id ON public.transgrafica_quote_works USING btree (template_id);
CREATE INDEX idx_transgrafica_quotes_client_id ON public.transgrafica_quotes USING btree (client_id);
CREATE INDEX idx_transgrafica_quotes_created_at ON public.transgrafica_quotes USING btree (created_at DESC);
CREATE INDEX idx_transgrafica_quotes_delivery_date ON public.transgrafica_quotes USING btree (delivery_date);
CREATE INDEX idx_transgrafica_quotes_quote_number ON public.transgrafica_quotes USING btree (quote_number);
CREATE INDEX idx_transgrafica_quotes_search_vector ON public.transgrafica_quotes USING gin (search_vector);
CREATE INDEX idx_transgrafica_quotes_status ON public.transgrafica_quotes USING btree (status);
CREATE INDEX idx_work_costs_category ON public.transgrafica_work_costs USING btree (category);
CREATE INDEX idx_work_costs_display_order ON public.transgrafica_work_costs USING btree (work_id, display_order);
CREATE INDEX idx_work_costs_work_id ON public.transgrafica_work_costs USING btree (work_id);
CREATE INDEX idx_work_impositions_calculated_at ON public.transgrafica_work_impositions USING btree (calculated_at DESC);
CREATE INDEX idx_work_impositions_work_id ON public.transgrafica_work_impositions USING btree (work_id);
CREATE INDEX idx_work_templates_active ON public.transgrafica_work_templates USING btree (is_active);
CREATE INDEX idx_work_templates_work_type ON public.transgrafica_work_templates USING btree (work_type);

-- Functions
CREATE OR REPLACE FUNCTION public.transgrafica_calculate_quote_totals(quote_uuid uuid)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
  works_subtotal DECIMAL(12, 2);
  costs_subtotal DECIMAL(12, 2);
  base_subtotal DECIMAL(12, 2);
  profit_amount DECIMAL(12, 2);
  tax_amount DECIMAL(12, 2);
  total_amount DECIMAL(12, 2);
  profit_margin DECIMAL(5, 2);
  tax_rate DECIMAL(5, 2);
BEGIN
  -- Calcular subtotal dos trabalhos
    SELECT COALESCE(SUM(subtotal), 0) INTO works_subtotal
    FROM public.transgrafica_quote_works WHERE quote_id = quote_uuid;
  
  -- Calcular subtotal dos custos globais
    SELECT COALESCE(SUM(total_cost), 0) INTO costs_subtotal
    FROM public.transgrafica_quote_costs WHERE quote_id = quote_uuid;
  
  -- Usar o maior dos dois como base
  base_subtotal := GREATEST(works_subtotal, costs_subtotal);
  
  -- Obter margem de lucro e taxa de IVA
    SELECT profit_margin_percentage, tax_rate 
    INTO profit_margin, tax_rate
    FROM public.transgrafica_quotes WHERE id = quote_uuid;
  
  -- Calcular lucro e IVA
  profit_amount := base_subtotal * (profit_margin / 100);
  tax_amount := (base_subtotal + profit_amount) * (tax_rate / 100);
  total_amount := base_subtotal + profit_amount + tax_amount;
  
  -- Atualizar o orçamento
    UPDATE public.transgrafica_quotes SET
    subtotal = base_subtotal,
    profit_amount = profit_amount,
    tax_amount = tax_amount,
    total_with_tax = total_amount,
    updated_at = NOW()
  WHERE id = quote_uuid;
END;
$function$;

CREATE OR REPLACE FUNCTION public.transgrafica_calculate_work_subtotal(work_uuid uuid)
 RETURNS void
 LANGUAGE plpgsql
AS $function$
DECLARE
  total DECIMAL(12, 2);
BEGIN
  -- Calcular soma de todos os custos do trabalho
    SELECT COALESCE(SUM(total_cost), 0) INTO total
    FROM public.transgrafica_work_costs WHERE work_id = work_uuid;
  
  -- Atualizar subtotal do trabalho
    UPDATE public.transgrafica_quote_works SET
    subtotal = total,
    updated_at = NOW()
  WHERE id = work_uuid;
END;
$function$;

CREATE OR REPLACE FUNCTION public.transgrafica_handle_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.transgrafica_update_client_search_vector()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('portuguese', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.company_name, '')), 'A') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.email, '')), 'B') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.nif, '')), 'B') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.notes, '')), 'C');
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.transgrafica_update_quote_search_vector()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('portuguese', COALESCE(NEW.quote_number, '')), 'A') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.client_name, '')), 'A') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.general_notes, '')), 'B') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.status, '')), 'C');
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.transgrafica_update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$;

-- Triggers
CREATE TRIGGER transgrafica_set_updated_at
BEFORE UPDATE ON public.transgrafica_clientes
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_handle_updated_at();

CREATE TRIGGER transgrafica_trigger_update_client_search_vector
BEFORE INSERT OR UPDATE ON public.transgrafica_clients
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_client_search_vector();

CREATE TRIGGER transgrafica_trigger_update_quote_search_vector
BEFORE INSERT OR UPDATE ON public.transgrafica_quotes
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_quote_search_vector();

CREATE TRIGGER transgrafica_update_ai_processing_cache_updated_at
BEFORE UPDATE ON public.transgrafica_ai_processing_cache
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_clients_updated_at
BEFORE UPDATE ON public.transgrafica_clients
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_pricing_templates_updated_at
BEFORE UPDATE ON public.transgrafica_pricing_templates
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_quote_costs_updated_at
BEFORE UPDATE ON public.transgrafica_quote_costs
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_quote_works_updated_at
BEFORE UPDATE ON public.transgrafica_quote_works
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_quotes_updated_at
BEFORE UPDATE ON public.transgrafica_quotes
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_work_costs_updated_at
BEFORE UPDATE ON public.transgrafica_work_costs
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

CREATE TRIGGER transgrafica_update_work_templates_updated_at
BEFORE UPDATE ON public.transgrafica_work_templates
FOR EACH ROW
EXECUTE FUNCTION public.transgrafica_update_updated_at_column();

-- Row level security
ALTER TABLE public.transgrafica_audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_view_audit_logs"
    ON public.transgrafica_audit_logs
    FOR SELECT
    TO authenticated
    USING (true);

ALTER TABLE public.transgrafica_clientes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_allow_authenticated_users_to_delete_clients"
    ON public.transgrafica_clientes
    FOR DELETE
    TO authenticated
    USING (true);

CREATE POLICY "transgrafica_allow_authenticated_users_to_insert_clients"
    ON public.transgrafica_clientes
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "transgrafica_allow_authenticated_users_to_read_clients"
    ON public.transgrafica_clientes
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "transgrafica_allow_authenticated_users_to_update_clients"
    ON public.transgrafica_clientes
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_clients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_clients"
    ON public.transgrafica_clients
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_pricing_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_pricing_templates"
    ON public.transgrafica_pricing_templates
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_quote_costs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_quote_costs"
    ON public.transgrafica_quote_costs
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_quote_works ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_quote_works"
    ON public.transgrafica_quote_works
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_quotes"
    ON public.transgrafica_quotes
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_work_costs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_work_costs"
    ON public.transgrafica_work_costs
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_work_impositions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_work_impositions"
    ON public.transgrafica_work_impositions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

ALTER TABLE public.transgrafica_work_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transgrafica_authenticated_users_full_access_work_templates"
    ON public.transgrafica_work_templates
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

COMMIT;
