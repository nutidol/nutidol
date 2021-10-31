import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import eis1 from "../images/eis/1.png"
import eis2 from "../images/eis/2.png"
import eis3 from "../images/eis/3.png"
import eis4 from "../images/eis/4.png"
import eis5 from "../images/eis/5.png"
import eis6 from "../images/eis/6.png"
import eis7 from "../images/eis/7.png"
import eis8 from "../images/eis/8.png"
import eis9 from "../images/eis/9.png"
import eis10 from "../images/eis/10.png"
import eis11 from "../images/eis/11.png"
import eis12 from "../images/eis/12.png"
import eis13 from "../images/eis/13.png"
import eis14 from "../images/eis/14.png"
import eis15 from "../images/eis/15.png"
import eis16 from "../images/eis/16.png"
import eis17 from "../images/eis/17.png"
import eis18 from "../images/eis/18.png"
import eis19 from "../images/eis/19.png"
import eis20 from "../images/eis/20.png"
import eis21 from "../images/eis/21.png"

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
      <h2 className="text-center pt-4 pb-2">
        Receipt-Based Reverse Engineering Project
      </h2>
      <p className="text-center text-secondary">Aug 2020 ~ Nov 2020</p>
      <p className="text-center text-secondary">
        How can we apply the concept of Receipt-Based Reverse Engineering to
        D’ORO, one of the Thai coffee brands?
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        This project’s goal is to obtain some fact findings from the receipt of
        the coffee shop, D’ORO. We turn those facts into the possible issues
        that could be the consequences of them as well as provide the solutions
        utilising the open-source ERPNext.
      </p>

      <h3 className="pb-2">Knowing D’ORO</h3>
      <p>
        I’m sure everyone has bought something from a store. After making a
        payment you would get a paper receipt which sometime later we would
        throw it away. We don’t really care about what is on the paper, but
        actually, one receipt could really tell how one company operates. As you
        may see from the receipt from a coffee shop called D’oro below, the date
        the coffee is bought, a customer name, a level of the member, the names
        of the product, the points, the price and even the method used to pay
        this coffee. Little information like the method used to pay let us know
        that somehow the company would have to communicate with a particular
        payment service company.
      </p>
      <Image src={eis1} className="class-img-top px-5" alt="d1" fluid />
      <p>
        Let’s look into what we know more from the receipt. We see POS on the
        top, so we know they have a POS system. There are names, tiers and
        points, which means they must have a membership program. They could have
        some promotions and rewards through that membership program as well. If
        they have the customer’s information, they could also do direct
        marketing. There is a name of the coffee and quantity, which mean they
        could be able to collect the information of their sales. There is a type
        of payment, which mean there must have many payment methods available
        for the customer to use. Also, they need to have financial management
        behind that.
      </p>
      <div className="px-5">
        <Carousel fade prevLabel nextLabel variant="dark" interval="2000">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis2}
              alt="First slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis3}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis4}
              alt="Third slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis5}
              alt="Forth slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <p>
        So after seeing the receipt it leads to knowing some pieces of their
        ecosystem and even more searching for their whole ecosystem. And we have
        categorized Business Units and described them in 4 aspects.
      </p>
      <Image src={eis6} className="class-img-top px-5" alt="d2" fluid />

      <h4 className="pb-2 px-5">For goods and service</h4>
      <p className="px-5">
        At the very start, the raw materials provider, which are VPP, CARA, and
        raw material providers will prepare all the ordered materials such as
        the coffee beans, milk or sugar. After that, the raw material will be
        picked up by the transportation company in order to transport those
        items to the Golden cream company, which is the head office. The
        ingredients will then be transported to each store and branch.
      </p>

      <h4 className="pb-2 px-5">Money and credits</h4>
      <p className="px-5">
        In terms of money and credits, the money flows mainly in and out of
        Golden Cream Company. The money will be transferred to the
        transportation company in order to transport the raw material from the
        provider. In addition, D’Oro needs to pay the service fee to the
        delivery company. On the other hand, D’Oro gets money from customers
        when purchasing goods or products both from the shop and through the
        delivery service. However, the customer may purchase drinks and bakeries
        from the competitor’s shop.
      </p>
      <h4 className="pb-2 px-5">Information</h4>
      <p className="px-5">
        In terms of Information, when customers register and purchase products,
        D’Oro will collect this information, which will be later sent to Golden
        cream company. The information will also be sent to the advertisement
        company in order to craft the new advertisement that answers the needs
        of customers. Also, all the information will be sent to the IT system
        company for further usage.
      </p>

      <h4 className="pb-2 px-5">Intangible Values</h4>
      <p className="px-5">
        For Intangible Values, brand loyalty may be developed through the
        service and product that the customer continues to purchase from D’Oro
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000" variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis7}
              alt="First slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis8}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis9}
              alt="Third slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis10}
              alt="Forth slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <p>
        Next, let’s take a look at the D’ORO System Diagrams that our group
        created. This system diagram is the combination between data flow
        diagram (green part) and network diagram (grey part) showing the
        dataflow among 4 major sectors which are central head office, suppliers,
        warehouses, and branches where the data flow shows the big picture of
        how the company runs from head office to other company in the ecosystem,
        warehouse, and each shop. Yet show how the data flows through which
        nodes such as the shops that are responsible for sending the transaction
        information to the central head office.
      </p>
      <p>
        As you can see there are only 3 main suppliers which are raw material
        providers such as cups, napkins, the VPP company(for coffee), and CARA
        company(for bakery). The network diagram that shows the communication
        via the internet contains three main parts which are warehouses, central
        head office, and branches.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000" variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis11}
              alt="First slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis12}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <blockquote>
        <p>
          All the information we mentioned so far lets us know more about the
          DORO and we may see that some possible problems can occur within the
          organisation such as this linkage….
        </p>
      </blockquote>

      <h3 className="pb-2">Possible Issues</h3>
      <p>
        From the ecosystem and system diagram, you can see there can be a lot of
        information flowing from one place to another. The data from the
        receipt, the data from the company, Along the route, they collect all
        these data because they are useful. It can help improve their business.
        But this seems to be quite an amount of data collected, so how do they
        store this information, and how do they analyse it though? Because it
        would be useless if we have the information in the wrong place, or even
        with the wrong inputs. We do some more research and found out that the
        shop manager would be the one who collect the data. Manually. He or she
        may need to pull all the data together, then write or keying it down,
        and then send the data or report to the headquarters. But this is done
        by the action of a human. What if they make mistake??
      </p>
      <Image src={eis13} className="class-img-top px-5" alt="issue1" fluid />
      <p>
        What if they key wrong information? Wouldn’t that have an effect on the
        customer or even the shop itself? Imagine OVERKeying the number of
        orders down, with an extra zero from 10 to 100. It would be a waste.
        Imagine typing in the wrong information of how a customer makes a
        payment. Then we would later have to reconcile the service fee with the
        payment company. Or Imagine keying the wrong information about a
        customer, let’s say his birthday and sending him a birthday promotion on
        the wrong date… It would affect his experience with a coffee shop for
        sure.
      </p>
      <Image src={eis14} className="class-img-top px-5" alt="issue2" fluid />
      <h3 className="pb-2">Solution</h3>
      <p>
        So, how can D’Oro prevent this from happening, or how can D’oro improve
        its services? Can we turn everything online or can we do the digital
        transformation? Enterprise Resource Planning is one of the tools or
        technologies that many companies use to transform their business into
        the digital world.
      </p>
      <blockquote>
        <p>
          Starbuck, for instance, discovered that their annual costs for their
          supply chain was growing and over the same period annual sales at
          stores that were opened for at least one year dropped by 10%. This is
          before they started using the ERP system. Starbucks can then earn $500
          million in savings in the 2 years after the implementation of the ERP
          system. As it is able to manage the purchasing of goods from many
          coffee plants throughout the world, eliminating the need for paper
          forms and email, and automatically updating the purchases.
        </p>
      </blockquote>
      <p>
        From our perspective, the followings are the ERP modules that will suit
        the D’ORO system:
      </p>
      <h4 className="pb-2 px-5">Supply Chain Management</h4>
      <p className="px-5">
        With the Supply Chain Management, we can track each step in the movement
        of supplies and goods throughout the supply chain from suppliers to CARA
        and VPP to D’ORO shop and consumers. This module provides real-time data
        so that the manager can be able to make decisions based on the most
        up-to-date information. It can manage any materials or products returned
        for refund or replacement. And can also Reduce the overhead costs of the
        D’ORO company.
      </p>
      <h4 className="pb-2 px-5">Financial Management</h4>
      <p className="px-5">
        It helps a business to keep track of its overall finances. As there are
        multiple payment methods for customers at D’oro including rabbit line
        pay and QR code payment, it is important that D’oro have a record of all
        the transactions especially when they have to manage service fees with
        other companies. They have to ensure that the number of payments using
        rabbit line pay from D’oro data is the same as the data in Line Company.
      </p>
      <h4 className="pb-2 px-5">Customer Relationship Management</h4>
      <p className="px-5">
        CRM software can help organize the way that companies interact with
        customers, leading to satisfied customers. As we mentioned earlier that
        D’oro has a membership and point rewards system for their customers, it
        would be more efficient if D’oro had the records of each member,
        especially their birthday and favourite drinks. With the use of customer
        behaviour, D’oro can come up with a promotion that suits well with their
        customers.
      </p>
      <h4 className="pb-2 px-5">Human Resource Management</h4>
      <p className="px-5">
        HRM is meant for proper utilization of available skilled workforce and
        also to make efficient use of existing human resources in the
        organization. D’oro can keep the record of their general information
        employee for example position, and contact information and to ensure
        that their employee has all the skills needed for the coffee shop for
        example service and drinks preparation.
      </p>
      <div className="px-5">
        <Carousel variant="dark" prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis15}
              alt="First slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis16}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis17}
              alt="Third slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis18}
              alt="Forth slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={eis19}
              alt="Fifth slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <p>It can be summarised that applying the ERP package:</p>
      <p>
        <ul>
          <li>
            Can enhance the business report with better real-time information
            and a single integrated database for all business processes.
          </li>
          <li>
            Can have better customer services as the better access to customer
            information, faster response time.
          </li>
          <li>
            Can improve inventory cost as if the company is well planned then we
            could reduce the overhead cost.
          </li>

          <li>
            Can have better supply chain management as we could have effective
            demand forecasting and lean inventory.
          </li>

          <li>
            Can have better data security as we could reduce the data
            distribution across multiple servers.
          </li>
        </ul>
      </p>
      <blockquote>
        <p>
          Sap and Oracle are the top two ERP vendors in ERP market share.
          However, the licensed ERP is very expensive. Small companies like
          D’ORO may not be able to afford it. Fortunately, we have Open Source
          ERP where companies can implement the system at a cheap price and have
          similar modules to licensed ERP.
        </p>
      </blockquote>
      <p>
        After evaluating the packages with the criteria mentioned below in the
        image, ERPNext is the one is chosen as the best one to be used.
      </p>
      <Image src={eis20} className="class-img-top px-5" alt="criteria" fluid />
      <p>
        So now, let’s try to implement the ERPNext open-source package and do
        some setup.
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
            src="https://www.youtube.com/embed/zUPOGH_4t8A"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title="eis"
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
      <h3 className="pb-2">Lesson Learned</h3>
      <p>
        The lesson learned from this project is that we should Re-engineer the
        existing system first before we start doing the real implementation!!!
        which we all kind of did that during the course through each report
        which is understanding the DORO, data discovering from their receipt,
        exploring and knowing their ecosystem, understanding their system by
        creating system diagrams, creating the use case and ER diagram and
        selecting the package. To conclude my words here, because the process of
        reengineering provides a realistic understanding of the D’ORO and helps
        us to lead D’ORO to go for a successful ERP implementation by cutting
        extra cost and pacing the process at the same time that's why we have to
        reengineer… as our project name Receipt-Based Reverse Engineering of an
        Enterprise Information System.
      </p>
      <Image
        src={eis21}
        className="class-img-top px-5"
        alt="lesson learn"
        fluid
      />
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
