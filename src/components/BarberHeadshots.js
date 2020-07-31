import React from 'react';

const BarberHeadshots = () => {
  return (
    <section className="headshots-wrapper">
      <h2>Meet the barbers</h2>
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
              to my name I can say it was the best year of my life. I learned to
              live with less and strive for more. If I had to pick a specialty,
              I’d say maintaining a genuine conversation. In today's world, it's
              a lost art and along with getting a good cut, I want people
              leaving the shop feeling rejuvenated, walking a bit taller and
              have a smile on their face.
            </p>
            <button>Book</button>
          </div>
        </div>
        <div className="headshot-container">
          <div className="images">
            <img src="./stacey-headshot.jpg" alt="Stacy Williams" />
          </div>
          <div className="content">
            <h3>Stacy Williams</h3>
            <p>
              My love of hair artistry started years before I was actually
              licensed in 2002. Weather it was convincing my friends to let me
              color their hair, getting them ready for homecoming or giving them
              a make over after a break up. Hair has just been a natural way in
              which I have been able to show love and support to others while
              expressing my own creativity. In the year 2000 I started an
              apprenticeship program and had great opportunities to study and be
              mentored by extremely talented stylists. I was licensed in 2002
              and throughout the years continued my education. I strive to make
              every client feel comfortable while they're in my chair and and
              confident when they leave, while achieving their hair goals to the
              best of my abilities. I am excited to start this new chapter with
              my brother! If I had known we'd be here one day, I would have
              yelled at him less for cutting the hair off my practice
              mannequins!
            </p>
            <button>Book</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarberHeadshots;
