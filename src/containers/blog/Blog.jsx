import React from 'react';
import Article from '../../components/article/Article';
import { y20, datascience, changemaker, web , research } from './imports';
import './blog.css';

const Blog = () => (
  <div className="barna__blog section__padding" id="blog">
    <div className="barna__blog-heading">
      <h1 className="gradient__text"> Achievement Tapestry:<br /> Weaving Dreams into Reality </h1>
    </div>
    <div className="barna__blog-container">
      <div className="barna__blog-container_groupA">
        <Article imgUrl={y20} date="" text="Empowering the Next Generation: Barnabas Muuo Peter's Journey in Youth Leadership"/>
      </div>
      <div className="barna__blog-container_groupB">
        <Article imgUrl={datascience} date="Coming soon!" text="Unleashing the Power of Data: Data Science" />
        <Article imgUrl={changemaker} date="Coming soon!" text="Driving Change : Community Impact and Changemaker" />
        <Article imgUrl={web} date="Coming soon!" text="Transforming Ideas into Digital Experiences: Web Development"/>
        <Article imgUrl={research} date="Coming soon!" text="Exploring the Frontiers of Knowledge:Research and Discovery" />
      </div>
    </div>
  </div>
);

export default Blog;