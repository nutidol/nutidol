import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import nid1 from "../images/noidea/1.png"
import nid2 from "../images/noidea/2.png"
import nid3 from "../images/noidea/3.png"

import { Image } from "react-bootstrap"
import { Link } from "gatsby"

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
      <h2 className="text-center pt-4 pb-2">Deer With No Eyes</h2>
      <p className="text-center text-secondary">June 2018 ~ Dec 2018</p>

      <h3 className="pb-2">Overview</h3>
      <p>
        Deer With No Eye (No I Dea) is a quiz app that allows students to do the
        quiz in their free time, to review the lessons that students may not
        catch up in the class before taking the quiz, and to share their scores
        on Facebook instantly. This application was created using Android
        Studio, the official integrated development environment for Google's
        Android operating system. We, therefore, emulated this android
        application through the Android Studio.
      </p>
      <p>
        Student needs to have an account in order to take the quiz. Therefore,
        the first time users need to create the account by signing up (insert
        username, password, and email) then the second time onward the user will
        be asked to sign in using their username. The application also allows
        users to link their Facebook. That’s mean after finishing the quiz,
        users are able to share the scores on their Facebook account.
      </p>
      <Image src={nid1} className="class-img-top px-5" alt="overview" fluid />

      <p>
        After logging in, users are directed to the Homepage which contains a
        greeting “Hi” followed by the Facebook name of whoever login lately and
        also the user’s Facebook profile picture. This page contains every
        button that will redirect users to whether quiz1, quiz2 or a tutorial
        video. During the quiz, the jeopardy song will turn on and the 60
        seconds timer will clock down for each question.
      </p>
      <Image src={nid2} className="class-img-top px-5" alt="feature1" fluid />
      <p>
        After finishing the quiz, the score will show up and users can either
        share the score on Facebook or just log out.
      </p>
      <Image src={nid3} className="class-img-top px-5" alt="feature2" fluid />

      <h3 className="pb-2">Components</h3>
      <h4 className="pb-2 px-5">Firebase</h4>
      <p className="px-5">
        This NoSQL database is used to sign up for a new user, sign in for the
        old user, store the users’ information, and store the set of questions.
      </p>
      <h4 className="pb-2 px-5">Facebook</h4>
      <p className="px-5">
        Allow users to log in, log out, and share their score to the page, or
        even post their game’s result. You are also welcome to visit our
        application’s{" "}
        <Link
          to="https://www.facebook.com/Deer-With-No-Eye-2243532172634160/?ref=pages_you_manage
"
        >
          {" "}
          Facebook page.
        </Link>{" "}
      </p>
      <h4 className="pb-2 px-5">Video and Music content</h4>
      <p className="px-5">
        Other than the quizzes in this application, users can find the tutorial
        video related to Math quizzes in the application. Each quiz question
        contains 60 seconds timer with
        <Link to="https://www.youtube.com/watch?v=73tGe3JE5IU&ab_channel=GamingVideosbysodabuster26">
          {" "}
          the Jeopardy song 
        </Link>{" "}
        that can increase the users’ creativity in Math and hopefully help them
        focus on the quizzes,
      </p>
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
