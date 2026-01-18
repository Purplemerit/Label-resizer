<<<<<<< HEAD
-- Check actual table structures
SELECT 'templates' as table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'templates'
UNION ALL
SELECT 'printers' as table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'printers'
UNION ALL
SELECT 'batch_jobs' as table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'batch_jobs'
UNION ALL
SELECT 'print_history' as table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'print_history'
ORDER BY table_name, column_name;
=======
-- Check actual columns in batch_jobs table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'batch_jobs'
ORDER BY ordinal_position;
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
