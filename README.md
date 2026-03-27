# rada
1.landing page 
sign up
verification
complete profile 
dashboard


docker exec -it supabase_db_rada psql -U postgres -d postgres -c "UPDATE auth.users SET email_confirmed_at = NOW(), last_sign_in_at = NOW() WHERE email = 'YOUR_EMAIL_HERE';"