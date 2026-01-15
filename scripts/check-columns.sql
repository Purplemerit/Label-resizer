-- Check actual columns in batch_jobs table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'batch_jobs'
ORDER BY ordinal_position;
