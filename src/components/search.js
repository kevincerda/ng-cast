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
    template: `
      <div class="search-bar form-inline">
      <input ng-model="$ctrl.query" ng-keyup="$event.keyCode == 13 && $ctrl.result()" class="form-control" type="text" />
      <button ng-click="$ctrl.result()" class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
    `
  });

//ng-model-options="{debounce: 500}" 
//ng-change="$ctrl.liveResult()"
