SELECT "films"."releaseYear",
       "films"."title",
       "categories"."name" AS "category"
  FROM "films"
  JOIN "filmCategory" USING ("filmId")
  JOIN "categories"   USING ("categoryId")
 WHERE "films"."title" = 'Boogie Amelie';
