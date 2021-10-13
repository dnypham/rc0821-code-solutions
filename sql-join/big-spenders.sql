SELECT "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName",
       "payments"."amount" as "amount"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  ORDER BY "payments"."amount" desc
  LIMIT 10;
