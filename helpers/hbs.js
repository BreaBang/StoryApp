const moment = require('moment')

//using moment to format our date in a custom way. This is what we're exporting. 
module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
}