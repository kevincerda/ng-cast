angular.module('video-player')
  .component('videoList', {
    controller: function() {
      this.onClick = function(index) {
        console.log('onClick:', index);
        this.selectVideo(this.videos[index]);
      };
    },
    bindings: {
      selectVideo: '<',
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
