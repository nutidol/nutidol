import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ddpgDG from "../images/ddpg/ddpg_dg.png"
import ddpgAG from "../images/ddpg/ddpg_ag.png"

import { Carousel } from "react-bootstrap"
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
      <h2 className="text-center pt-4 pb-2">DDPG Bipedal Walker</h2>
      <p className="text-center text-secondary">April 2022</p>
      <p className="text-center text-secondary">
        Could we apply the Q-learning concept to the continuous space problem?
      </p>
      <h3 className="pb-2">Problem Definition </h3>
      <p>
        The problem is ‘BipedalWalker-v3’, and the main task is to teach the
        bipedal walker to walk through rough terrain. The bipedal walking robots
        are a humanoid robot model that has sparked a great deal of interest in
        the past few decades, which is a challenging task as our agent needs
        to run fast without tripping itself, leading to a massive drop in
        rewards. Below is the discussion of states, actions, transition
        dynamics, and the reward function for this problem.
      </p>
      <h4 className="pb-2 px-5">States</h4>
      <p className="px-5">
        The state space size for this problem is 24, which is continuous. States
        consist of several parameters, including hull angle speed, angular
        velocity, horizontal speed, vertical speed, the position of joints and
        joints angular speed, legs contact with the ground, and ten lidar
        rangefinder measurements. There are no coordinates in the state vector.
      </p>

      <h4 className="pb-2 px-5">Actions</h4>
      <p className="px-5">
        The size of the action space for this problem is 4. The BipedalWalker
        has two legs; each leg has two joints. These joints are hips and knees,
        each with the same action space in the range [-1, 1].
      </p>
      <h4 className="pb-2 px-5">Reward Function</h4>
      <p className="px-5">
        The maximum earning a reward is 300 points which increases
        proportionally to the distance the bipedal walker walks on the terrain.
        There are two negative rewards; one is proportional to the torque
        applied to the joint, and another is -100 for tumbling. Therefore,
        walking with minimal torque is optimal and avoids falling when the hull
        contacts the ground.
      </p>
      <h3 className="pb-2">Method</h3>
      <p>
        The DDPG is a model-free off-policy actor-critic algorithm for learning
        continuous actions that Q-Learning cannot handle. It applies the
        Actor-Critic algorithm to Q-Learning, allowing DDPG to tackle continuous
        action spaces. Like DQN, there are two core mechanisms with a slight
        adaptation in DDPG: replay memory and the periodically updated target
        network. The DDPG does not learn from the most recent state transition
        that the agent experiences for the replay memory. It keeps track of the
        total experiences and random samples from them at each timestep to get
        batches of memories and update the networks’ weights. The DDPG has two
        target networks since it is an Actor-Critic method. Each target network
        determines the value of the action specified by online networks: actor
        and critic networks. The values from target networks are then used to
        update the weights of the deep neural network. Therefore, this method
        involves four networks: actor, target actor, critic, and target critic
        networks.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={ddpgDG}
              alt="First slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={ddpgAG}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <p>
        The above DDPG algorithm and diagram demonstrate the steps to implement
        this model. To initialise the actor and critic network, we set the
        number of nodes in fully connected layers to be 400 and 300 with the
        ReLU activation function as recommended. While the actor network’s
        output channel number is set according to the action number using tanh
        as the activation function, the critic network’s final layer has only
        one node. The learning rate for actor and critic networks, alpha=0.0001
        and beta=0.001, respectively, is set according to the suggestion. This
        algorithm has three primary points:
      </p>
      <ul>
        <li>The update rule for the actor-network</li>
        <li>The update rule for the critic network</li>
        <li>The target networks with the soft copy concept</li>
      </ul>

      <h3 className="pb-2">Result</h3>
      <p>
        The full project report and algorithm can be found in my{" "}
        <Link to="https://github.com/nutidol/DDPGBipedalWalker">
          github
        </Link>.{" "}
        Below is the result after the robot learns how to walk with the DDPG
        agent compared to the random agent.
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
            src="https://www.youtube.com/embed/TDYcXUJmAB4"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title="cb"
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
