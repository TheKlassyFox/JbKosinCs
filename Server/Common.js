const Moment = require("moment");

function IsValidString(object, minLength, maxLength)
{
    return typeof(object) === "string" && object.length >= minLength && object.length <= maxLength;
}

function IsValidDate(object)
{
    return typeof(object) === "string" && Moment(object, "YYYY-MM-DDTHH:mm:ss", true).isValid();
}

function IsValidInt(object, min = -999999, max = 999999)
{
    return !isNaN(object) && Number.isInteger(parseFloat(object)) && parseInt(object) >= min && parseInt(object) <= max;
}

function ThrowError(message, res, callback)
{
    callback(res, { message: message });
}

function GetCurrentTime()
{
    return new Date().toISOString().split(".")[0];
}

module.exports =
{
    GetCurrentTime: GetCurrentTime,
    ThrowError: ThrowError,
    IsValidString: IsValidString,
    IsValidDate: IsValidDate,
    IsValidInt: IsValidInt
}