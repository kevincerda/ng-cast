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
    template: `
      <ul class="video-list">
        <video-list-entry
          video="video"
          ng-click="$ctrl.onClick($index)"
          ng-repeat="video in $ctrl.videos"><h5><em>videoListEntry</em> component goes here</h5>
        </video-list-entry>
      </ul>
    `
  });
