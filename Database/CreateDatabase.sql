CREATE DATABASE JbKosinCs;

USE JbKosinCs;

CREATE TABLE Events
(
    eventId             INT                 NOT NULL UNIQUE AUTO_INCREMENT,
    name                VARCHAR(255)        NOT NULL UNIQUE,
    dateCreated         DATETIME            NOT NULL,
    dateStart           DATETIME            NOT NULL,
    dateEnd             DATETIME            NOT NULL,
    PRIMARY KEY (eventId)
);

CREATE TABLE Participants
(
    participantId       INT                 NOT NULL UNIQUE AUTO_INCREMENT,
    eventId             INT                 NOT NULL,
    name                VARCHAR(255)        NOT NULL,
    dateCreated         DATETIME            NOT NULL,
    church              VARCHAR(255)        NOT NULL,
    submissionImage     VARCHAR(1023)        NOT NULL UNIQUE,
    score               INT                 NOT NULL,
    PRIMARY KEY (participantId),
    FOREIGN KEY (eventId) REFERENCES Events(eventId)
);

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 1학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 2학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 3학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 4학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 5학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("글짓기 - 6학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 유치부", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 1학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 2학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 3학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 4학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 5학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");

INSERT INTO Events (name, dateCreated, dateStart, dateEnd) VALUES
("그리기 - 6학년", NOW(), "2021-04-15T08:00:00", "2021-05-17T00:00:00");