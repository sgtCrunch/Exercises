-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "MedicalCenters" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "Address" string   NOT NULL,
    CONSTRAINT "pk_MedicalCenters" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Doctors" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "Category" string   NOT NULL,
    "Center_ID" int   NOT NULL,
    CONSTRAINT "pk_Doctors" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Patients" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "DOB" dateTime   NOT NULL,
    "Insurance" string   NOT NULL,
    CONSTRAINT "pk_Patients" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Visits" (
    "ID" int   NOT NULL,
    "doctor_id" int   NOT NULL,
    "patient_id" int   NOT NULL,
    "date" dateTime   NOT NULL,
    CONSTRAINT "pk_Visits" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Diseases" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "Description" string   NOT NULL,
    CONSTRAINT "pk_Diseases" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Diagnoses" (
    "ID" int   NOT NULL,
    "Visit_id" int   NOT NULL,
    "Disease_id" int   NOT NULL,
    "Notes" string   NOT NULL,
    CONSTRAINT "pk_Diagnoses" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Doctors" ADD CONSTRAINT "fk_Doctors_Center_ID" FOREIGN KEY("Center_ID")
REFERENCES "MedicalCenters" ("ID");

ALTER TABLE "Visits" ADD CONSTRAINT "fk_Visits_doctor_id" FOREIGN KEY("doctor_id")
REFERENCES "Doctors" ("ID");

ALTER TABLE "Visits" ADD CONSTRAINT "fk_Visits_patient_id" FOREIGN KEY("patient_id")
REFERENCES "Patients" ("ID");

ALTER TABLE "Diagnoses" ADD CONSTRAINT "fk_Diagnoses_Visit_id" FOREIGN KEY("Visit_id")
REFERENCES "Visits" ("ID");

ALTER TABLE "Diagnoses" ADD CONSTRAINT "fk_Diagnoses_Disease_id" FOREIGN KEY("Disease_id")
REFERENCES "Diseases" ("ID");

