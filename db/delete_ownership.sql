UPDATE vehicles
SET ownerid = NULL
WHERE id = $1 AND ownerid = $2
RETURNING *;
