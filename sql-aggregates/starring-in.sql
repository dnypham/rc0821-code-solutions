SELECT "categories"."name"        AS "category",
       count("categories"."name") AS "totalFilms"
  FROM "actors"
  JOIN "castMembers"  USING ("actorId")
  JOIN "filmCategory" USING ("filmId")
  JOIN "categories"   USING ("categoryId")
 WHERE "actors"."firstName" = 'Lisa'
   AND "actors"."lastName"  = 'Monroe'
GROUP BY "categories"."name";
