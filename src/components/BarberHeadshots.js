import React from 'react';

const BarberHeadshots = () => {
  return (
    <>
      <section className='headshots-wrapper'>
        <h2>Meet the crew</h2>
        <div className='wrapper'>
          <div className='headshot-container'>
            <div className='images'>
              <img src='./derek-new.jpg' alt='Derek Favaro' />
            </div>
            <div className='content'>
              <h3>Derek Favaro</h3>
              <p>
                I spent my teens and 20's going job to job, always looking for
                the one that I could stand doing for the rest of my life.
                College wasn't for me and I never took anything too serious.
                Most of the time, I would look forward to my days off so I could
                go mountain biking, rock climbing, anything I found adventurous
                really, I love a good adventure. I spoke with my sister, a
                veteran in the hair world and after the advice she gave, I
                commited to barber school. Without her, I wouldn't be where I am
                today. I've had quite the adventure in my barber journey and it
                all led me to where I am now, owner of a barbershop! The best
                part is meeting new people and making new friends to share in my
                adventure.
              </p>
            </div>
          </div>
          <div className='headshot-container'>
            <div className='images'>
              <img src='./stacey-headshot.jpg' alt='Stacy Favaro' />
            </div>
            <div className='content stacy-info'>
              <h3>Stacy Favaro</h3>
              <p>
                My love of hair artistry started years before I was actually
                licensed in 2002. Whether it was convincing my friends to let me
                color their hair, getting them ready for homecoming or giving
                them a make over after a break up. Hair has just been a natural
                way in which I have been able to show love and support to others
                while expressing my own creativity.
              </p>
              <p>
                In the year 2000 I started an apprenticeship program and had
                great opportunities to study and be mentored by extremely
                talented stylists. I was licensed in 2002 and throughout the
                years continued my education. I strive to make every client feel
                comfortable while they're in my chair and and confident when
                they leave, while achieving their hair goals to the best of my
                abilities.
              </p>
              <p>
                I am excited to start this new chapter with my brother! If I had
                known we'd be here one day, I would have yelled at him less for
                cutting the hair off my practice mannequins!
              </p>
              <h4>Book with Stacy</h4>
              <a href='https://www.xostacy.com/'>Stacy's Website</a>
              <p>
                Instagram:{' '}
                <a href='https://www.instagram.com/youreprettylovestacy/'>
                  @youreprettylovestacy
                </a>
              </p>
              <span className='contact'>
                <a href='tel:1-734-338-1711'>(734) 338-1711</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='headshots-wrapper' style={{ paddingTop: 0 }}>
        <div className='wrapper'>
          <div className='headshot-container'>
            <div className='images'>
              <img src='./cody-new.jpg' alt='Cody Smith' />
            </div>
            <div className='content'>
              <h3>Cody Aurelius</h3>
              <p>
                I come from a family of Barbers and Cosmetologists so I guess
                naturally, it makes sense why I would fall into this career. I'm
                a lifelong artist and whether it was drawing, painting or
                digital art, I always loved to create. The most impactful medium
                I've found was hair. It can start with getting you ready for a
                job interview, which may lead to you providing for your family
                or grooming you for your first date, which may lead to getting
                you ready for your wedding. Making sure you look your best at
                key moments in your life is what I take pride in and thus far
                are the most rewarding things barbering has given me.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarberHeadshots;
