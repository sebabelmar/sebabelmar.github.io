// Experience title links modals configurations
var experience = new Vue({

  el: '#experience',

  data: {
    experiences: [
      {
        id:'meModal1',
        title: 'Entrepreneur',
        content:"<p>I’m the co-founder of <a href='www.masonbottle.com'>Mason Bottle</a>, a company founded by my wife and I that creates healthy, sustainable and affordable kids products. Our first inventions were baby bottle nipples that are compatible with mason jars. With our nipples, families can DIY glass baby bottles for a fraction of the price of a wide nipple well known glass baby bottle brand."+
        "<br><br>As an iteration of our bottles, this last summer, we successfully founded our <a href='https://www.kickstarter.com/projects/mason-bottle/the-3-in-1-toddler-tumbler'>2nd Kickstarter campaign</a> and we are ready to launch our second product line, <a href='https://masonbottle.com/products/mason-bottle-toddler-tumbler'>The Toddler Tumbler</a>. At Mason Bottle I wear multiple hats, CFO, CTO (Lead E-Commerce developer for our Shopify Shop), graphic designer, photographer, videographer, and social media strategist."+
        "<br><br> For the next couples of years Laura will lead the evolution of our company with the help of an amazing team that she is developing. <a href='www.masonbottle.com'>Mason Bottle</a> is growing at a healthy rate every month, our costumers <a href='https://www.amazon.com/Mason-Bottle-Silicone-Nipples-Two-Pack/product-reviews/B01I2TOSS0/ref=cm_cr_dp_d_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=avp_only_reviews#reviews-filter-bar'>love us, </a>"+
        "and we love how <a href='https://www.instagram.com/masonbottle/'>parents around the world</a> use our products. Even <a href='https://www.inc.com/kate-l-harrison/a-brilliant-new-design-turns-any-mason-jar-into-a-baby-bottle.html'>Inc Magazine</a> loves our brand!"+
        "<br><br> Thanks to Mason Bottle I've been able to explore my huge passion for developing products that align with my core values. We are made in the USA. We enable reduce, reduse, recycle. Multipurpose by design, chemicals free and hopefully a <a href='https://www.bcorporation.net/what-are-b-corps'>B-Corp</a> soon. Not matter if they are consumer products or software. I love contributing in a way that re-shapes the way we think and consume resources from our planet.</p>",
        picture: 'img/masonbottle.jpg'
      },
      {
        id:'meModal2',
        title: 'Engineer',
        content:"<p>I have a degree in commercial engineer and I love paiting white walls with different coulors to express any kind of systems, data flows, architecture diagrams, you name it."+
        "</br></br>I started my career as a Financial Analyst doing merge and aquicition consulting. Loved it, to the point that I studied for an insane certification call the <a href='https://www.cfainstitute.org/programs/cfaprogram/Pages/index.aspx'>Chartered Financial Analyst (CFA)</a>. I worked at <a href='http://www.ey.com/us/en/services/transactions/about-transaction-advisory-services'>EY</a> for many years until I decided to explore sustainability and climate change and education technology as a Software Engineer."+
        "</br></br>Even though I started coding in Logo in the 5th grade I was not until 2013 that I got seduced by Ruby and really dived into Web Development. " +
        "</br></br>Becoming a Software Engineer have opened doors to create that I never imagine possible and it gave me the opportunity to collaborate in really intense and demanding enviroments. This profesion showed me how amazing all that creative process can be when you are sourrounded by a great team. Plus it introduced me to one of the most giving communities I know, the open source community." +
        "</br></br>The past 4 years I've gained experince on the front-end in VueJS, ReactNativeJS, AngularJS, jQuery, D3, Javascript in general and in the back-end in Ruby on Rails, NodeJS, .Net, MongoDB, Postgres to name most of them.</p>",
        picture: 'img/white_boarding_DBC_coaching.JPG'
      },
      {
        id:'meModal3',
        title: 'Educator',
        content:"<p>One of my biggest passion is to teach and its unfair because I always end up learning a lot by doing so. I have never done it in a traditional set up and I love that."+
        "<br><br>I tutored kids in math during high school and collage, I was a TA for several classes including micro and macro economics, econometrics, corporate finance. I taught entrepreneurial skills as a volunteer at a community collage for the poorest people in Chile. And my last an most passionated experience teaching was as a Web Development instructor at <a href='www.devbootcamp.com'>Dev Bootcamp</a> in San Francisco, USA." +
        "<br><br>Untraditional education allowed me to experience how valuable human connections and interactions are for triggering real curiosity and love for learning. When we can create a space were forgetting is fine, breaking things is accepted and all the members can be them selves and they can bring their unique perspectives to the table we get a rich and fluent environment. This environment is a place were questions become lot more relevant than answers and expressing your real self is more relevant than pretending or becoming an ‘A’ student.</p>",
        picture: 'img/dbc_cohort.jpg?'
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
        id: 'portfolioModal1',
        title: 'Actua',
        content: "<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/actua.png',
        tile_img: 'img/portfolio/actua-logo.png',
        type: 'Web App',
        techs: 'Ruby on Rails | MongoDB | SQL',
        url: ''
      },
      {
        id:'portfolioModal2',
        title: 'Mason Bottle',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/mason-bottle-logo.png',
        type: '',
        techs: "",
        url: ""

      },
      {
        id:'portfolioModal3',
        title: 'Momentto',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/momentto-logo.png',
        type: '',
        techs: "",
        url: ""
      },
      {
        id:'portfolioModal4',
        title: 'Education & Experiments',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        picture: 'img/portfolio/foremly.png',
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/e-e-logo.png',
        type: '',
        techs: "",
        url: ""
      },
      {
        id:'portfolioModal5',
        title: 'Enventure',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/enventure.png',
        type: '',
        techs: '',
        url: ''
      },
      {
        id:'portfolioModal6',
        title: 'Foremly',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/enventure.png',
        type: '',
        techs: '',
        url: ''
      },
      {
        id:'portfolioModal7',
        title: 'Foremly',
        content:"<p class='black-font'>"+
                  "Foremly is an expenses report app. This app broke my MS Excel barriers and now I’m happily parsing Bank Statement to help small business in their costing processes.<br>"+
                  "This app was the first full stack experience I ever had and it gave me that fantastic tipping point that I was waiting for. I went from an problem to an idea, from an idea to a plan and then I saw all together on the browser."+
                  "Some fun code is the  <a href='https://github.com/sebabelmar/foremly_api/blob/master/lib/bank_statement.rb'>Bank Statement Parser</a> accounts. Now what is going to be fun is the  <a href='https://github.com/sebabelmar/FOREMLY/blob/DATA_BASE/db/schema.rb'>Data Dase Structure</a> that will allow clients and jobs parameterization."+
                  "You will find this project in 3 repos because I built an API and APP as part of DBC phase II final project and now I’m combing all into one Ruby on Rails App.</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/foremly-logo.png',
        type: '',
        techs: '',
        url: ''
      },
      {
        id:'portfolioModal8',
        title: 'Pigly',
        content:"<p class='black-font'>"+
          "Pigly is a Ruby on Rails - Mobile First app that allows users to find the best dishes on any San Francisco restaurant menu. <br>"+
          "Using the Locu API we display local restaurants and their current menu items for users to vote on, positive or negative. Google maps helps users find restaurants in the city and Facebook API let's them share their activity with friends and family. Data visualization with D3 creates a fun experience to learn more about restaurant demographics and item ranking. <br>"+
          "DevBootcamp Students developed Pigly in 7 days.<br>"+
          "Some fun code I wrote are the <a href='https://github.com/sebabelmar/pigly/blob/master/app/models/age_bubble.rb'>Model</a>, <a href='https://github.com/sebabelmar/pigly/blob/master/app/controllers/age_bubble_controller.rb'>Controller </a> and <a href='https://github.com/sebabelmar/pigly/blob/master/app/views/restaurants/show.html.erb'>JavaScript</a> (lines 127-269) logic that integrates the <a href='http://www.d3js.org'> D3.js</a> Bubble Plot visualization into the app."+
          "</p>",
        hero_img: 'img/portfolio/pigly.png',
        tile_img: 'img/portfolio/pigly-logo.png',
        type: '',
        techs: '',
        url: ''
      },
      {
        id:'portfolioModal9',
        title: 'SweetSinatra',
        content:"<p class='black-font'>Sweet Sinatra was the winner of the July 2014 DBC Hackathon Best Back End prize. <br>"+
          "In just 10 hours we built a gem that creates an app skeleton with scaffold options for Sinatra. <br>  The idea was to emulate Rails on top of Sinatra."+
          "We have work to do still because its documentation is pending plus it needs refactoring and bug fixing. <br>"+
          "The entire gem logic was written on one file <a href='https://github.com/sebabelmar/SweetSinatra/blob/master/lib/sweetsinatra.rb'>sweetsinatra.rb</a>. This was a nice challenge and gave us the oportunity to understand how Rails structure works."+
          "</p>",
        hero_img: 'img/portfolio/sweetsinatra.png',
        tile_img: 'img/portfolio/sweetsinatra-logo.png',
        type: '',
        techs: '',
        url: ''
      }
    ]
  },

  methods: {
    projectSets: function(){
      var width = 3
      return this.projects.reduce(function (rows, key, index) {
          return (index % width == 0 ? rows.push([key])
            : rows[rows.length-1].push(key)) && rows;
        }, []);
    }
  }

});
