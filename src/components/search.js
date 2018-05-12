angular.module('video-player')

  .component('search', {
    bindings: {
      runSearch: '<'
    },
    controller: function() {
      this.result = () => {
        this.runSearch(this.query);
        this.query = '';
      };
      this.liveResult = () => {
        this.runSearch(this.query);
      };
    },
    templateUrl: 'src/templates/search.html' 
  });

//ng-model-options="{debounce: 500}" 
//ng-change="$ctrl.liveResult()"
