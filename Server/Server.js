const Express = require("express");
const BodyParser = require("body-parser");
const Cors = require("cors");
const MySql = require("mysql");
const Multer = require("multer");
const FileSystem = require("fs");
const { promisify } = require("util");
const Pipeline = promisify(require("stream").pipeline);
const Common = require("./Common");
const Event = require("./Controllers/Event");
const Participant = require("./Controllers/Participant");
const { pipeline } = require("stream");

const SERVER_PORT = 5000;
const FILE_STORAGE_PATH = `${__dirname}/../Database/Images`;
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 3306;
const DATABASE_NAME = "JbKosinCs";
const DATABASE_USER = "root";
const DATABASE_PASSWORD = "qazxsw18926A!@";

const app = Express();
app.use(BodyParser.json());
app.use(Cors());
app.use("/Results", Express.static(__dirname + "/Results"));

const connection = MySql.createConnection({ host: DATABASE_HOST, port: DATABASE_PORT, database: DATABASE_NAME, user: DATABASE_USER, password: DATABASE_PASSWORD, dateStrings: true });
connection.connect();

const multer = Multer();

const connectDummy = () =>
{
    console.log(`${Common.GetCurrentTime()} Pinging DB`);
    connection.query(`SELECT 1`, (error, rows) =>
    {
        if (error)
        {
            console.error(error);
        }
    });
}

const sendPingDB = () =>
{
    connectDummy();
    setInterval(connectDummy, 600000);
}

sendPingDB();

function Error(err, res)
{
    console.error(`${Common.GetCurrentTime()} ERROR: ${err.message}\n`);
    res.status(500).json({ message: err.message });
}

function BadRequest(err, res)
{
    console.error(`${Common.GetCurrentTime()} Bad Request: ${err.message}\n`);
    res.status(400).json({ message: err.message });
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
    console.log(`${Common.GetCurrentTime()} Created: ${result.insertId}\n`);
    res.status(201).json(result);
}

function Uploaded(res, result)
{
    console.log(`${Common.GetCurrentTime()} Uploaded: ${result.fileName}\n`);
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
        BadRequest(err, res);
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
        BadRequest(err, res);
    }
    else
    {
        OK(res, rows);
    }
}

app.get("/get/events", (req, res) => Event.GetAllEvents(connection, res, ReadManyOrNull));
app.get("/get/events/eventId/:eventId", (req, res) => Event.GetEventByEventId(connection, req.params, res, ReadOneOrNull));
app.get("/get/events/name/:name", (req, res) => Event.GetEventsByName(connection, req.params, res, ReadManyOrNull));
app.get("/get/events/available", (req, res) => Event.GetAvailableEvents(connection, res, ReadManyOrNull));
app.get("/get/events/ended", (req, res) => Event.GetEndedEvents(connection, res, ReadManyOrNull));

app.get("/get/participants", (req, res) => Participant.GetAllParticipants(connection, res, ReadManyOrNull));
app.get("/get/participants/participantId/:participantId", (req, res) => Participant.GetParticipantByParticipantId(connection, req.params, res, ReadOneOrNull));
app.get("/get/participants/name/:name", (req, res) => Participant.GetParticipantsByName(connection, req.params, res, ReadManyOrNull));
app.get("/get/participants/church/:church", (req, res) => Participant.GetParticipantsByChurch(connection, req.params, res, ReadManyOrNull));

app.post("/add/events", (req, res) => Event.AddEvent(connection, req.body, res, Create));

app.post("/add/participants", multer.single("image"), async (req, res) =>
{
    if (!("file" in req) || req.file === undefined || req.file === null)
    {
        BadRequest({message: "이미지가 없습니다."}, res);
    }
    else if (!("file" in req) || !req.file.detectedMimeType || !req.file.detectedFileExtension || (!req.file.detectedMimeType.includes("image")) || (!(req.file.clientReportedMimeType.includes("image"))))
    {
        BadRequest({ message: "올바르지 않은 이미지 타입입니다." }, res);
    }
    else
    {
        var folderName = "Unknown";

        if (req.body.eventId)
        {
            switch (req.body.eventId.toString())
            {
                case "1":
                    folderName = "글짓기1학년";
                    break;
                case "2":
                    folderName = "글짓기2학년";
                    break;
                case "3":
                    folderName = "글짓기3학년";
                    break;
                case "4":
                    folderName = "글짓기4학년";
                    break;
                case "5":
                    folderName = "글짓기5학년";
                    break;
                case "6":
                    folderName = "글짓기6학년";
                    break;
                case "7":
                    folderName = "그리기유치부";
                    break;
                case "8":
                    folderName = "그리기1학년";
                    break;
                case "9":
                    folderName = "그리기2학년";
                    break;
                case "10":
                    folderName = "그리기3학년";
                    break;
                case "11":
                    folderName = "그리기4학년";
                    break;
                case "12":
                    folderName = "그리기5학년";
                    break;
                case "13":
                    folderName = "그리기6학년";
                    break;
                default:
                    break;
            }
        }

        const realFolderName = `./Images/${folderName}`;
        const backupFolderName = `./BackupImages/${folderName}`;

        const fileName = `${req.body.name}-${Math.floor(Math.random() * 10000000)}${req.file.detectedFileExtension}`;

        if (!FileSystem.existsSync(realFolderName))
        {
            FileSystem.mkdirSync(realFolderName, {recursive: true});
        }

        if (!FileSystem.existsSync(backupFolderName))
        {
            FileSystem.mkdirSync(backupFolderName, {recursive: true});
        }

        await Pipeline(req.file.stream, FileSystem.createWriteStream(`${realFolderName}/${fileName}`)).catch(err => { Error({message: "파일을 업로드 할 수 없었습니다. (E0)" + err.message}, res); return; });
        await Pipeline(req.file.stream, FileSystem.createWriteStream(`${backupFolderName}/${fileName}`)).catch(err => { Error({message: "파일을 업로드 할 수 없었습니다. (E1)" + err.message}, res); return; });

        req.body["submissionImage"] = fileName;
        console.log("file created: " + `${realFolderName}/${fileName}`);
        FileSystem.closeSync;
        Participant.AddParticipant(connection, req.body, res, Create);
    }  
});

app.put("/score/participants/participantId/:participantId", (req, res) => Participant.ScoreParticipant(connection, req.params, req.body, res, Update));

app.listen(SERVER_PORT, () => console.log(`JbKosinCs backend is running at https://localhost:${SERVER_PORT}\n`));