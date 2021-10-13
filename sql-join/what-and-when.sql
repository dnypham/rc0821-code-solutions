SELECT "films"."releaseYear" AS "releaseYear",
       "films"."title"       AS "title",
       "categories"."name"   AS "name"
  FROM "films"
  JOIN "filmCategory" USING ("filmId")
  JOIN "categories" USING ("categoryId")
 WHERE "title" = 'Boogie Amelie';
