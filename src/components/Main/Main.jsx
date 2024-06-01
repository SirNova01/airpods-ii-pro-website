import React, { useEffect, useRef } from 'react';
import './Main.css'
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
// import '../../plugins/animation.gsap';
// import '../../plugins/debug.addIndicators';

const frameCount = 147;
const frameCount2 = 131;

const currentFrame = (index) => 
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`;

const currentFrame2 = (index) => 
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${(index + 1).toString().padStart(4, '0')}.jpg`;

const AnimationComponent = () => {
  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);
  const airpods = useRef({ frame: 0 }).current;
  const headturn = useRef({ frame: 0 }).current;

  useEffect(() => {
    const section1 = document.querySelector(".section-01");
    const mainText = section1.querySelector(".main-elem");
    const msgText1 = section1.querySelector(".msg-elem-01");
    const msgText2 = section1.querySelector(".msg-elem-02");
    const msgText3 = section1.querySelector(".msg-elem-03");
    const msgText4 = section1.querySelector(".msg-elem-04");

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 1158;
    canvas.height = 770;

    const images = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    };

    let tl0 = gsap.timeline();
    tl0
      .add('start0')
      .fromTo(canvas, { opacity: 0 }, { duration: 2, opacity: 1 }, 'start0')
      .fromTo(mainText, { opacity: 0 }, { duration: 1.5, delay: 0.75, opacity: 1 }, 'start0');

    let tl1 = gsap.timeline();
    tl1
      .add('start0')
      .to(mainText, { duration: 5, y: -500 }, 'start0')
      .to(airpods, {
        duration: 8,
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        onUpdate: render,
      }, 'start0')
      .add('start1')
      .to(msgText1, { duration: 3.5, opacity: 1, y: -50 }, 'start1')
      .to(msgText1, { duration: 3.5, opacity: 0, y: -100 })
      .add('start2')
      .to(msgText2, { duration: 3.5, opacity: 1, y: -50 }, 'start2')
      .to(msgText2, { duration: 3.5, opacity: 0, y: -100 })
      .add('start3')
      .to(msgText3, { duration: 3.5, opacity: 1, y: -50 }, 'start3')
      .to(msgText3, { duration: 3.5, opacity: 0, y: -100 })
      .add('start4')
      .to(msgText4, { duration: 3.5, opacity: 1, y: -50 }, 'start4')
      .to(msgText4, { duration: 3.5, opacity: 0, y: -100 })
      .to(airpods, {
        duration: 1,
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        onUpdate: render,
      })
      .to(canvas, { duration: 36, scale: 0.5, ease: 'Power1.easeIn' }, 'start0');

    let controller = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({
      triggerElement: '.section-01',
      duration: '4000',
      triggerHook: 0,
    })
      .setTween(tl1)
      .setPin('.section-01')
      .addTo(controller);

    images[0].onload = render;

    const section2 = document.querySelector(".section-02");
    const msgText = section2.querySelector(".msg-elem");

    const canvas2 = canvas2Ref.current;
    const context2 = canvas2.getContext('2d');
    canvas2.width = 1458;
    canvas2.height = 820;

    const images2 = [];
    for (let i = 0; i < frameCount2; i++) {
      const img = new Image();
      img.src = currentFrame2(i);
      images2.push(img);
    }

    const render2 = () => {
      context2.clearRect(0, 0, canvas2.width, canvas2.height);
      context2.drawImage(images2[headturn.frame], 0, 0);
    };

    let tl2 = gsap.timeline();
    tl2
      .add('start0')
      .to(msgText, { delay: 11, duration: 3.5, opacity: 1, y: -50 }, 'start0')
      .to(msgText, { duration: 3.5, opacity: 0, y: -100 })
      .to(headturn, {
        duration: 19,
        frame: frameCount2 - 1,
        snap: 'frame',
        ease: 'none',
        onUpdate: render2,
      }, 'start0');

    let scene2 = new ScrollMagic.Scene({
      triggerElement: '.section-02',
      duration: '4000',
      triggerHook: 0,
    })
      .setTween(tl2)
      .setPin('.section-02')
      .addTo(controller);

    images2[0].onload = render2;
  }, [airpods, headturn]);

  return (
    <main>
      <section className="section-01 scroll-section hero-lightpass">
        <div className="main-elem">
          <h1>AirPods Pro</h1>
          <a href="#">Watch <span>Jump</span> <ion-icon name="play-circle-outline"></ion-icon></a>
        </div>
        <div className="canvas-elem">
          <canvas ref={canvasRef} id="hero-lightpass"></canvas>
        </div>
        <div className="msg-elem msg-elem-01">
          <p>Active Noise Cancellation <br />for immersive sound.</p>
        </div>
        <div className="msg-elem msg-elem-02">
          <p>Transparency mode for hearing <br />what's happening around you.</p>
        </div>
        <div className="msg-elem msg-elem-03">
          <p>A customisable fit <br />for all-day comfort.</p>
        </div>
        <div className="msg-elem msg-elem-04">
          <p>Magic like you've never heard.</p>
        </div>
      </section>

      <section className="section-02 scroll-section head-bob-turn">
        <div className="msg-elem">
          <small>Comfort</small>
          <h2>Arrival of the fittest.</h2>
        </div>
        <div className="canvas-elem">
          <canvas ref={canvas2Ref} id="head-bob-turn"></canvas>
        </div>
      </section>

      <section className="section-04 static-section explode-tips">
        <div className="section-04-1">
          <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/04-explode-tips/0000.jpg" alt="" />
          <div className="text">
            We refined the details of comfort, creating a new class of in-ear headphones with a customisable fit that forms an exceptional seal for Active Noise Cancellation. You'll feel your music, not your headphones.
          </div>
        </div>

        <div className="section-04-2">
          <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/04-explode-tips/0080.jpg" alt="" />
          <div className="text">
            Choose from three sizes of soft, flexible silicone tips that click into place. Find the best fit — and get the best sound — by using the Ear Tip Fit Test.
          </div>
        </div>

        <div className="section-04-3">
          <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/04-explode-tips/0138.jpg" alt="" />
          <div className="text">
            These internally tapered tips conform to your ear shape, keeping AirPods Pro secure. And with vents helping equalise pressure, you feel like there's nothing in your ears.
          </div>
        </div>
      </section>

      <section className="section-05 static-section flip-for-nc">
        <div className="section-05-1">
          <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/05-flip-for-nc/0026.jpg" alt="" />
          <div className="text">
            <p>Active Noise Cancellation</p>
            <h1>Sound that cuts <br />out the noise.</h1>
          </div>
        </div>

        <div className="section-05-2">
          <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/05-flip-for-nc/0054.jpg" alt="" />
          <div className="text">
            AirPods Pro are the only in-ear headphones with Active Noise Cancellation that continuously adapts to the geometry of your ear and the fit of the ear tips — blocking out the world so you can focus on what you're listening to.
          </div>
        </div>
      </section>

      <section className="section-06 static-section transparency-head">
        <img src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/06-transparency-head/0008.jpg" alt="" />
        <div className="text">
          <p>Want to hear what's happening around you? Just press and hold the force sensor on the stem to move between Active Noise Cancellation and Transparency mode — which lets outside sound in, and allows things to sound and feel natural when you're talking to people nearby.</p>
          <p>And when you're talking face to face with someone in a noisy environment, Conversation Boost helps you hear more clearly by focusing on the sound of the person directly in front of you.</p>
        </div>
      </section>
    </main>
  );
};

export default AnimationComponent;
