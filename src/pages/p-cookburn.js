import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import cookburnOverview from "../images/cookburn/1.png"

import ds1 from "../images/cookburn/2.png"
import ds2 from "../images/cookburn/3.png"
import ds3 from "../images/cookburn/4.png"
import ds4 from "../images/cookburn/5.png"
import ds5 from "../images/cookburn/6.png"
import ds6 from "../images/cookburn/7.png"

import fn1 from "../images/cookburn/8.png"
import fn2 from "../images/cookburn/9.png"
import fn3 from "../images/cookburn/10.png"
import fn4 from "../images/cookburn/11.png"
import fn5 from "../images/cookburn/12.png"

import db1 from "../images/cookburn/13.png"
import db2 from "../images/cookburn/14.png"
import db3 from "../images/cookburn/15.png"
import db4 from "../images/cookburn/16.png"

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
      <h2 className="text-center pt-4 pb-2">Cook Burn Application</h2>
      <p className="text-center text-secondary">June 2020 ~ May 2021</p>
      <p className="text-center text-secondary">
        What if we don't know what to cook tonight? How could we make use of our
        leftover ingredients?
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        This application is my senior project during my undergraduate years. The
        goal of this project is to develop a mobile application, Cook Burn,
        delivering the users with their desired constraints based on their
        ingredients and their food preferences. It is the platform for
        generating recipes that encourages users to empty their excess
        ingredients and prepare meals effortlessly. The scope of the project is
        for anyone who has no idea of which menu to cook from their ingredients.
      </p>
      <Image
        src={cookburnOverview}
        className="class-img-top px-5"
        alt="Cook Burn"
        fluid
      />
      <h3 className="pb-2">Design process</h3>
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
      <blockquote>
        <p>
          The user interface design was created according to the user persona
          and its pain point.
        </p>
      </blockquote>
      <p>
        For the design, the main component of the application is the bottom tab
        navigation which is created to provide convenience to the user to switch
        between different routes. There are five bottom tabs navigation
        including home page, adding ingredients page, searching page, work out
        page, and setting page. Another important component is the sidebar where
        user can access their profile and log out from the application.
      </p>
      <Image src={ds1} className="class-img-top px-5" alt="Persona" fluid />
      <h4 className="pb-2 px-5">Home page</h4>
      <p className="px-5">
        It is represented by the home icon. From this page, users can see the
        suggested nutrition level to consume each day and the update of
        nutrition level from the app’s generated meal that the user has
        consumed. It also displays the recently cooked menus as well as the
        suggested workout.
      </p>

      <h4 className="pb-2 px-5">Adding ingredients page</h4>
      <p className="px-5">
        It is represented by the add icon. This page allows users to insert
        their ingredients as well as the quantity and unit. It can be updated at
        any time and the users can view the report of their current ingredients.
      </p>
      <Image
        src={ds2}
        className="class-img-top px-5"
        alt="Home and add ingredients page"
        fluid
      />
      <h4 className="pb-2 px-5">Searching page</h4>
      <p className="px-5">
        It is represented by the magnify icon. This page requires users to
        select the people that they want to generate the meal for. The profile
        of others could be added from the setting page. After selecting people
        for that meal, users can have a choice to either select the conditions
        for this meal or not. They can optimize some values such as the calories
        and other nutrition components. The last step before generating the meal
        is to insert the serving size of that meal. After clicking the generate
        button from this page, users shall view all the possible menus which
        also provide information of ingredients, lacking ingredients, recipe,
        and nutrients.
      </p>
      <Image
        src={ds3}
        className="class-img-top px-5"
        alt="Searching page"
        fluid
      />
      <h4 className="pb-2 px-5">Work out page</h4>
      <p className="px-5">
        This page is represented by the dumbbell icon which users can easily
        understand that this part is created for a set of workouts. The workout
        sets are generated based on the cooked menu that users had selected from
        the previous part. It is mainly designed according to the age of the
        user and the calories of each menu.
      </p>
      <Image
        src={ds4}
        className="class-img-top px-5"
        alt="Work out page"
        fluid
      />
      <h4 className="pb-2 px-5">Setting page</h4>
      <p className="px-5">
        The setting tab is represented by a gear icon. Users are able to view
        and edit their personal information as well as their food preferences.
        This information is collected when the user starts using the
        application, which is on the onboarding page. On this page, users are
        also able to create or edit information for other people for who they
        would like to generate a menu.
      </p>
      <Image
        src={ds5}
        className="class-img-top px-5"
        alt="Setting page"
        fluid
      />
      <h4 className="pb-2 px-5">Sidebar</h4>
      <p className="px-5">
        A sidebar is located on the top left of the application. This component
        allows users to view their username as well as the profile icon. The
        sign out button is located within this sidebar so that users can easily
        log out from the application, for the sake of personal information
        security ^^.
      </p>
      <Image src={ds6} className="class-img-top px-5" alt="Sidebar" fluid />
      <h3 className="pb-2">Overall approach</h3>
      <p>
        In this project, we decided to illustrate the application using React
        Native frameworks and create an API to provide functions to the
        application through AWS. Therefore, all of the backend services in this
        application will be on the cloud by utilizing the tools provided by AWS.
        Each function in the application was implemented by AWS lambda together
        with Amazon API Gateway to generate each API to interchange data between
        front and back. Amazon S3 was used to generate and store the image URL
        and Amazon Dynamodb was used to store the data in this application.
        Amazon S3 and Amazon Dynamodb were the storage services that were
        integrated with the lambda functions. Moreover, there is another Amazon
        service that was utilized in the front end development which is the AWS
        Amplify framework. It is used for user authentication and authorization.
        Later, these tools will be mentioned in the implementation of each main
        function.
      </p>
      <h3 className="pb-2">Function implementation</h3>
      <p>
        There are 4 main functions related to the application which are
        authenticate user, create a profile, add an ingredient, and search menu.
      </p>
      <h4 className="pb-2 px-5">Authenticate user</h4>
      <p className="px-5">
        For the authentication process, the AWS amplify framework was used in
        the frontend together with Amazon Cognito as the main authentication
        provider. To implement authentication flows, the authentication methods
        from AWS Amplify were called directly on the Auth class including
        signUp, signIn, forgotPassword, and signOut. Moreover, once the users
        are added to the user pool the Lambda function that was used to add the
        user’s authentication information such as email and username will be
        called immediately.
      </p>
      <h4 className="pb-2 px-5">Create profile</h4>
      <p className="px-5">
        To create a user process, inputs from users will be calculated and
        stored in both the inputs and the calculated information in the
        database. Those calculated data includes energy, fat, carbohydrate,
        protein, sugar sodium, and fibre Furthermore, the selected menus for
        taste and cuisine preferences are converted into numbers to be further
        used to score each recommended menu. For the taste preferences, users
        are defined by the level of taste buds. For the cuisine preferences,
        users are defined as individuals who admire Thai food or not.
      </p>
      <h4 className="pb-2 px-5">Add ingredient</h4>
      <p className="px-5">
        In the add ingredient page, some of the ingredients information such as
        images and units that were presented by ingredient types in the
        application’s interface were retrieved from the database. However, some
        of them from the searching bar were fetched from the open-source API as
        there are limited spaces to store the ingredients in the database. And
        the measurement of each ingredient was cleaned to provide users only
        U.S. and Metrics systems. And this process requires users to press the
        save button to save their ingredients information to the database so
        that it can be used in the next step.
      </p>
      <h4 className="pb-2 px-5">Search menu</h4>
      <p className="px-5">
        There are two parts that were retrieved from users which are the
        ingredient objects and the desired requirements for each search. For the
        ingredient objects, they were used to search for possible menus from
        open-source API. After retrieving the possible dishes based on the
        ingredients, these dishes are selected once again according to the daily
        basis of the user. If there are some recipes that exceed the daily
        intakes, they will be deducted from the possible menu lists. Then they
        are categorized based on the totality of the ingredients, taste
        preference, and cuisine preferences. The percentage of each factor is
        different since the totality of ingredients is the most important part
        that allows users to eliminate their excess ingredients, therefore, it
        has the most weight.
      </p>
      <p className="px-5">
        For the optimization, we introduced the objective function to minimize
        or maximize cooking duration as our goal here, while having other
        nutrition constraints with the minimum of 0 and maximum depending on the
        user’s daily limitation. With this model, it is possible to select a set
        of recipes that conform with our constraints, however, if the results
        from the model turn out to be an infeasible solution, our code will
        perform the selecting process based on the comparison of each constraint
        by adding the possible recipe into an array then return the most common
        one as the optimised menu instead. Moreover, that menu will be shown in
        the very first block of the search recipes page the rest are shown
        according to their score from weighting factors.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={fn1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={fn2}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={fn3} alt="Third slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={fn4} alt="Forth slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={fn5} alt="Fifth slide" fluid />
          </Carousel.Item>
        </Carousel>
      </div>

      <h3 className="pb-2">Database design</h3>
      <p>
        Each function was connected to the NoSQL database which is dynamoDB. For
        this kind of database, we’ve to first create the entity relation to see
        how each data was related to others.
      </p>
      <Image src={db1} className="class-img-top px-5" alt="Cook Burn" fluid />
      <p>
        After knowing this relation, the access pattern was created as in
        dynamoDB we retrieve the information as the item in a row based on the
        primary key. This access pattern is the process to analyse how the
        entity can be fetched and manipulated. Here is the example of the access
        pattern for this project, if we want to get the profile of the user,
        we’ll need userID and username.
      </p>
      <Image src={db2} className="class-img-top px-5" alt="Cook Burn" fluid />
      <p>
        And then we can later design the primary key. In this case, our primary
        key is a composite key that contains partition key (or PK) and sort key
        (or SK). This PK and SK will be designed based on the access pattern
        that we just created. These keys were used as the main query here.
      </p>
      <Image src={db3} className="class-img-top px-5" alt="Cook Burn" fluid />
      <p>
        However, there are some items that cannot be queried from just the
        primary key, so here we used the secondary index to change between one
        of the attributes and the sort key. For example, in our additional
        function which is the workout, we want to retrieve the user’s menu
        information that has the false workout status in order to show the
        recommended workout for each menu. So the new sort key is now the
        workout status. The reason for doing this is because we can reduce the
        query duration by preparing all the data that could be queried in a row
        or in this case based on the access pattern.
      </p>
      <Image src={db4} className="class-img-top px-5" alt="Cook Burn" fluid />
      <h3 className="pb-2">Application demo</h3>
      <p>
        Let’s walk through our application by pretending that Som Ying is our
        user.
      </p>
      <div>
        <div
          className="px-5"
          style={{
            position: "relative",
            paddingTop: "56.25%",
            marginBottom: "50px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/mhzyxke2IkU"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title='cb'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
