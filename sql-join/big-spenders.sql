SELECT "customers"."firstName",
       "customers"."lastName",
       "payments"."amount"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  ORDER BY "payments"."amount" desc
  LIMIT 10;
