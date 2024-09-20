const moment = require('moment');

function formatMessage(name, text) {
    return {
        name,
        text,
        time: moment.utc().format('h:mm a')  // UTC 시간으로 설정
    };
}

module.exports = formatMessage;
