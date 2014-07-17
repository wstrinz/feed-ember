// For more information see: http://emberjs.com/guides/routing/

FeedEmber.Router.map(function() {
  this.resource('feeds', { path: '/feeds' });
});

FeedEmber.FeedsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('feed')
  }
})

FeedEmber.IndexRoute = Ember.Route.extend({
  redirect: function() {
   this.transitionTo('feeds');
  }
});
