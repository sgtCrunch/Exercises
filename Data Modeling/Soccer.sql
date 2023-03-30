-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Leagues" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "Season_start" timeDate   NOT NULL,
    "Season_end" timeDate   NOT NULL,
    CONSTRAINT "pk_Leagues" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Teams" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "League_id" int   NOT NULL,
    "Ranking" int   NOT NULL,
    CONSTRAINT "pk_Teams" PRIMARY KEY (
        "ID"
     ),
    CONSTRAINT "uc_Teams_Ranking" UNIQUE (
        "Ranking"
    )
);

CREATE TABLE "Players" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    "Number" int   NOT NULL,
    "Team_id" int   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Referees" (
    "ID" int   NOT NULL,
    "Name" string   NOT NULL,
    CONSTRAINT "pk_Referees" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Goals" (
    "ID" int   NOT NULL,
    "Game_id" int   NOT NULL,
    "Player_id" int   NOT NULL,
    "Time" timeDate   NOT NULL,
    CONSTRAINT "pk_Goals" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Matches" (
    "ID" int   NOT NULL,
    "Start_time" timeDate   NOT NULL,
    "Home_team_id" int   NOT NULL,
    "Away_team_id" int   NOT NULL,
    "Location" string   NOT NULL,
    "League_id" int   NOT NULL,
    "Lead_referee_id" int   NOT NULL,
    "Result" string   NOT NULL,
    CONSTRAINT "pk_Matches" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Teams" ADD CONSTRAINT "fk_Teams_League_id" FOREIGN KEY("League_id")
REFERENCES "Leagues" ("ID");

ALTER TABLE "Players" ADD CONSTRAINT "fk_Players_Team_id" FOREIGN KEY("Team_id")
REFERENCES "Teams" ("ID");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_Game_id" FOREIGN KEY("Game_id")
REFERENCES "Matches" ("ID");

ALTER TABLE "Goals" ADD CONSTRAINT "fk_Goals_Player_id" FOREIGN KEY("Player_id")
REFERENCES "Players" ("ID");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_Home_team_id" FOREIGN KEY("Home_team_id")
REFERENCES "Teams" ("ID");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_Away_team_id" FOREIGN KEY("Away_team_id")
REFERENCES "Teams" ("ID");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_League_id" FOREIGN KEY("League_id")
REFERENCES "Leagues" ("ID");

ALTER TABLE "Matches" ADD CONSTRAINT "fk_Matches_Lead_referee_id" FOREIGN KEY("Lead_referee_id")
REFERENCES "Referees" ("ID");

