import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nyzgqznbgvgbdinhouqk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55emdxem5iZ3ZnYmRpbmhvdXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNzg2ODAsImV4cCI6MjAwNTg1NDY4MH0.DC7Kfz992zPsHsDPDavwNpFIDyPHmxnXzaDcrgwfxlE'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase