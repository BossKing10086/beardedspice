//
//  PlexWeb.plist
//  BeardedSpice
//
//  Created by Ryan Sullivan on 8/20/15.
//  Copyright (c) 2015 BeardedSpice. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"Plex Web",
  accepts: {
    method: "script",
    script: function accepts () {return (window.PLEXWEB != undefined);}
  },
  isPlaying: function()  {
    var theButton = document.querySelector('.player.music .pause-btn');
    if (theButton)
      return !(theButton.classList.contains('hidden'));
    else
      return (document.querySelector('.video-player.playing') != undefined);
  },
  toggle: function ()  {
    var thePlayer = document.querySelector('.player.music') ? '.player.music' : '.video-player';
    var pauseButton = document.querySelector(thePlayer+' .pause-btn');
    var playerButton = document.querySelector(thePlayer+pauseButton)
    var classList = playerButton.classList;
    var listHasHidden = classList.contains('hidden');
    var toggleButton = document.querySelector((listHasHidden ? ' .play' : ' .pause') + '-btn');
    toggleButton.click();
  },
  next: function () {
    var thePlayer = document.querySelector('.player.music') ? '.player.music' : '.video-player';
    document.querySelector(thePlayer+' .next-btn').click()
  },
  previous: function () {
    var thePlayer = document.querySelector('.player.music') ? '.player.music' : '.video-player';
    document.querySelector(thePlayer+' .previous-btn').click()
  },
  pause: function () {
    var thePlayer = document.querySelector('.player.music') ? '.player.music' : '.video-player';
    document.querySelector(thePlayer+' .pause-btn').click()
  },
  trackInfo: function () {
    if (document.querySelector('.player.music')) {
      var mediaPoster = document.querySelector('.player.music .media-poster');
      return {
        'image': mediaPoster.getAttribute('data-image-url'),
        'track': mediaPoster.getAttribute('data-title'),
        'album': mediaPoster.getAttribute('data-image-title'),
        'artist': document.querySelector('.player.music  .grandparent-title').innerText,
        'favorited': (document.querySelector('.player.music .rating-container .user-rating') != undefined)
      }
    }
    return {}
  }
}
