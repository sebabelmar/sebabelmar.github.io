// Experience title links modals configurations
var experience = new Vue({

  el: '#experience',

  data: {
    experiences: [
      {
        id:'meModal1',
        title: 'Entrepreneur',
        content:"<p>"+
                  "I’m the co-founder of <a href='www.masonbottle.com'>Mason Bottle</a>, a company my wife and I created to make healthy, sustainable and affordable kids products. At Mason Bottle I wear multiple hats, CFO, lead e-commerce developer for our Shopify Shop, graphic designer, photographer, videographer, and social media strategist."+
                  "<br><br>Our first invention was baby bottle nipples that are compatible with mason jars. With our nipples, families can DIY glass baby bottles for a fraction of the price of other non-plastic options."+
                  "<br><br>As an iteration of our bottles, this last summer, we successfully funded our <a href='https://www.kickstarter.com/projects/mason-bottle/the-3-in-1-toddler-tumbler'>2nd Kickstarter campaign</a> and we are ready to launch our second product line, <a href='https://masonbottle.com/products/mason-bottle-toddler-tumbler'>The Toddler Tumbler</a>."+
                  "<br><br>For the next couple of years, Laura will lead the evolution of our company with the help of an amazing team that she is developing. <a href='www.masonbottle.com'>Mason Bottle</a> is growing at a healthy rate every month, our customers <a href='https://www.amazon.com/Mason-Bottle-Silicone-Nipples-Two-Pack/product-reviews/B01I2TOSS0/ref=cm_cr_dp_d_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=avp_only_reviews#reviews-filter-bar'>love us</a>, "+
                  "and we love how <a href='https://www.instagram.com/masonbottle/'>parents around the world</a> use our products. Even <a href='https://www.inc.com/kate-l-harrison/a-brilliant-new-design-turns-any-mason-jar-into-a-baby-bottle.html'>Inc Magazine</a> loves our brand!"+
                  "<br><br>Thanks to Mason Bottle I've been able to explore my huge passion for developing products that align with my core values. We are 100% made in the USA. We enable reduce, reuse, recycle. We are multipurpose by design, chemical-free, and hopefully a <a href='https://www.bcorporation.net/what-are-b-corps'>B-Corp</a> soon. To me, it doesn't matter if it is a consumer product or software, I love contributing in a way that re-shapes the way we think and consume resources from our planet."+
                "</p>",
        picture: 'img/masonbottle.jpg'
      },
      {
        id:'meModal2',
        title: 'Engineer',
        content:"<p>"+
                  "Over the past 4 years, I've gained experience on the front-end in VueJS, ReactNativeJS, AngularJS, jQuery, D3, Javascript in general and in the back-end in Ruby on Rails, NodeJS, .Net, MongoDB, Postgres to name most of them."+
                  "</br></br>I’ve had the opportunity to develop my skills and knowledge in different setups- from multinational corporations to startups. To add to my adaptability, besides being fluent in English and Spanish I have software engineering experience in Linux and Windows environments. For the last 4 years, I been focused in developing software with web technologies like Ruby on Rails, .Net, Javascript in various flavors and colors,  consuming relational and non-relational databases. I have demostrable good eye for design too."+
                  "</br></br>Previously I worked as a financial engineer specializing in valuation and business modeling for <a href='http://www.ey.com/us/en/services/transactions/valuation---business-modelling'>EY</a>."+
                "</p>",
        picture: ''
      },
      {
        id:'meModal3',
        title: 'Educator',
        content:"<p>"+
                  "One of my biggest passions is to teach and its unfair because I always end up learning a lot by doing so. I have never done it in a traditional set up and I love that."+
                  "<br><br>My last and most passionate experience teaching was as a Web Development instructor at <a href='www.devbootcamp.com'>Dev Bootcamp</a> in San Francisco, USA. I helped more than 300 people from the most diverse backgrounds to become world class junior developers."+
                  "<br><br>I had the chance to pair program, code review, and lecture about web technologies on a daily basis for almost a year. I've mastered explaining complex ideas in simple ways, I've developed patience and empathy when it comes to learning, and I've become a passionate about learning. " +
                "</p>",
        picture: 'img/dbc_cohort.jpg'
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
                    "For the last ten months I’ve been working on ACTUA a <a href='http://rubyonrails.org/'>Ruby on Rails</a>, <a href='https://www.mongodb.com/'>MongoDB</a>, <a href='https://www.postgresql.org/'>Postgresql</a> web application. ACTUA is an <a href='https://en.wikipedia.org/wiki/IAS_19'>Actuarial Calculator for financial reporting purposes</a>. It calculates the present value of the accrued different benefits that each employee has theoterically earned to date. This app was built as an internal tool for a financial services company in Chile whose clients include the biggest airline in Latin America."+
                    "<br><br>ACTUA improved the efficiency of the previous calculator, reducing the calculation time from ~12 hours using an Excel Macro to an hour with perfect accuracy. This new calculator can process the required information of +8,000 employees with simple configurability and selectivity. Today, ACTUA is used to perform quarterly calculations and full year forecasts."+
                    "<br><br>What is an <a href='https://en.wikipedia.org/wiki/Actuarial_science'>Actuarial</a> calculation? Each quarter companies that trade stocks have to report how much money they have provisioned for the accrued employee benefits up to date. Employees can be members of different unions, their age, time in the "+
                    "company, gender, and position are relevant inputs for the calculation. Additionally each union can have a different set of contracts signed with the company, and each case can be different: they change with each collective negotiation, plus regulatory and macro economic inputs change for each calculation date. On top of the complexity and diversity of the inputs, the calculation has to be performed on a person to person basis and a stress test has to be applied to 4 variables independently in order to aggregate 5 potential scenarios."+
                    "<br><br>Next steps in this project would be to build a friendly user interface. Currently, ACTUA runs using the back end tier of RoR plus a set of simple terminal commands."+
                  "</p>",
        hero_img: 'img/portfolio/actua.png',
        tile_img: 'img/portfolio/actua-logo.png',
        type: 'web app providing actuarial calcs to largest airline in Latin America',
        techs: 'Ruby on Rails | MongoDB | SQL',
        gitub_button: false,
        url: '',
        display: true
      },
      {
        id:'portfolioModal2',
        title: 'Mason Bottle',
        content: "<p class='black-font'>"+
                    "<br><br>As the lead e-commerce engineer, I redesigned and developed Mason Bottle’s <a href='https://themes.shopify.com/'>Shopify store theme</a>. Using <a href='https://shopify.github.io/Timber/'>Timber</a> and <a href='https://help.shopify.com/themes/liquid'>Liquid</a> (Shopify’s template language written in Ruby) I was able give our store our own look and add customizable features."+
                    "<br><br>These are a few example of the features built:"+
                    "<br><br><a href='https://github.com/masonbottle/smartPopUp'>Smart Pop Up for Optin From</a>"+
                    "<br><a href='https://github.com/masonbottle/instaShop'>Shop Our Instagram Grid</a>"+
                    "<br><a href='https://masonbottle.com/blogs/news'>Blog Tile Board</a>"+
                    "<br><br>In order to maintain and create features for Shopify, besides using Liquid, this project requires heavy use of Javascript in different flavors, mainly <a href='https://jquery.com/'>jQuery</a>. The code for this project is hosted in a Github private repo."+
                  "</p>",
        hero_img: 'img/portfolio/masonbottle.png',
        tile_img: 'img/portfolio/masonbottle-logo.png',
        type: 'shopify store, in top 3% of all stores launched the same week',
        techs: 'Liquid | Javascript',
        gitub_button: true,
        url: 'https://github.com/masonbottle',
        display: true

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
        type: ' web app for private use',
        techs: 'MongoDB | Express.js | Angular.js | Node.js',
        gitub_button: true,
        url: 'https://github.com/sebabelmar/momentto',
        display: true
      },
      {
        id:'portfolioModal4',
        title: 'Education & Experiments',
        content: "<p class='black-font'>"+
                  "As part of my own education and with the prupose of teaching web development at <a href='https://devbootcamp.com/'>Dev Bootcamp</a>, I created several code experiments. This is a short list of some interesting projects:"+
                  "<br><br><a href='https://github.com/sebabelmar/dbc_nem_api'>MEN API</a>"+
                  "<br><a href='https://github.com/sebabelmar/mean_tweets'>MEAN Tweets</a>"+
                  "<br><a href='https://github.com/sebabelmar/DBC_closures'>Advance JS - Closures</a>"+
                  "<br><a href='https://github.com/cshit/cshit/'>CSHIT</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_api'>DBC API</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_sinatra_api'>Sinatra API</a>"+
                  "<br><a href='https://github.com/sebabelmar/dbc_booking_system'>Booking System</a>"+
                  "<br><a href='https://github.com/sebabelmar/foremly_app'>Foremly</a>"+
                  "<br><a href='https://github.com/sebabelmar/pigly'>Pigly</a>"+
                  "<br><a href='https://github.com/Sinatrify'>SweetSinatra</a>"+
                  "</p>",
        hero_img: 'img/portfolio/e-e.png',
        tile_img: 'img/portfolio/e-e-logo.png',
        type: 'code experiments built to teach students key programming concepts',
        techs: 'Ruby | Javascript | SQL | MongoDB',
        gitub_button: true,
        url: 'https://github.com/sebabelmar',
        display: true
      },
      {
        id:'portfolioModal5',
        title: 'Dribbble Passport',
        content: "<p class='black-font'>"+
                    "In 2015 I published the <a href='http://developer.dribbble.com/'>Dribbble OAuth 2.0</a> <a href='http://passportjs.org/'>passport.js</a> strategy on <a href='https://www.npmjs.com/package/passport-dribbble'>NPM</a>. This package gets downloaded hundreds of times a months."+
                    "<br><br>Why? I wanted to contribute to what I considered the most giving and creative community in the world, the Open Source community. And this is the story: when I moved to San Francisco I spent a long season going to different Hackathons, and one of them was the Shirts.io Hackathon. My team won by turning any <a href='<a href='https://www.dribbble.comhttp://developer.dribbble.com/'>Dribbble</a> account into a shirt store. We won $5,000 worth of shirts and decided to keep working in the app. In the process Dribbble launched their <a href='http://developer.dribbble.com/'>API’s new version</a> that included OAuth 2.0 as protocol for authentication. Since we were using the MEAN stack and passport.js as authentication library I wrote the Dribbble strategy and open sourced it. This contribution gets downloaded a couple of times a day at least which makes me really happy."+
                    "<br><br>We used the <a href='http://developer.dribbble.com/'>Dribbble API</a> and the <a href='https://scalablepress.com/'>ScalablePress API</a> to allow artists to easily sell their art on shirts of any size and color."+
                  "</p>",
        hero_img: 'img/portfolio/dribbble.png',
        tile_img: 'img/portfolio/dribbble-logo.png',
        type: 'most downloaded open source contribution',
        techs: 'Javascript',
        gitub_button: true,
        url: 'https://www.npmjs.com/package/passport-dribbble',
        display: true
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
        techs: 'Adobe CS | Nikon DSLR',
        gitub_button: false,
        url: 'https://www.masonbottle.com',
        display: true
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
        url: 'https://github.com/sebabelmar/foremly_app',
        display: false
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
        url: 'https://github.com/sebabelmar/pigly',
        display: false
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
        url: 'https://github.com/Sinatrify',
        display: false
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


var recommendations = new Vue({
  el: '#recomendations',

  data: {
    recs: [
      {
          name: 'Varun Gulati',
          title: 'Manager at Renaissance Learning',
          content: 'Sebastian joined my team back in 2014, and I cannot speak highly enough about the many contributions he made. Aside from being an incredible engineer, there are three main things that set him apart as a leader in the pack: his strong desire to critically and collaboratively approach challenging problems (watch him work his magic on a whiteboard!), his ability to coach younger engineers (he is a professional instructor, after all), and his infectiously positive attitude that truly sets a warm, productive culture for any team that is lucky to have him. Few people have the rare combo of strong technical chops, EQ, integrity, and innovative mindset that he does. Any individual that has worked with him can attest to this fact!',
          in_url: 'https://www.linkedin.com/in/vrgulati/',
          img: 'img/varun.jpg'
      },
      {
          name: 'Jaclyn Karnowski',
          title: 'Technical Curriculum Developer at Uber',
          content: 'Seba brings an energy and light to teaching and engineering that is unparalleled. As a software engineer, he invests sufficient time into understanding the problem being solved, the architecture already in place and the people involved in the project. His curiosity for how to best leverage a language like Ruby or framework like AngularJS leads to incredibly fun projects. As a teacher, he knows how to ask the right questions to guide students in a balanced dance between     building confidence in what they know and pushing them to the next level of learning. Without a doubt, I want to work with Seba again as an engineer or as a teacher!',
          in_url: 'https://www.linkedin.com/in/jaclynkarnowski/',
          img: 'img/jk.jpg'
      },
      {
          name: 'Rob Andrews',
          title: 'Data Scientist at Athos',
          content: 'Ive had the pleasure of working with Sebastian in two different contexts, the first at a small startup and the second at a large company post-acquisition. Sebastian is an excellent software engineer – he takes pride in his work, thrives in technical discussion, adopts best practices, and produces quality, maintainable code. His technical accolades stand on their own, but software development is a team sport and here he shines. As a teammate, Sebastian championed pair programming, spent time owning and teaching new technologies, and encouraged improvement through code reviews. He did all this with a smile and infectious positivity. I look forward to the next time we work together.',
          in_url: 'https://www.linkedin.com/in/rob-andrews-840a2b51/',
          img: 'img/rob.jpg'
      }
    ]
  }
})
