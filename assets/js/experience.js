AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/chamsmobile.png",
    place: "Chamsmobile LTD",
    time: "(April, 2020 - present)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/chams_plc.png",
    place: "Chams PLC",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/so_tech.png",
    place: "So Tech Africa formally Setnumd Technologies",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
  {
    title: "Internship",
    cardImage: "assets/images/experience-page/ascon.png",
    place: "Ascon",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Zuri Chat",
    cardImage: "assets/images/experience-page/zuri_chat.png",
    description:
      "Led a sub-team of 6 developers, to implement specified features on the Zuri chat application. Collaborated, researched and implemented best practices on android application architecture, SOLID principles, Separation of concerns, while implementing features using Agile scrum methodology.Mobile App Intern Hotels.ng/Zuri Team - Lagos, Nigeria.",
  },
  {
    title: "Hotels ng",
    cardImage: "assets/images/experience-page/hotels.png",
    description:
      "Contributed to the development of Zuri Chat Android native app for quick response to DMs and Channels in Zuri Organization. Implemented workspace switching, chat messages persistence in rooms, and channel creation features, thereby improving user app experience. Mobile App Intern Hotels.ng/Zuri Team - Lagos, Nigeria.",
  },
//  {
//    title: "PClub Summer Of Code 2020",
//    cardImage: "assets/images/experience-page/3.jpg",
//    description:
//      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//  },
//  {
//    title: "Hakin-Codes",
//    cardImage: "assets/images/experience-page/4.jpg",
//    description:
//      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Codelagos Hackathon",
    subtitle: "Winner",
    image: "assets/images/experience-page/codelagos.png",
    desp: "CodeLagos is an initiative of the Lagos State Ministry of Education aimed at making coding education accessible to Lagos State residents. CodeLagos is positioning residents of Lagos State to: A fundamental component of the initiative is human capital development.",
  },
 {
    title: "Andela Learning Community",
    subtitle: "Mentor",
    image: "assets/images/experience-page/alc.png",
    desp: "Mentoring and teaching learners on enhancing Android Development Technologies",
  },
  {
    title: "Andela Learning Community Project Demo day",
    subtitle: "Judge",
    image: "assets/images/experience-page/alc.png",
    desp: "Evaluate a number of project submissions made by the learners during the community project phase.",
  },
//  {
//    title: "Hack-A-Solution",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/hackasolution.png",
//    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//  },
//  {
//    title: "UniGlobe Hacks",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/uniglobe.png",
//    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//  },
//  {
//    title: "AtlasHacks",
//    subtitle: "Mentor",
//    image: "assets/images/experience-page/atlas.png",
//    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//  },
//  {
//    title: "NeoHacks",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/neo.png",
//    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//  },
//  {
//    title: "Mission Inspired",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/mission.png",
//    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//  },
//  {
//    title: "Hack3",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/hack3.png",
//    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//  },
//  {
//    title: "JITHack",
//    subtitle: "Mentor",
//    image: "assets/images/experience-page/jithack.png",
//    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//  },
//  {
//    title: "Recess Hacks",
//    subtitle: "Mentor",
//    image: "assets/images/experience-page/recess.png",
//    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//  },
//  {
//    title: "Citro Tech",
//    subtitle: "Mentor",
//    image: "assets/images/experience-page/citro.png",
//    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//  },
//  {
//    title: "NHacks",
//    subtitle: "Judge",
//    image: "assets/images/experience-page/nhacks.png",
//    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
