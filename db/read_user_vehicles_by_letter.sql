-- SELECT * FROM vehicles
-- WHERE ownerid=(
--   SELECT id FROM users
--   WHERE firstname LIKE $1 + "%"
-- )
SELECT * FROM vehicles
INNER JOIN users
ON vehicles.ownerid = users.id
WHERE users.firstname LIKE $1
