SELECT "countries"."name"     AS "country",
         count("cities"."name") AS "totalCities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
GROUP BY "countries"."name";
