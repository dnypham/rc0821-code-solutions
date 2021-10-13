SELECT "films"."releaseYear" as "releaseYear",
       "films"."title" as "title",
       "categories"."name" as "name"
  FROM "films"
  JOIN "filmCategory" USING ("filmId")
  JOIN "categories" USING ("categoryId")
 WHERE "title" = 'Boogie Amelie';
