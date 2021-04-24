const Express = require("express");
const BodyParser = require("body-parser");
const MySql = require("mysql");
const Common = require("./Common");
const Event = require("./Event");
const Participant = require("./Participant");

const SERVER_PORT = 5000;
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 3306;
const DATABASE_NAME = "JbKosinCs";
const DATABASE_USER = "root";
const DATABASE_PASSWORD = "qazxsw18926A!@";

const app = Express();
app.use(BodyParser.json());

const connection = MySql.createConnection({ host: DATABASE_HOST, port: DATABASE_PORT, database: DATABASE_NAME, user: DATABASE_USER, password: DATABASE_PASSWORD, dateStrings: true });
connection.connect();

function Error(err, res)
{
    console.error(`${Common.GetCurrentTime()} ERROR: ${err.message}\n`);
    res.status(500).json({ message: err.message });
}

function NotFound(res)
{
    res.status(404).send();
}

function OK(res, result)
{
    res.status(200).json(result);
}

function Created(res, result)
{
    console.log(`${Common.GetCurrentTime()} Created: ${result.id}\n`);
    res.status(201).json(result);
}

function ReadOneOrNull(res, err, rows)
{
    if (err)
    {
        Error(err, res);
    }
    else if (rows.length === 0)
    {
        NotFound(res);
    }
    else
    {
        OK(res, rows[0]);
    }
}

function ReadManyOrNull(res, err, rows)
{
    if (err)
    {
        Error(err, res);
    }
    else if (rows.length === 0)
    {
        NotFound(res);
    }
    else
    {
        OK(res, rows);
    }
}

function Create(res, err, rows)
{
    if (err)
    {
        Error(err, res);
    }
    else
    {
        Created(res, rows);
    }
}

function Update(res, err, rows)
{
    if (err)
    {
        Error(err, res);
    }
    else
    {
        OK(res, rows);
    }
}

app.get("/get/events", (req, res) => Event.GetAllEvents(connection, res, ReadManyOrNull));
app.get("/get/events/eventId/:eventId", (req, res) => Event.GetEventByEventId(connection, req.params, res, ReadOneOrNull));
app.get("/get/events/name/:name", (req, res) => Event.GetEventsByName(connection, req.params, res, ReadManyOrNull));

app.get("/get/participants", (req, res) => Participant.GetAllParticipants(connection, res, ReadManyOrNull));
app.get("/get/participants/participantId/:participantId", (req, res) => Participant.GetParticipantByParticipantId(connection, req.params, res, ReadOneOrNull));
app.get("/get/participants/name/:name", (req, res) => Participant.GetParticipantsByName(connection, req.params, res, ReadManyOrNull));
app.get("/get/participants/church/:church", (req, res) => Participant.GetParticipantsByChurch(connection, req.params, res, ReadManyOrNull));

app.post("/add/events", (req, res) => Event.AddEvent(connection, req.body, res, Create));

app.post("/add/participants", (req, res) => Participant.AddParticipant(connection, req.body, res, Create));

app.put("/score/participants/participantId/:participantId", (req, res) => Participant.ScoreParticipant(connection, req.params, req.body, res, Update));

app.listen(SERVER_PORT, () => console.log(`JbKosinCs backend is running at https://localhost:${SERVER_PORT}\n`));