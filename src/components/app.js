angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (query) => {
        youTube.search(query, (response) => {
          if (response.data) {
            this.videos = response.data.items;
            this.currentVideo = response.data.items[0];
          }
        });
      };
      this.searchResults('reactjs');
    },
    template: `
      <div id="app container">
        <nav class="navbar">
          <div class="col-md-6 col-md-offset-3">
            <search run-search="$ctrl.searchResults"><h5><em>search</em> component goes here</h5></search>
          </div>
        </nav>
        <div class="row">
          <div class="col-md-7">
            <video-player ng-if="$ctrl.currentVideo" video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
          </div>
          <div class="col-md-5">
            <video-list select-video="$ctrl.selectVideo" videos="$ctrl.videos"><h5><em>videoList</em> component goes here</h5></video-list>
          </div>
        <div>
      </div>
    `
  });
