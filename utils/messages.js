const moment = require('moment-timezone');

function formatMessage(name, text) {
    return {
        name,
        text,
        // 'Asia/Seoul' 시간을 사용하여 시간을 설정 (필요에 따라 다른 시간대로 변경 가능)
        time: moment().tz('Asia/Seoul').format('h:mm a')
    };
}

module.exports = formatMessage;
