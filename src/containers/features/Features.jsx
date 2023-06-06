import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Aspire Leaders Program',
    text: 'Barnabas is an active participant in the Aspire Leaders Program, a professional development initiative founded at Harvard Business School. Through interactive workshops, coaching sessions, and access to a HarvardX course, Barnabas is enhancing his leadership skills and gaining valuable knowledge to excel as a leader in his future endeavors.',
  },
  {
    title: 'International Model United Nations ',
    text: 'Barnabas served as a Campus Ambassador for the International Model United Nations (IMUN). In this role, he recruited potential participants, assisted them with registration, and promoted the IMUN through various platforms. Additionally, Barnabas represented his assigned country as a delegate, advocating for its interests and engaging in diplomacy, negotiation, and debate.',
  },
  {
    title: 'Halcyon Healthcare',
    text: "Digital Marketer: During his time at Halcyon Healthcare Ltd, Barnabas worked as a Digital Marketer. He conducted social media marketing campaigns, designed visually appealing content for social media platforms, and analyzed campaign metrics to make data-driven adjustments for optimal results. Barnabas played a pivotal role in leveraging digital marketing strategies to enhance the company's online presence and engagement with the target audience.",
  },

];

const Features = () => (
  <div className="barna__features section__padding" id="features">
    <div className="barna__features-heading">
      <h1 className="gradient__text"> Work and Internship experince</h1>
      {/* <p>Get Started, take your business online </p> */}
    </div>
    <div className="barna__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;