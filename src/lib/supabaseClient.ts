// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kpjhgkkhamvvbowjwqwa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwamhna2toYW12dmJvd2p3cXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzODgxOTMsImV4cCI6MjA2NTk2NDE5M30.w5PHOrWKm39SdDQcpJ4mCKA1aFHvTu8HBN22sqbY0XI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
