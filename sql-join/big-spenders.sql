SELECT "customers"."firstName" AS "firstName",
       "customers"."lastName"  AS "lastName",
       "payments"."amount"     AS "amount"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  ORDER BY "payments"."amount" desc
  LIMIT 10;
