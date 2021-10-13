SELECT "actors"."firstName",
       "actors"."lastName",
       "films"."title" AS "filmTitle"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films"       USING ("filmId")
 WHERE "films"."title" = 'Jersey Sassy';
