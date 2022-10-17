CREATE TABLE "users"
(
    "id"            serial  NOT NULL,
    "name"          text    NOT NULL,
    "mail"          text    NOT NULL,
    "birth_date"    DATE    NOT NULL,
    "password"      text    NOT NULL,
    PRIMARY KEY("id"),
    UNIQUE ("name","mail")
);

CREATE TABLE "status"
(
    "id"            serial  NOT NULL,
    "definition"    text    NOT NULL,
    "designation"   text    NOT NULL,
    PRIMARY("id"),
    UNIQUE ("def","designation")
);

CREATE TABLE "type"
(
    "id"            serial  NOT NULL,
    "definition"    text    NOT NULL,
    "designation"   text    NOT NULL,
    
    UNIQUE ("def","designation")
);

CREATE TABLE "categories"
(
    "id"            serial  NOT NULL,
    "definition"    text    NOT NULL,
    "designation"   text    NOT NULL,
    PRIMARY("id"),
    UNIQUE ("def","designation")
);

CREATE TABLE "media"
(
    "id"                    serial  NOT NULL,
    "fk_type"               integer NOT NULL, 
    "title"                 text    NOT NULL,
    "season_volume"         text    NOT NULL,
    "fk_category"           text    NOT NULL,
    "year"                  integer NOT NULL,
    "author_director"       text,
    "nb_episodes_chapters"  integer,
    "score"                 real,  
    PRIMARY("id"),
    UNIQUE ("title","type","year","season_volume")
);

CREATE TABLE "userMedia"
(
    "id"            serial      NOT NULL,
    "fk_iduser"     integer     NOT NULL,
    "fk_idmedia"     integer     NOT NULL,
    "fk_status"     integer     NOT NULL,
    "hd_creation"   date        DEFAULT Now(),
    "active"        boolean     DEFAULT TRUE,
    PRIMARY("id"),
    UNIQUE("fk_iduser","fk_idmedia","hd_creation")
);

ALTER TABLE "media" ADD FOREIGN KEY ("fk_type") REFERENCES "type"("id");

ALTER TABLE "media" ADD FOREIGN KEY ("fk_category") REFERENCES "category"("id");

ALTER TABLE "userMedia" ADD FOREIGN KEY ("fk_iduser") REFERENCES "user"("id");

ALTER TABLE "userMedia" ADD FOREIGN KEY ("fk_idmedia") REFERENCES "media"("id");

ALTER TABLE "userMedia" ADD FOREIGN KEY ("fk_status") REFERENCES "status"("id");
