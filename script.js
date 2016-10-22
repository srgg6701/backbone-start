var SearchView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      //var variables = { search_label: "My Search" };
      //var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
      console.log({
        func:'render'
      });
      //var compiled = _.template(list, {people : ['moe', 'curly', 'larry']});
      compiled = _.template($('#search_template').html(), {name:'hello'});
      console.log(compiled);
      $(this.el).html(compiled);
    },
    events: {
      "click input[type=button]": "doSearch"  
    },
    doSearch: function( event ){
      // Button clicked, you can access the element that was clicked with event.currentTarget
      alert( "Search for " + $("#search_input").val() );
    }
  });

var search_view = new SearchView({ el: "#search_container" });