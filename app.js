(function() {
  // everything goes in here

  var app = angular.module('clara', []);

  app.controller('DirectoryController', function() {
    this.links = sites;
  });

  app.controller('ClickController', function() {
    this.clicked = 0;

    this.equals = function(testId) {
      value = (this.clicked === testId);
      console.log("CHECKING?" + value);
      console.log(this.clicked);
      return value;
    };

    this.setClick = function(newId) {
      console.log("setting " + newId);
      this.clicked = newId;
    };
  });

  var sites = [{
    id: 0,
    name: 'Feminist Taylor Swift',
    description: 'Taylor Swift lyrics with a feminist twist.',
    date: 'June 2013',
    press: [],
    images: ["images/taylor.png"],
    url: 'http://www.twitter.com/feministtswift'
  }, {
    id: 1,
    name: 'Hang @ Brown',
    description: 'Social app to help Brown students find someone to eat lunch with. Project 1 for WDI',
    date: 'June 2014',
    press: [],
    images: ["images/hang_brown.png"],
    url: 'http://hang-at-brown.herokuapp.com'
  }, {
    id: 2,
    name: 'Just Duet',
    description: 'App that matches you with potential dates based on shared taste in music. Project 2 for WDI',
    date: 'July 2014',
    press: [],
    images: [],
    url: 'http://just-duet.herokuapp.com'
  }, {
    id: 3,
    name: 'Operation: Doodle',
    description: 'Blind drawing game with a social element',
    date: 'August 2014',
    press: [],
    images: ["images/operationdoodle.png"],
    url: 'http://operation-doodle.herokuapp.com'
  }, {
    id: 4,
    name: 'That Girl Magazine',
    description: 'A blog for college girls who unabashedly have opinions about things',
    date: 'December 2011',
    press: [],
    images: ["images/thatgirlmag.png"],
    url: 'http://www.thatgirlmag.com'
  }, {
    id: 5,
    name: 'Post- Magazine redesign',
    description: 'Online hub for an on-campus arts and culture magazine',
    date: 'December 2013',
    press: [],
    images: ["images/post.png"],
    url: 'http://post.browndailyherald.com'
  }];

})();
