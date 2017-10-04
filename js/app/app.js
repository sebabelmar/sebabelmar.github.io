// Experience title links modals configurations
var experience = new Vue({

  el: '#experience',

  data: {
    experiences: [
      {
        id:'meModal1',
        title: 'Entrepreneur',
        content:'Amazing experience!',
        picture: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?',
      },
      {
        id:'meModal2',
        title: 'Engineer',
        content:'Amazing experience! 2',
        picture: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?'
      },
      {
        id:'meModal3',
        title: 'Educator',
        content:'Amazing experience! 3',
        picture: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?'
      }
    ]
  }
});

// Experience title links modals configurations
var project = new Vue({

  el: '#projects',

  data: {
    projects: [
      {
        id:'portfolioModal1',
        title: 'Foremly',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. <br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "<br> This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        picture: 'https://github.com/sebabelmar/FOREMLY',
      },
      {
        id:'portfolioModal2',
        title: 'Engineer',
        content:'Amazing experience! 2',
        picture: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?'
      },
      {
        id:'portfolioModal3',
        title: 'Educator',
        content:'Amazing experience! 3',
        picture: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/0ef62e4df27b4ba7294de889fdbc33e476a08ec9_254x191.jpg?'
      }
    ]
  }
});

var tiles = new Vue({

  el: '#tiles',

  data: {
    tiles: [
      {
        id:'#portfolioModal1',
        title:'Seba',
        picture:'img/portfolio/foremly-logo.png',
        language:''
      },
      {
        id:'#portfolioModal1',
        title:'Seba',
        picture:'img/portfolio/foremly-logo.png',
        language:''
      },
      {
        id:'#portfolioModal1',
        title:'Seba',
        picture:'img/portfolio/foremly-logo.png',
        language:''
      },
      {
        id:'#portfolioModal1',
        title:'Seba',
        picture:'img/portfolio/foremly-logo.png',
        language:''
      },
      {
        id:'#portfolioModal1',
        title:'Seba',
        picture:'img/portfolio/foremly-logo.png',
        language:''
      }
    ]
  },

  methods: {
    tilesSets: function(){
      var width = 3
      return this.tiles.reduce(function (rows, key, index) {
          return (index % width == 0 ? rows.push([key])
            : rows[rows.length-1].push(key)) && rows;
        }, []);
    }
  }

})
