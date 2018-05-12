angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      this.embedURL = function(id) {
        return 'https://www.youtube.com/embed/' + id;
      };
    },
    template: `
      <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" ng-src="{{ $ctrl.embedURL($ctrl.video.id.videoId) }}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{$ctrl.video.snippet.title}}</h3>
        <div>{{$ctrl.video.snippet.description}}</div>
      </div>
    </div>
    `
  });
