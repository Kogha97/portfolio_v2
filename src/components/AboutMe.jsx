import React from 'react'
import AboutMeImage from '../images/Screenshot_2023-11-13-10-18-10-560_com.miui.gallery.jpg'

export default function AboutMe() {
  return (
    <div className='aboutMe'>
        <div className='aboutContainer'>
        <h2>About me</h2>
        <p>Hello, let me tell you my story . . .</p>
        <p>In 2017, I embarked on my journey into the world of technology by enrolling in a Computer Engineering BSc program. At that time, I had always been a enthusiastic with computers and was deeply fascinated by the development of technology. However, as we often find in life, professors and experiences can either ignite or extinguish our passion. Unfortunately, in my case, it was the latter, I found myself disliking it and questioning my path. </p>
        <p>In the midst of my academic journey, I decided to follow other passions of mine and ended up graduating with Honors, 2020, in Physical Activity and Lifestyle.</p>
        <p>Working in the lifestyle industry helped me rediscover my true passion - coding. It became clear to me that technology and software development were not just interests but a calling. I realized that my love for computer was the path all along.</p>
        <p>After this discover I have started to work on my skills on my own and then enroled in a full stack web developer bootcamp that i recently graduated from and where I praticed and learned the fundamental skills </p>
        <div class="hard-skills">
            <ul>
                <li>HTML / CSS</li>
                <li>UI/UX</li>
                <li>GitHub</li>
                <li>Bootstrap</li>
                <li>Tailwindcss</li>
                <li>JavaScript</li>
                <li>React </li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </div>
        </div>
        <div className='imgContainer-aboutMe'>
            <img src={aboutMeImage} alt="" />

        </div>
    </div>
  )
}
