-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Regions" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    CONSTRAINT "pk_Regions" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Categories" (
    "ID" int   NOT NULL,
    CONSTRAINT "pk_Categories" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Posts" (
    "ID" int   NOT NULL,
    "Title" string   NOT NULL,
    "Text" string   NOT NULL,
    "Location" string   NOT NULL,
    "User_id" int   NOT NULL,
    "Region_id" int   NOT NULL,
    "Category_id" int   NOT NULL,
    CONSTRAINT "pk_Posts" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Users" (
    "ID" int   NOT NULL,
    "Username" string   NOT NULL,
    "encrypted_password" string   NOT NULL,
    "preferred_region_id" int   NOT NULL,
    CONSTRAINT "pk_Users" PRIMARY KEY (
        "ID"
     ),
    CONSTRAINT "uc_Users_Username" UNIQUE (
        "Username"
    )
);

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_User_id" FOREIGN KEY("User_id")
REFERENCES "Users" ("ID");

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_Region_id" FOREIGN KEY("Region_id")
REFERENCES "Regions" ("ID");

ALTER TABLE "Posts" ADD CONSTRAINT "fk_Posts_Category_id" FOREIGN KEY("Category_id")
REFERENCES "Categories" ("ID");

