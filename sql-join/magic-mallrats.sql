SELECT "customers"."firstName" AS "firstName",
       "customers"."lastName"  AS "lastName",
       "films"."title"       AS "title"
  FROM "customers"
  JOIN "rentals"   USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films"     USING ("filmId")
 WHERE "title" = 'Magic Mallrats';
