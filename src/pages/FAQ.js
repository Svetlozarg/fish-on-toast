import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import logo from "../images/logo-white.png";

import "./FAQ.css";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <section className="faq">
        <div className="faq-bg">
          <img src={logo} alt="" />
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-wrapper">
          <p>
            We have collected the most common questions in one place that are
            most often asked!
          </p>
          <p>
            If you have any questions, message us on any of our social media
            accounts and we'll answer you as soon as possible!
          </p>

          <div className="faq-details">
            <details>
              <summary> What’s up with the name?</summary>
              <div class="faq-content">
                <p>
                  We get this question a lot. Like, A LOT. Yeah, it’s a bit
                  wacky and confusing, but that’s why we love it! The official
                  story (which at this point has turned into a myth) is that
                  when the society was established back in 2002, the University
                  of Southampton’s logo was a dolphin inside a square (see
                  below). The people that initiated our society thought that was
                  funny and that it looked like a fish on a piece of toast.
                  Hence, “Fish on Toast”! Anticlimactic? Probably. Funny? Maybe
                  a little. But we’ve been rocking it ever since, and we don’t
                  plan on stopping anytime soon!
                </p>
              </div>
            </details>
            <details>
              <summary> How often do you have events?</summary>
              <div class="faq-content">
                <p>
                  We hold regular speaker events at least once a week, usually
                  on a Thursday. Sometimes we might have more than one event, or
                  attend a joint event with another society or organization
                  (we’ll still post about it to let you know). Of course, the
                  COVID-19 pandemic has shaken things up a bit, so we might miss
                  a week or two, but we’re trying to get as many events to you
                  as possible, so keep an eye out for them on our website,
                  social media, and emails.
                </p>
              </div>
            </details>
            <details>
              <summary> Who speaks at the events?</summary>
              <div class="faq-content">
                <p>
                  Our speakers range quite a bit, from first-time student
                  founders, to CEOs and leaders of organizations, to experts in
                  technology, engineering, and science. One thing they all have
                  in common is their love for entrepreneurship and desire to
                  help students at the university in succeeding with their
                  endeavors (which is why most of them are very open to
                  connecting and supporting outside of events as well). A lot
                  (but not all) of our speakers are part of the on-campus
                  startup ecosystem, such as founders from the Future Worlds
                  accelerator, owners of companies based in the Southampton
                  Science Park, or just student founders with enough experience
                  and a desire to share it with others.
                </p>
              </div>
            </details>
            <details>
              <summary> How much does it cost to attend events?</summary>
              <div class="faq-content">
                <p>
                  All of our events are free! We encourage everyone to get
                  Eventbrite tickets beforehand, but they are always free of
                  cost for students, staff, and anyone outside the university.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Do I need to be a founder to come to the events?
              </summary>
              <div class="faq-content">
                <p>
                  Anyone can come to our events, no matter their background. You
                  don’t need to have any experience with startups whatsoever,
                  and it doesn’t matter what course you’re on — all you need is
                  a desire to learn more. All of our events cater to first-time
                  founders or wantrepreneurs, and our Business Basics series is
                  particularly well-suited for people with absolutely no
                  background knowledge.
                </p>
              </div>
            </details>
            <details>
              <summary> How do I become a member?</summary>
              <div class="faq-content">
                <p>
                  You can
                  <a
                    href="https://www.susu.org/groups/fot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sign up
                  </a>
                  for membership on the SUSU website.
                </p>
              </div>
            </details>
            <details>
              <summary> How much does membership cost?</summary>
              <div class="faq-content">
                <p>
                  Memberships, like all of our events, are completely free of
                  charge.
                </p>
              </div>
            </details>
            <details>
              <summary> Who runs the society?</summary>
              <div class="faq-content">
                <p>
                  The society is run by an enthusiastic group of students who
                  love talking about entrepreneurship, are always open to
                  helping students, and usually dabble in their own projects and
                  startup ventures. You can find out more about the current
                  committee <a href="/#team">here</a>.
                </p>
              </div>
            </details>
            <details>
              <summary> How can I get involved? </summary>
              <div class="faq-content">
                <p>
                  If you want to get involved as part of the committee or help
                  us in some part of running our society, don’t hesitate to get
                  in touch! Come talk to us before or after any of our events,
                  contact any of the current committee members directly, or
                  email us at president@fishontoast.co.uk.
                </p>
              </div>
            </details>
            <details>
              <summary> Do you work with other societies?</summary>
              <div class="faq-content">
                <p>
                  Yes, we are always open for collaboration with other societies
                  at the university! We often promote other societies’ events,
                  and in the past have done joint events, socials, and
                  shoutouts. If you are a member of another society and think we
                  might be able to collaborate on anything, give us a shout at
                  president@fishontoast.co.uk.
                </p>
              </div>
            </details>

            <h3>Startup-concepts-related questions</h3>
            <details>
              <summary>I have an idea for a startup. What do I do?</summary>
              <div class="faq-content">
                <p>
                  Starting your own business, or even thinking about doing it,
                  can be very overwhelming at the start, especially if you have
                  no prior experience. There are a few simple things that you
                  can do very early on, such as writing down your idea, doing
                  some research on your competitors, and talking to others about
                  it, but even those can be very difficult for a fresh
                  entrepreneur. That’s why we’re here! If you have an idea and
                  don’t know what to do, or you’re not sure how to do it and who
                  to talk to, don’t hesitate to reach out to us. We have all
                  been in that same position, and we are here to help. Reach out
                  to any of us directly, or if you prefer, you can email us at
                  president@fishontoast.co.uk.
                </p>
              </div>
            </details>
            <details>
              <summary>How does funding work?</summary>
              <div class="faq-content">
                {/* TODO: article link */}
                <p>
                  This is a big topic, so we have dedicated an article to it.
                </p>
              </div>
            </details>
            <details>
              <summary> What does ‘hustling’ mean?</summary>
              <div class="faq-content">
                {/* TODO: article link */}
                <p>
                  Hustling is the ultimate goal and worship of any startup
                  founder. It is the way for any self-respecting entrepreneur to
                  reach global success and essentially win at life. Jokes aside,
                  the term ‘hustling’ invokes conflicting reactions in some
                  people, but in essence it means putting the work in. It means
                  being smart about what you do, noticing and taking
                  opportunities, and most importantly doing anything it takes to
                  make things happen. Being a ‘hustler’ is associated with
                  startup founders because they often have to put in a huge
                  amount of work and find both innovative solutions and
                  practical workarounds to a lot of obstacles if they want to
                  see their idea become successful. Some people also associate
                  the term with cutting corners, playing unfair, and being
                  successful at the detriment of others, or on the contrary,
                  becoming a workaholic and putting a lot of effort into things
                  that don’t matter. This highlights why hustling requires
                  careful balance, but it is nonetheless vital for the success
                  of any startup. At Fish on Toast, we promote a healthy
                  hustling mentality that helps you get the right things done!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
