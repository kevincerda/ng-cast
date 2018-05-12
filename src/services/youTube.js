angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (query, callback) => {
      let url = 'https://www.googleapis.com/youtube/v3/search';
      $http.get(url, {
        params: {
          q: query,
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).then(function(response) {
        //console.log('response:', response);
        if (callback) {
          callback(response);
        }
      });
    };
  });
