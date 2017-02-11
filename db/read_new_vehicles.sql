SELECT vehicles.make, vehicles.model, vehicles.year, users.firstname, users.lastname
FROM vehicles
INNER JOIN users
ON vehicles.ownerid = users.id
WHERE vehicles.year > 2000
ORDER BY year DESC
