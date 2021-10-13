SELECT "customers"."firstName"  AS "firstName",
       "customers"."lastName"   AS "lastName",
       sum("payments"."amount") AS "totalPaid"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY "customerId"
  ORDER BY "totalPaid" desc;
