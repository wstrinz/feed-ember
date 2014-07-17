// for more details see: http://emberjs.com/guides/models/defining-models/

FeedEmber.Feed = DS.Model.extend({
  url: DS.attr('string'),
  name: DS.attr('string')
});
