AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/chamsmobile.png",
    place: "Chamsmobile LTD",
    time: "(April, 2020 - present)",
    desp: "<li>Consistently write, translate, and code software programs and applications according to specifications.</li> <li>Participate in the planning, design, development, and deployment of new applications and enhancements to existing applications</li> <li>Research, identify, analyze, and fulfil requirements of all internal and external program users.</li><li>Record, track, and document the problem-solving process, including all successful and unsuccessful decisions made, and actions taken, through to final resolution.</li> <li>Collaborate with business development unit, operations and technical departments in conceptualizing and developing new software programs and applications.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/chams_plc.png",
    place: "Chams PLC",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Consistently write, translate, and code software programs and applications according to specifications.</li> <li>Participate in the planning, design, development, and deployment of new applications and enhancements to existing applications</li> <li>Research, identify, analyze, and fulfil requirements of all internal and external program users.</li><li>Record, track, and document the problem-solving process, including all successful and unsuccessful decisions made, and actions taken, through to final resolution.</li> </li>",
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
    desp: "<li>Worked on the organization website.</li><li>I was introduced to Oracle/MS-Access Database.</li><li> I was introduced to Mobile Development(Android), in which i was able to developed TODO App.</li>",
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
      "Worked with a sub-team of 6 developers, to implement specified features on the Zuri chat application. Collaborated, researched and implemented best practices on android application architecture, SOLID principles, Separation of concerns, while implementing features using Agile scrum methodology.",
  },
  {
    title: "Hotels ng",
    cardImage: "assets/images/experience-page/hotels.png",
    description:
      "Contributed to the development of Zuri Chat Android native app for quick response to DMs and Channels in Zuri Organization.",
  },
  {
    title: "SharkByte",
    cardImage: "assets/images/experience-page/codelagos.png",
    description:
      "Worked with the team to developed an Android App for smart gas detection, that synced retrieve data to the server. The project won the hackathon",
  },
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
//
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
