SELECT "customers"."firstName",
       "customers"."lastName",
       "films"."title" AS "filmTitle"
  FROM "customers"
  JOIN "rentals"   USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films"     USING ("filmId")
 WHERE "films"."title" = 'Magic Mallrats';
