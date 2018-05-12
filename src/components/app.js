angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.autoPlay = false;
      this.toggleAutoPlay = () => {
        this.autoPlay = !this.autoPlay;
        console.log('toggleAutoPlay:', this.autoPlay);
      };
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
    templateUrl: 'src/templates/app.html'
  });
