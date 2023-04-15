-- CreateTable
CREATE TABLE "rent_movies" (
    "id" SERIAL NOT NULL,
    "externalId" INTEGER NOT NULL,
    "rentalExpiration" TIMESTAMP NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "rent_movies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rent_movies" ADD CONSTRAINT "rent_movies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
