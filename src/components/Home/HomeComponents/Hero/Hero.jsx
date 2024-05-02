import React from 'react';
import {Link} from 'react-router-dom'
import abc from '../../../../PublicImages/birthday.webp'

function HeroSection() 
{
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Explore our new gift ideas!!
           
          </h1>
          <p className="mb-8 leading-relaxed">It emphasizes the concept of creating lasting memories through personalized gifts tailored for various occasions. The text invites visitors to explore the portal's offerings, showcasing unique presents designed to capture special moments like birthdays and anniversaries. Additionally, it encourages users to take action by either shopping now or learning more about the available options. Overall, the Hero Section aims to captivate visitors' attention, convey the portal's value proposition, and prompt engagement with its products and services.</p>
          <div className="flex justify-center">
            <Link to="/Product">
              <button className="inline-flex text-white bg-orange-950 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">Explore</button>
            </Link>
           </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={abc} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
