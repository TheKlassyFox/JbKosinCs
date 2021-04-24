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