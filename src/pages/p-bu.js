import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import bu1 from "../images/beatup/1.png"
import bu2 from "../images/beatup/2.png"
import bu3 from "../images/beatup/3.png"
import bu4 from "../images/beatup/4.png"
import bu5 from "../images/beatup/5.png"
import bu6 from "../images/beatup/6.png"

import j1 from "../images/beatup/j1.png"
import p1 from "../images/beatup/p1.png"
import p2 from "../images/beatup/p2.png"

import { Link } from "gatsby"

import { Image, Carousel } from "react-bootstrap"

const cookBurnPage = () => (
  <div>
    <Header></Header>
    <div
      className="container"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingBottom: `200px`,
      }}
    >
      <h2 className="text-center pt-4 pb-2">Beat Up Application</h2>
      <p className="text-center text-secondary">June 2020 ~ Dec 2020</p>
      <p className="text-center text-secondary">
        What should we do if we’re getting bored during the lockdown due to the
        spread of COVID-19?
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        The project is created with the aim of designing based on usability
        heuristic to confirm that the application will follow the usability
        requirements, for instance, it should have memorability such as easy to
        use or make the user become familiar with; it should have learnability
        as the application was designed for anyone to use, and it should deliver
        satisfaction as users achieve the goal of using the application such as
        spending their free time to do some beneficial activities. Before
        designing, we need to define the problem by exploring it then create the
        empathy map to understand the user’s perspective. Another important step
        is that we need to create some personas to actually create the story or
        the user journey map.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={bu1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={bu2}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bu3} alt="Third slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bu4} alt="Third slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bu5} alt="Forth slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bu6} alt="Fifth slide" fluid />
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className="pb-2">Personas</h3>
      <p>
        Let’s say Som Ying is a woman at age 21 who lives with her family. She’s
        get bored from cooking the same menu and ran out of ideas about making a
        dish. She also wants to use up her ingredients as much as she can. And
        her overall goal is to find recipes to cook for herself as well as for
        her siblings. So, her pain points are that she has various ingredients
        but still have no idea what menu to cook and do not satisfy the random
        menu function of other applications because she doesn't just want to
        randomize the menus, but also wants to add other constraints on top of
        it. For instance, she would like to limit the calories of generated
        menus.
      </p>
      <p>
        The second persona is an unemployed girl who stayed at home. She felt
        bored and wanted to find things to do to upskill her portfolio so she
        can be back in employment. However, the home environment prevented her
        from starting anything productive. For her demographic, she is 24 years
        old living in Bangkok, Thailand. She is still looking for a job and is
        single at the moment.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={p1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={p2} alt="Second slide" fluid />
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className="pb-2">User Journey Map</h3>
      <p>We separate our persona’s journey into 4 consecutive stages:</p>
      <p>
        The first stage is when the day starts in the morning. They wake up and
        perform their morning routines. In this stage, we set their action to
        eating breakfast and taking a shower. The users question themself what
        to eat in the morning, and they are happy to eat healthy food. Despite
        their happiness, they could not wake up on time and usually passed this
        stage of the journey. We found opportunities in providing suggestions
        about having breakfast and morning workouts.
      </p>
      <p>
        Next, our users move on to attending classes. They go online waiting for
        classes to attend. While they are waiting they question themself, why
        does it take so long to start the class, and muddle off various things?
        In attending classes, there are many happy moments from interesting
        topics in classes. However, when they are attending the class, they need
        to focus and participate. Therefore, we found an opportunity to relieve
        stress during the class in short breaks and cheer up students with
        trigger messages.
      </p>
      <p>
        In our third stage, after students had finished morning class, they had
        lunch. In this stage, they spend their time relaxing from the morning
        class. They had questions about what to eat for lunch and what to
        prepare for the coming up class. At this stage, they found out that they
        are happy by having good and healthy food. However, while they are
        relaxing, they are also worried about the upcoming class, what to
        prepare, and when to attend.
      </p>
      <p>
        Next is the last stage, their free time. In their free time, they
        usually find entertainment such as Netflix, snacks, showering, or any
        activities to chill themselves out and relax. During their free time,
        they question what they should do, their performance for today, and what
        to do next. They are happy to end the day and go to bed productively.
        They find it is difficult to do homework and study, and they also feel
        bad when they have too much free time. They feel unproductive.
        Therefore, the opportunity for us is to suggest their entertainment and
        make unusual daily entertainments.
      </p>
      <Image
        src={j1}
        className="rounded mx-auto d-block px-5"
        alt="User Journey Map"
        fluid
      />

      <h3 className="pb-2">The application design using Adobe XD</h3>
      <p>
        We designed a prototype of the mobile application for solving the
        problem of being bored during the lockdown due to the spread of
        COVID-19. In the application, users are able to view the contents
        available in the application as well as see the trending activities or
        the recommended tasks from their friends. Users can click on the content
        to view the description and can also search for content or friends on
        this tab. You can explore more of these in the Adobe XD link for the
        users below. The application is designed for both users and the admin of
        the application. For users, there are two choices for them to choose
        when they want to use BeatUp, which are application and website. The
        only difference between application and website is the sizing of the
        user interface that is resized to suit the screen size of computer and
        mobile. The users can upload some content after being approved by the
        admin. For the admin, only the phone-based design version is provided.
        The role of the admin is to monitor, manage, and approve uploader
        requests as well as uploaded content.
      </p>
      <p className="font-weight-bold">
        You can access all of the designs by clicking the link embedded in each
        of them.
      </p>
      <ul>
        <li>
          <Link
            to="https://xd.adobe.com/view/eebf1c65-3a1a-4b96-82c2-bd2ac79aa12b-bbec/"
            target="_blank"
          >
            Mobile design for the users
          </Link>
        </li>
        <li>
          <Link
            to="https://xd.adobe.com/view/e8db0b05-c6da-46a3-80e4-4f717fd80447-bd88/"
            target="_blank"
          >
            Website design for the users
          </Link>
        </li>
        <li>
          <Link
            to="https://xd.adobe.com/view/f73cb732-04db-46ed-9738-7abfcdf77f3a-a26f/"
            target="_blank"
          >
            Mobile design for the admin
          </Link>
        </li>
      </ul>
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
