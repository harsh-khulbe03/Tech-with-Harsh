import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech With Harsh</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are lead tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>

          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
          perspiciatis quia et vitae incidunt placeat aperiam facilis soluta
          nostrum odio nemo fugiat eligendi omnis repudiandae quo repellat fuga
          laboriosam delectus at, sint accusamus cumque. Quaerat nihil
          reprehenderit modi tempora, enim dolore unde officia ipsa ullam
          blanditiis tenetur! Libero, quidem sint. Fugiat, cum cupiditate nulla
          voluptates unde est quibusdam laborum nihil sit maiores laudantium
          aliquam mollitia aliquid. Facilis, tenetur. Inventore commodi illum
          repellat neque, saepe cupiditate distinctio quasi placeat facilis
          architecto doloribus eos fugiat laborum deserunt ipsam asperiores
          veniam quis accusamus velit labore omnis similique sequi! Numquam
          vitae voluptatibus earum corporis?
        </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>

                <div style={{
                    animationDelay:"0.3s" ,
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                

                <div style={{
                    animationDelay:"0.5s" ,
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s" ,
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"1s" ,
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>



            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
