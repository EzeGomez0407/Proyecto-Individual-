require("dotenv").config();
const { createClient } = require('@supabase/supabase-js')
const { DB_URL, DB_SERVICEROLE_KEY } = process.env;

module.exports= {supabase: createClient(DB_URL, DB_SERVICEROLE_KEY)}