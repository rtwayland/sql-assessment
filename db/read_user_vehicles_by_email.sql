-- SELECT * FROM vehicles
-- WHERE ownerid=(
--   SELECT id FROM users
--   WHERE email = $1
-- )
SELECT * FROM vehicles
INNER JOIN users
ON vehicles.ownerid = users.id
WHERE users.email = $1
