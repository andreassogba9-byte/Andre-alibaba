// Configuration Supabase
const { createClient } = supabase;
const supabaseUrl = "https://kiebsjqdjnykpuhjehoh.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZWJzanFkam55a3B1aGplaG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNDE0NDEsImV4cCI6MjA3MzcxNzQ0MX0.RjGqRCp8eDn3QCUWushVdcRexdYdDKgsYQr3BQ3KyEI";

const supabase = createClient(supabaseUrl, supabaseKey);
