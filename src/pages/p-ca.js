import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import poster from "../images/czavcd.png"
import { Image } from "react-bootstrap"

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
      <h2 className="text-center pt-4 pb-2">CheezyAvocado</h2>
      <p className="text-center text-secondary">Jan 2020 ~ May 2020</p>
      <p className="text-center text-secondary">
        Can we actually have a smart hotel in the near future?
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        To enhance the hotel room service, most hotels work hard on improving
        the hotel delivery service relying on hotel staff. It is common to see
        human staff deliver room services when the customers request any orders
        such as food and hotel amenities to hotel guests. However, this creates
        the following problem: Request being centralized at the reception,
        Efficiency, and Human resource allocation. When customers would like to
        order the extra items from their room, they have to call the front
        reception and wait for the staff to carry the items to their room. Many
        people feel uncomfortable because they are guilty and shame to interrupt
        the staff. Therefore, the customers may give up the order and the hotel
        might lose the benefits from losing the order. Avocabot would help to
        deliver any items to the customers whatever and whenever they want
        without interrupting the front reception.
      </p>
      <p>
        Sometimes the overload problem occurs at the reception. When many
        customers want to order the food and amenities at the same time. The
        orders are loaded at the front, the receptor might miss some orders
        which might cause consequences. With Avocabot, the orders will be
        recorded in the system. The efficiency of the system will be enhanced to
        a higher standard. Human resources are the key part of the success of
        the business. Hotels can totally reallocate human resources, and
        allocate them to be used more efficiently. When wasting human staff to
        only do the labour work, some abilities might be wasted even though the
        hotel can manage to gain more benefits from the missing capabilities.
      </p>

      <blockquote>
        <p>
          Avocabot aims to solve these problems by automating in-door logistics
          and providing a user interface that the fingertip can resolve for any
          customer. Customers can only sit in their room and experience an extra
          delivery system like our robot. The system overview is, therefore, a
          robot that provides delivery services to customers such as food
          delivery, laundry, and amenities.
        </p>
      </blockquote>

      <h3 className="pb-2">Problem Statement</h3>
      <h4 className="pb-2 px-5">Human Error</h4>
      <p className="px-5">
        Human error is one of the biggest but detailed problems which could
        happen every day. For instance, the error due to the workload
        centralizing at hotel reception causes the receptor to miss the hotel
        customer’s request or order.
      </p>
      <h4 className="pb-2 px-5">Delivery Service Efficiency</h4>
      <p className="px-5">
        Delivery service efficiency could be enhanced. To make one order, the
        customer makes a request to the hotel reception, in the simplest way,
        through a phone call. At this process, they need to wait for the
        reception to take the call which could take a long time due to
        centralization of work at the reception and the reception might miss the
        order as mentioned in 1. When the recipient accepts the call, the
        customers make a request for services such as ordering the food or
        asking for toiletries. The reception will take the order and send it to
        the department that is responsible for it, either through a phone call
        or hotel systems. After the specific departments have prepared for the
        service needed, the department either deliver the order themselves or
        call the reception to send the people to make a delivery. This shows how
        much time could be wasted through the process even though some processes
        could be cut out.
      </p>
      <h4 className="pb-2 px-5">Customer Dissatisfaction</h4>
      <p className="px-5">
        Customer dissatisfaction could occur due to human error by missing the
        wrong order, the services are very slow due to centralization or the
        wrong delivery made. Some groups of customers dissatisfaction could lead
        to bad reviews. The decrease in-room services requests lead to two more
        problems, a decrease in hotel revenue and the hardship in managing the
        resources between room services and other processes. Customer
        dissatisfaction could also occur due to the misbehaviour of the worker
        which comes from various factors.
      </p>
      <Image
        src={poster}
        className="class-img-top px-5"
        alt="poster"
        fluid
      />

      <h3 className="pb-2">Objective</h3>
      <p>
      Create an automated system that allows hotel guests to order different services, such as room service and laundry, through a web application. The services are delivered to the guest rooms by a robot called “Avocabot”. You can also find the summary and final outcome of the project in the clip below. 

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
            src="https://www.youtube.com/embed/ku1EKh2EWZY"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title="ca"
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
