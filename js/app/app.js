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
                    "For the last ten months I’ve been working on ACTUA a <a href='http://rubyonrails.org/'>Ruby on Rails</a>, <a href='https://www.mongodb.com/'>MongoDB</a>, <a href='https://www.postgresql.org/'>Postgresql</a> web application. ACTUA is an <a href='https://en.wikipedia.org/wiki/IAS_19'>Actuarial Calculator for financial reporting proposes</a>. It calculates the present value of the accured different banefits that each employee has theoterically benefit from up to date. Built as an internal tool for a financial services company in Chile whom cliente is the biggest Airline in Latin America."+
                    "<br><br>ACTUA improved the efficiency of the previous calculator, reducing the calculation time from ~12 hours using an Excel Macro to an hour with perfect accuracy. This new calculator can process the required information of +8,000 employees with simple configurability and selectivity. Features that the Excel Macro did not have and it could have taken a really expensive amount hours to implement, if possible, in a flexible and scalable manner."+
                    "<br><br>Today, ACTUA is used to perform quarterly calculations and full year forecasts."+
                    "<br><br>What is an <a href='https://en.wikipedia.org/wiki/Actuarial_science'>Actuarial</a> calculation? Each quarter companies that trade stocks have to report how much money they have provisioned for the accrued employee benefits up to date. Employees can be members of different unions, their age, time in the "+
                    "company, gender, and position are relevant inputs for the calculation. Additionally each union can have different set of contract signed with the company, and each case can be different, they change with each collective negotiation plus regulatory and macro economic inputs change for each calculation date. On top of the inputs complexities and diversity, the calculation has to be performed in a person to person basis and a stress test has to be applied to 4 variables independently in order to aggregate 5 potential scenarios."+
                    "<br><br>Next steps in this project it would be to build a friendly user interface. Currently, ACTUA runs using the back end tier of RoR plus a set of simple terminal commands."+
                  "</p>",
        hero_img: 'img/portfolio/actua.png',
        tile_img: 'img/portfolio/actua-logo.png',
        type: 'Web App',
        techs: 'Ruby on Rails | MongoDB | SQL',
        gitub_button: false,
        url: ''
      },
      {
        id:'portfolioModal2',
        title: 'Mason Bottle',
        content: "<p class='black-font'>"+
                    "<br><br>As the lead e-commerce engineer I redesigned and developed Mason Bottle’s <a href='https://themes.shopify.com/'>Shopify store theme</a>. Using <a href='https://shopify.github.io/Timber/'>Timber</a> and <a href='https://help.shopify.com/themes/liquid'>Liquid</a> (Shopify’s template language written in Ruby) I was able give our store our own look and add customizable features."+
                    "<br><br>These are a few example of the features built:"+
                    "<br><br><a href='https://github.com/masonbottle/smartPopUp'>Smart Pop Up for Optin From</a>"+
                    "<br><a href='https://github.com/masonbottle/instaShop'>Shop Our Instagram Grid</a>"+
                    "<br><a href='https://masonbottle.com/blogs/news'>Blog Tile Board</a>"+
                    "<br><br>In order to maintain and create features for Shopify, besides using Liquid, this project requires heavy use of Javascript in different flavors, mainly <a href='https://jquery.com/'>jQuery</a>. The code for this project is hosted in a Github private repo."+
                  "</p>",
        hero_img: 'img/portfolio/masonbottle.png',
        tile_img: 'img/portfolio/masonbottle-logo.png',
        type: 'shopify store',
        techs: 'Liquid | Javascript',
        gitub_button: true,
        url: 'https://github.com/masonbottle'

      },
      {
        id:'portfolioModal3',
        title: 'Momentto',
        content:"<p class='black-font'>"+
                    "Mementto is a private layer of memories for Instagram media. I built this app for my wife's 30th birthday."+
                    "<br><br>Using <a href='https://www.instagram.com/developer/'>Instagram OAuth and API</a> users can fetch their pictures and videos and add personal and private comments, reflections or notes."+
                    "<br><br>This project was hosted on Heroku as a web app built using the <a href='http://meanjs.org/'>MEAN Stack</a>. MongoDB, ExpressJS, AngularJS and NodeJS are the elements of this stack."+
                  "</p>",
        hero_img: 'img/portfolio/momentto.png',
        tile_img: 'img/portfolio/momentto-logo.png',
        type: 'web app',
        techs: 'MongoDB | Express.js | Angular.js | Node.js',
        gitub_button: true,
        url: 'https://github.com/sebabelmar/momentto'
      },
      {
        id:'portfolioModal4',
        title: 'Education & Experiments',
        content: "<p class='black-font'>"+
                  "As part of my own education and with the propose of teaching web development at <a href='https://devbootcamp.com/'>Dev Bootcamp</a> I created several code experiments, this is a short list of some interesting projects:"+
                  "<br><br><a href='https://github.com/sebabelmar/dbc_nem_api'>MEN API</a>"+
                  "<br><a href='https://github.com/sebabelmar/mean_tweets'>MEAN Tweets</a>"+
                  "<br><a href='https://github.com/sebabelmar/DBC_closures'>Advance JS - Closures</a>"+
                  "<br><a href='https://github.com/cshit/cshit/'>CSHIT</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_api'>DBC API</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_sinatra_api'>Sinatra API</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_booking_system'>Booking System</a>"+
                  "</p>",
        hero_img: 'img/portfolio/e-e.png',
        tile_img: 'img/portfolio/e-e-logo.png',
        type: 'Code experiments',
        techs: 'Ruby | Javascript | SQL | MongoDB',
        gitub_button: true,
        url: 'https://github.com/sebabelmar'
      },
      {
        id:'portfolioModal5',
        title: 'Dribbble Passport',
        content: "<p class='black-font'>"+
                    "In 2015 I published the <a href='http://developer.dribbble.com/'>Dribbble OAuth 2.0</a> <a href='http://passportjs.org/'>passport.js</a> strategy on <a href='https://www.npmjs.com/package/passport-dribbble'>NPM</a>. This package get downloaded hundreds of time a months."+
                    "<br><br>Why? I wanted to contribute to what I considering the most giving and creative community in the world, the Open Source community. And this is the story: when I moved to San Francisco I spent a long season going to different Hackathons, and one of them was the Shirts.io Hackathon. My team won by turning any <a href='<a href='https://www.dribbble.comhttp://developer.dribbble.com/'>Dribbble</a> account into a shirt store. We won $5,000 worth of shirts and decided to keep working in the app. In the process Dribbble launched their <a href='http://developer.dribbble.com/'>API’s new version</a> that included OAuth 2.0 as protocol for authentication. Since we were using the MEAN stack and passport.js as authentication library I wrote the Dribbble strategy and open source it. This contribution gets downloaded a couple of times a day at least which makes me really happy."+
                    "<br><br>We used the <a href='http://developer.dribbble.com/'>Dribbble API</a> and the <a href='https://scalablepress.com/'>ScalablePress API</a> to allow artist to easily sell their art on shirts of any size and color."+
                  "</p>",
        hero_img: 'img/portfolio/dribbble.png',
        tile_img: 'img/portfolio/dribbble-logo.png',
        type: 'npm package',
        techs: 'Javascript',
        gitub_button: true,
        url: 'https://www.npmjs.com/package/passport-dribbble'
      },
      {
        id:'portfolioModal6',
        title: 'Graphics, pictures & videos',
        content: "<p class='black-font'>"+
                    "I have a huge passion for <a href='https://www.flickr.com/photos/sebabelmar'>photography</a>, I've spent hours in the outdoors catching sunrises, sunsets, wild life. But I’ve never thought that I would use that experience professionally, until I started my own business."+
                    "<br><br>At <a href='https://www.masonbottle.com'>Mason Bottle</a> we have limited resources and the need for visual assets is huge. Additionally of shooting pictures and video I learned production, post production and how to use most of the Above Creative Suite."+
                    "<br><br>I love this aspect of our business, since image, esthetics and inspiring communication means a lot to me and I enjoy spending time on this area. Most is related to <a href='https://www.masonbottle.com'>Mason Bottle</a>:"+
                    "<br><br><a href='https://www.kickstarter.com/projects/mason-bottle/the-3-in-1-toddler-tumbler/description'> Toddler Tumbler Kickstarter</a> video and graphics"+
                    "<br><a href='https://www.kickstarter.com/projects/masonbottle/the-mason-bottle'>Mason Bottle Kickstarter</a> video and graphics"+
                    "<br><a href='https://masonbottle.com/'>Mason Bottle</a> Shopify Store"+
                  "</p>",
        hero_img: 'img/portfolio/g-c.png',
        tile_img: 'img/portfolio/g-c-logo.png',
        type: 'Graphic Design',
        techs: 'Adove CS | Nikon DSLR',
        gitub_button: false,
        url: 'https://www.masonbottle.com'
      },
      {
        id:'portfolioModal7',
        title: 'Foremly',
        content: "<p class='black-font'>"+
                    "Foremly is an expenses report app. Built with a <a href='https://www.greenearthenergyinc.com/'>solar power company</a> in mind were I use to help with in the costing process, Foremely can distribute lists of expenses by credit cards number."+
                    "<br><br>After a bank statement parsing routine each card holder, foreman, can login to their accounts and classify expenses by project and cost units. Giving the accounting team precise information."+
                    "<br><br>You will find this project in 2 repos because I built an <a href='https://github.com/sebabelmar/foremly_api'>API</a> and <a href='https://github.com/sebabelmar/foremly_app'>APP</a> as part of DBC phase II final project."+
                  "</p>",
        hero_img: 'img/portfolio/foremly.png',
        tile_img: 'img/portfolio/foremly-logo.png',
        type: 'web app',
        techs: 'Sinatra | Javascript | Postgres',
        gitub_button: true,
        url: 'https://github.com/sebabelmar/foremly_app'
      },
      {
        id:'portfolioModal8',
        title: 'Pigly',
        content:  "<p class='black-font'>"+
                  "Pigly is a Ruby on Rails - Mobile First app that allows users to find the best dishes on any San Francisco restaurant menu. <br>"+
                  "<br><br>Using the Locu API we display local restaurants and their current menu items for users to vote on, positive or negative. Google maps helps users find restaurants in the city and Facebook API let's them share their activity with friends and family. Data visualization with D3 creates a fun experience to learn more about restaurant demographics and item ranking. <br>"+
                  "<br><br>Some fun code I wrote are the <a href='https://github.com/sebabelmar/pigly/blob/master/app/models/age_bubble.rb'>Model</a>, <a href='https://github.com/sebabelmar/pigly/blob/master/app/controllers/age_bubble_controller.rb'>Controller </a> and <a href='https://github.com/sebabelmar/pigly/blob/master/app/views/restaurants/show.html.erb'>JavaScript</a> (lines 127-269) logic that integrates the <a href='http://www.d3js.org'> D3.js</a> Bubble Plot visualization into the app."+
                  "</p>",
        hero_img: 'img/portfolio/pigly.png',
        tile_img: 'img/portfolio/pigly-logo.png',
        type: 'web app',
        techs: 'Ruby on Rails | Javascript | Postgres | Facebook API | GoogleMaps API',
        gitub_button: true,
        url: 'https://github.com/sebabelmar/pigly'
      },
      {
        id:'portfolioModal9',
        title: 'SweetSinatra',
        content:  "<p class='black-font'>"+
                  "Sweet Sinatra was the winner of the July 2014 DBC Hackathon Best Back End prize. In just 10 hours we built a gem that creates an app skeleton with scaffold options for Sinatra. The idea was to emulate Rails on top of Sinatra."+
                  "<br><br>We have work to do still because its documentation is pending plus it needs refactoring and bug fixing."+
                  "<br><br>The entire gem logic was written on one file <a href='https://github.com/sebabelmar/SweetSinatra/blob/master/lib/sweetsinatra.rb'>sweetsinatra.rb</a>. This was a nice challenge and gave us the oportunity to understand how Rails structure works."+
                  "</p>",
        hero_img: 'img/portfolio/sweetsinatra.png',
        tile_img: 'img/portfolio/sweetsinatra-logo.png',
        type: 'Ruby Gem',
        techs: 'Ruby | Sinatra',
        gitub_button: true,
        url: 'https://github.com/Sinatrify'
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
