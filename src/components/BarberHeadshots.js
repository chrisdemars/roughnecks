import React from 'react';

const BarberHeadshots = () => {
  return (
    <>
    <section className="headshots-wrapper">
      <h2>Meet the crew</h2>
      <div className="wrapper">
        <div className="headshot-container">
          <div className="images">
            <img src="./derek-headshot.jpg" alt="Derek Favaro" />
          </div>
          <div className="content">
            <h3>Derek Favaro</h3>
            <p>
              I come from a blue collar family where college was never a main
              priority so I had no outlook on a future, I just kind of went day
              by day. After high school I tried a few careers I thought I would
              like, from tattooing, culinary arts and videography to engineering
              and factory work, none of which panned out for one reason or
              another.
            </p>
            <p>
              The idea of barbering came to be after seeing videos online and
              doing a bit more research about the craft. I went to my sister,
              who's been in the hair industry for over a decade, and after
              talking it over with her, I decided to go for it. I attended the
              Barber/styling College of Lansing to become a licensed Barber.
              School felt like a full time job and while I didn't have a dollar
              to my name I can say it was the best year of my life.
            </p>
            <p>
              I learned to live with less and strive for more. If I had to pick
              a specialty, I’d say maintaining a genuine conversation. In
              today's world, it's a lost art and along with getting a good cut,
              I want people leaving the shop feeling rejuvenated, walking a bit
              taller and have a smile on their face.
            </p>
          </div>
        </div>
        <div className="headshot-container">
          <div className="images">
            <img src="./stacey-headshot.jpg" alt="Stacy Favaro" />
          </div>
          <div className="content">
            <h3>Stacy Favaro</h3>
            <p>
              My love of hair artistry started years before I was actually
              licensed in 2002. Whether it was convincing my friends to let me
              color their hair, getting them ready for homecoming or giving them
              a make over after a break up. Hair has just been a natural way in
              which I have been able to show love and support to others while
              expressing my own creativity.
            </p>
            <p>
              In the year 2000 I started an apprenticeship program and had great
              opportunities to study and be mentored by extremely talented
              stylists. I was licensed in 2002 and throughout the years
              continued my education. I strive to make every client feel
              comfortable while they're in my chair and and confident when they
              leave, while achieving their hair goals to the best of my
              abilities.
            </p>
            <p>
              I am excited to start this new chapter with my brother! If I had
              known we'd be here one day, I would have yelled at him less for
              cutting the hair off my practice mannequins!
            </p>
            <h4>Book with Stacy</h4>
            <a href="https://www.xostacy.com/">Stacy's Website</a>
            <p>Instagram: @youreprettylovestacy</p>
            <span className="contact">
              <a href="tel:1-734-338-1711">(734) 338-1711</a>
            </span>
          </div>
        </div>
        </div>
    </section>
    <section className="headshots-wrapper" style={{paddingTop: 0}}>
      <div className="wrapper">
        <div className="headshot-container">
          <div className="images">
            <img src="./jake-headshot.jpg" alt="Jake Mcgarry" />
          </div>
          <div className="content">
            <h3>Jake Mcgarry</h3>
            <p>
            My interest in barbering began around the same time my passion for music started. I spent years playing shows, recording albums, and touring as a self taught drummer and musician. Those trying and challenging times showed me that the harder you work towards something you're passionate about, the more rewarding the outcome will be. 
            </p>
            <p>
            I have shifted that interest in barbering into a passion after years of contemplating what's next after music. I am currently a student barber at Hair Lab Detroit Barber School and apprentice at Roughnecks Barbershop. While in school and working at the barbershop, I have realized that music and barbering have had the same rewarding effect on me. When it came to music and playing shows, having people leave feeling better than when they walked in is something I still carry with me to this day. Now, I want my clients to feel that same way. I want every client to leave my chair feeling more confident than when they walked in and to have the best experience possible. 
            </p>
          </div>
        </div>
      </div>
    </section>

      
  </>
  );
};

export default BarberHeadshots;
