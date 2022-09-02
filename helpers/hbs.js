// HELPERS FILE

const moment = require('moment')

//Note: See Handlebars and Handlebars helpers in app.js - need to add these there. 

//using moment to format our date in a custom way. This is what we're exporting. 
module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    }, 

    // will need to add strip tags and truncate in the body of index.hbs
    // To help format the cards so they check the length of the string and truncate it by creating a new substring
    truncate: function (str, len){
        if (str.length > len && str.length > 0){
            let new_str = str + ' ' 
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...' //concatinating here to show there is more
        }
        return str //returning the result 
    },
    // to get rid of the html tags (like the <p> in stories)
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '') //regex - replace all this stuff with nothing, take it out. Looks for anything with < > and replaces it with nothing.
    },
    // for icons - remember in app.js handlebars + handlebars helpers
    editIcon: function (storyUser, loggedUser, storyId, floating = true) { //storyUser = who wrote it, loggedUser = who is logged in, storyId = which story, floating = floating icon from materialze so it's a materialize class (or font awesome)
        if (storyUser._id.toString() == loggedUser._id.toString()) { //checking the storyUser vs logged in user ID by converting it to a string
          if (floating) {
            return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>` // if user wrote the story they get the edit button
          } else {
            return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>` // not the user who wrote the story? No edit button. 
          }
        } else {
          return ''
        }
},
// copy pasted from stack-overflow 
select: function (selected, options) {
  return options
    .fn(this)
    .replace(
      new RegExp(' value="' + selected + '"'),
      '$& selected="selected"'
    )
    .replace(
      new RegExp('>' + selected + '</option>'),
      ' selected="selected"$&'
    )
},
}