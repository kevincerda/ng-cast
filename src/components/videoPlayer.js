angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      toggle: '<',
      autoPlay: '<',
      video: '<'
    },
    controller: function() {
      this.embedURL = (id, autoPlay) => {
        let url = 'https://www.youtube.com/embed/' + id;
        console.log('embedURL autoPlay:', autoPlay);
        console.log('embedUrl this.autoPlay:', this.autoPlay);
        if (autoPlay) {
          url += '?autoplay=1';
        }
        console.log('embedURL url:', url);
        return url;
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
