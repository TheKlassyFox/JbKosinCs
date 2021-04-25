const Common = require("../Common");

const TABLE_NAME = "Participants";

function GetAllParticipants(connection, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME};`, (err, rows) => callback(res, err, rows));
}

function GetParticipantByParticipantId(connection, params, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME} WHERE participantId = ${params.participantId};`, (err, rows) => callback(res, err, rows));
}

function GetParticipantsByName(connection, params, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME} WHERE name LIKE \"%${params.name}%\";`, (err, rows) => callback(res, err, rows)); 
}

function GetParticipantsByChurch(connection, params, res, callback)
{
    connection.query(`SELECT * FROM ${TABLE_NAME} WHERE church LIKE \"%${params.church}%\";`, (err, rows) => callback(res, err, rows));
}

function AddParticipant(connection, body, res, callback)
{
    if (!("eventId" in body))
    {
        Common.ThrowError("참가 대회가 입력되지 않았습니다.", res, callback);
    }
    else if (!("name" in body))
    {
        Common.ThrowError("이름이 입력되지 않았습니다.", res, callback);
    }
    else if (!("church" in body))
    {
        Common.ThrowError("교회가 입력되지 않았습니다.", res, callback);
    }
    else if (!("submissionImage" in body))
    {
        Common.ThrowError("제출 이미지가 입력되지 않았습니다.", res, callback);
    }
    else if (!(Common.IsValidInt(body.eventId)))
    {
        Common.ThrowError("참가 대회의 양식이 잘못되었습니다.", res, callback);
    }
    else if (!(Common.IsValidString(body.name, 2, 255)))
    {
        Common.ThrowError("이름의 양식이 잘못되었거나 길이가 너무 짧거나 너무 깁니다.", res, callback);
    }
    else if (!(Common.IsValidString(body.church, 2, 255)))
    {
        Common.ThrowError("교회의 양식이 잘못되었거나 길이가 너무 짧거나 너무 깁니다.", res, callback);
    }
    else if (!(Common.IsValidString(body.submissionImage, 10, 1023)))
    {
        Common.ThrowError("제출 이미지의 양식이 잘못되었거나 길이가 너무 짧거나 너무 깁니다.", res, callback);
    }
    else
    {
        connection.query(`INSERT INTO ${TABLE_NAME} (eventId, name, dateCreated, church, submissionImage, score) VALUES (${body.eventId}, \"${body.name}\", \"${Common.GetCurrentTime()}\", \"${body.church}\", \"${body.submissionImage}\", 0);`, (err, rows) => callback(res, err, rows));
    }
}

function ScoreParticipant(connection, params, body, res, callback)
{
    if (!("participantId" in params))
    {
        Common.ThrowError("참가자 ID가 입력되지 않았습니다.", res, callback);
    }
    else if (!("score" in body))
    {
        Common.ThrowError("점수가 입력되지 않았습니다.", res, callback);
    }
    else if (!(Common.IsValidInt(params.participantId)))
    {
        Common.ThrowError("참가 대회의 양식이 잘못되었습니다.", res, callback);
    }
    else if (!(Common.IsValidInt(body.score)))
    {
        Common.ThrowError("점수의 양식이 잘못되었습니다.", res, callback);
    }
    else if (!(Common.IsValidInt(body.score, 0, 100)))
    {
        Common.ThrowError("점수는 0보다 작거나 100보다 클 수 없습니다.", res, callback);
    }
    else
    {
        connection.query(`UPDATE ${TABLE_NAME} SET score = ${body.score} WHERE participantId = ${params.participantId}`, (err, rows) => callback(res, err, rows));
    }
}

module.exports =
{
    GetAllParticipants: GetAllParticipants,
    GetParticipantByParticipantId: GetParticipantByParticipantId,
    GetParticipantsByName: GetParticipantsByName,
    GetParticipantsByChurch: GetParticipantsByChurch,
    AddParticipant: AddParticipant,
    ScoreParticipant: ScoreParticipant
}