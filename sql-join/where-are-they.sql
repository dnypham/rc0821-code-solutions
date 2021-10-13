SELECT "addresses"."line1" as "line1",
       "addresses"."district" as "district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  FROM "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId");
