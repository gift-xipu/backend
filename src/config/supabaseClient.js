
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsiygdkvkynpxnsuwkqq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzaXlnZGt2a3lucHhuc3V3a3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3NDA5MzMsImV4cCI6MjAwNjMxNjkzM30.OM1RBjNT_UBTXtd8ovE_o56_xRA7IRWH0TNM_5DM8F8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase