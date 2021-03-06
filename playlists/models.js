'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const playlistSchema = mongoose.Schema({
  userID: {type: String, required: true},
  title: {type: String, required: true},  
  content: [{
    songId: {type: String},
    songTitle: {type: String},
    songArtist: {type: String},
    songAlbum: {type: String},
    releaseDate: {type: Date},
    duration: {type: Number},
    thumbnail: {type: String},
    explicit: {type: Boolean},
    preview: {type: String},
    popularity: {type: Number}    
  }],
  created: {type: Date, default: Date.now, required: true}
});

playlistSchema.methods.serialize = function() {
  return {
    userID: this.userID,
    id: this._id,        
    email: this.email,
    content: this.content,
    title: this.title,
    created: this.created.toDateString()
  };
};

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = {Playlist};