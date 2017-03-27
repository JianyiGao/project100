(function () {'use strict';

angular.module('Project100')
      .controller('FilterCtrl', FilterCtrl);

// Functions - Definitions
function FilterCtrl() {
  // Variables - Private
  var self = this;

  // Variables - Public
  self.filter = {};
  self.seniors = seniors;

  // Functions - Public
  self.filterByCategory = filterByCategory;
  self.getCategories = getCategories;

  // Functions - Definitions
  function filterbyPillar(senior) {
    return self.filter[senior.pillar] || noFilter(self.filter);
  }

  function getPillars() {
    return (self.seniors || []).
      map(function (senior) { return senior.pillar; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
}

  var expectPillarFilter = function(expectedFilter, key) {
    element.all(by.repeater(key + ' in seniors').column(key + '.adminPillar')).then(function(arr) {
      arr.forEach(function(wd, i) {
        expect(wd.getText()).toMatch(expectedFilter[i]);
      });
    });
  };

  it('should search across all fields when filtering with a button', function() {
    var searchButton = element(by.model('searchButton'));
    searchButton.clear();
    searchButton.sendKeys('m');
    expectFilters('adminPillar = true');

    searchButton.clear();
    searchButton.sendKeys('76');
    expectFriendNames(['John', 'Julie'], 'friend');
  });

}());
