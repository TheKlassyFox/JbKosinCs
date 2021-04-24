const Common = require("./Common");

const TABLE_NAME = "Events";

function GetAllEvents(connection, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME};`, (err, rows) => callback(res, err, rows));
}

function GetEventByEventId(connection, params, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME} WHERE eventId = ${params.eventId};`, (err, rows) => callback(res, err, rows));
}

function GetEventsByName(connection, params, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME} WHERE name LIKE \"%${params.name}%\";`, (err, rows) => callback(res, err, rows)); 
}

function AddEvent(connection, body, res, callback)
{
    if (!("name" in body))
    {
        Common.ThrowError("대회 이름이 입력되지 않았습니다.", res, callback);
    }
    else if (!("dateStart" in body))
    {
        Common.ThrowError("대회 시작 날짜가 입력되지 않았습니다.", res, callback);
    }
    else if (!("dateEnd" in body))
    {
        Common.ThrowError("대회 종료 날짜가 입력되지 않았습니다.", res, callback);
    }
    else if (!(Common.IsValidString(body.name, 2, 255)))
    {
        Common.ThrowError("대회 이름의 양식이 잘못되었거나 길이가 너무 짧거나 너무 깁니다.", res, callback);
    }
    else if (!(Common.IsValidDate(body.dateStart)))
    {
        Common.ThrowError("대회 시작 날짜의 양식이 잘못되었습니다.", res, callback);
    }
    else if (!(Common.IsValidDate(body.dateEnd)))
    {
        Common.ThrowError("대회 종료 날짜의 양식이 잘못되었습니다.", res, callback);
    }
    else if (new Date(body.DateStart) > new Date(body.dateEnd))
    {
        Common.ThrowError("대회 시작 날짜는 대회 종료 날짜보다 클 수 없습니다.", res, callback);
    }
    else
    {
        connection.query(`INSERT INTO ${TABLE_NAME} (name, dateCreated, dateStart, dateEnd) VALUES (\"${body.name}\", \"${Common.GetCurrentTime()}\", \"${body.dateStart}\", \"${body.dateEnd}\");`, (err, rows) => callback(res, err, rows));
    }
}

module.exports =
{
    GetAllEvents: GetAllEvents,
    GetEventByEventId: GetEventByEventId,
    GetEventsByName: GetEventsByName,
    AddEvent: AddEvent
}