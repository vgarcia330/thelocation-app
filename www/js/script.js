
$(function(){

    // Create a model for menu items
    var MenuItem = Backbone.Model.extend({
            defaults:{
                name: 'Item 1',
                price: '$1.00'
            }
        });

    // Create a collection of breakfast menu items
    var MenuList = Backbone.Collection.extend({

        // will hold objects of the MenuItem model
        model: MenuItem
    });

    // fill the collection with a number of breakfast menu items
    var breakfasts = new MenuList([
        new MenuItem({ name: "Chorizo/Egg",price:"$1.89"}),
        new MenuItem({ name: "Sausage/Egg",price:"$1.89"}),
        new MenuItem({ name: "Potato/Egg",price:"$1.89"}),
        new MenuItem({ name: "Bacon/Egg",price:"$1.89"}),
        new MenuItem({ name: "Carne Guisada",price:"$2.59"}),
        new MenuItem({ name: "Barbacoa - Thur/Fri only",price:"$2.59"}),
        new MenuItem({ name: "Chicharons",price:"$1.89"}),
        new MenuItem({ name: "Picadillo",price:"$2.59"})
    ]);

    // fill the collection of drink menu items
    var drinks = new MenuList([
        new MenuItem({ name: "Tea (32 oz Tea)",price:"$1.49"}),
        new MenuItem({ name: "Tea (44 oz Tea)",price:"$1.69"}),
        new MenuItem({ name: "Coffee (16 oz Coffee)",price:"$1.49"}),
        new MenuItem({ name: "Orange Juice (10 oz Tropicana)",price:"$1.49"}),
        new MenuItem({ name: "Coke (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Diet Coke (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Sprite (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Dr Pepper (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Big Red (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Bargs Root Beer (20 oz Bottle Drinks)",price:"$1.89"}),
        new MenuItem({ name: "Mexican Cokes  (1/2 liter bottle)",price:"$2.25"}),
        new MenuItem({ name: "Powerade  (Blue/Red    20 oz bottle)",price:"$1.59"}),
        new MenuItem({ name: "Monster Energy Drinks  (Blue/Green   16 oz cans)",price:"$2.69"}),
        new MenuItem({ name: "Red Bull  (8.4 oz can (regular/sugar free))",price:"$2.29"}),
        new MenuItem({ name: "Bottle Water  (20 oz bottle)",price:"$1.39"})
    ]);

    // fill the collection of lunch menu items
    var lunches = new MenuList([
        new MenuItem({ name:"Location Burger",price:"$6.99"}),
        new MenuItem({ name:"Brisket Sandwich",price:"$6.99"}),
        new MenuItem({ name:"Beef Fajita Taco",price:"$2.69"}),
        new MenuItem({ name:"Steak Fries",price:"$2.19"}),
        new MenuItem({ name:"Homemade Charro Beans",price:"$1.29"}),
        new MenuItem({ name:"Rice","Price":"$1.29"})
    ]);

    // fill the collection of lunch plate menu items
    var lunchPlates = new MenuList([
        new MenuItem({ name:"Location Burger ((1/2) lb Fresh black angus patty on our dough bun w/pepper jack cheese, lettuce, tomato, pickle, friedonion ring topper, house spicy chipotle mayo.includes steak fries.)",price:"$8.99 "}),
        new MenuItem({ name:"Fajita Plate  ((2) Beef or Chicken fajita tacos w/lettuce & tomato. Includes homemade beans, rice & pico de gallo.)",price:"$8.99 "}),
        new MenuItem({ name:"Brisket Sandwich  (Fresh sliced brisket on sour dough bun w/bbq sauce, pickles, onions, jalapeno on side. includes homemade beans & rice.)",price:"$8.99 "}),
        new MenuItem({ name:"Carne Guisada (Beans, rice and pico de gallo)",price:"$8.99 "})
    ]);

    // fill the collection of side menu items
    var sides = new MenuList([

        new MenuItem({name :'Bacon', price:"$0.35"}),
        new MenuItem({name :'Bean',price:"$0.35"}),
        new MenuItem({name :'Cheese',price:"$0.35"}),
        new MenuItem({name :'Potato',price:"$0.35"}),
        new MenuItem({name :'Pico de Gallo',price:"$0.89"}),
        new MenuItem({name :'Guacamole',price:"$0.99"})
    ]);

    // This view turns a MenuItem model into HTML. Will create LI elements.
    var MenuItemView = Backbone.View.extend({
        tagName: 'li',

        events:{
            'click': 'toggleService'
        },

        initialize: function(){

            // Set up event listeners. The change backbone event
            // is raised when a property changes (like the checked field)

            this.listenTo(this.model, 'change', this.render);
        },

        render: function(){

            // Create the HTML

            this.$el.addClass('list-group-item').html(this.model.get('name')+'<span class="badge1" style="float: right;">' + this.model.get('price') + '</span>');

            this.$('input').prop('checked', this.model.get('checked'));

            // Returning the object is a good practice
            // that makes chaining possible
            return this;
        },

        toggleService: function(){
            this.model.toggle();
        }
    });

    // The main view of the application
    var App = Backbone.View.extend({

        // Base the view on an existing element
        el: $('#main'),

        initialize: function(){

            // Cache the selector
            this.list1 = $('#list-breakfast');
            breakfasts.each(function(menuItem){
                var view = new MenuItemView({model: menuItem});
                this.list1.append(view.render().el);
            }, this);

            this.list2 = $('#list-drink');
            drinks.each(function(menuItem){
                var view = new MenuItemView({model: menuItem});
                this.list2.append(view.render().el);
            }, this);

            this.list3 = $('#list-lunch');
            lunches.each(function(menuItem){
                var view = new MenuItemView({model: menuItem});
                this.list3.append(view.render().el);
            }, this);

            this.list4 = $('#list-lunchPlate');
            lunchPlates.each(function(menuItem){
                var view = new MenuItemView({model: menuItem});
                this.list4.append(view.render().el);
            }, this);

            this.list5 = $('#list-side');
            sides.each(function(menuItem){
                var view = new MenuItemView({model: menuItem});
                this.list5.append(view.render().el);
            }, this);


        }
    });

    new App();

});