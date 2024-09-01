import React from 'react'
import Navbar from './Home/OtherUsersBlogs/UserNavBar'
import './AddProject/CSS/About.css'
import pic1 from './Images/member_1.jpg'
import pic2 from './Images/member_2.jpg'

function About() {
  return (
    <div>
        <Navbar />
      <h1 className='color'>About Us</h1>
      <main>
        <section class="intro">
            <h2>Welcome to Our Company</h2>
            <p>We are dedicated to providing the best services to our clients. Our team is composed of highly skilled professionals who are passionate about what they do.</p>
        </section>
        
        <section class="team">
            <h2>Meet the Team</h2>
            <div class="team-member">
                <img src={pic1} alt="Team Member 1"/>
                <h3>Jane Doe</h3>
                <p>Jane is our lead designer with over 10 years of experience in the industry.</p>
            </div>
            <div class="team-member">
                <img src={pic2} alt="Team Member 2"/>
                <h3>John Smith</h3>
                <p>John is our project manager who ensures everything runs smoothly.</p>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
    </footer>

    </div>
  )
}

export default About