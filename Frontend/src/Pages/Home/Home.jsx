import React from 'react'
import HomeCourses from '../../Component/HomeCourses/HomeCourses'
import HomeGoals from '../../Component/HomeGoals/HomeGoals';
import HomeCategories from '../../Component/HomeCategories/HomeCategories';
import HomeExploreTop from '../../Component/HomeExploreTop/HomeExploreTop';
import HomeSkilled from '../../Component/HomeSkilled/HomeSkilled';
import HomeStudents from '../../Component/HomeStudents/HomeStudents';
import HomeWorkshops from '../../Component/HomeWorkshops/HomeWorkshops';
import HomeFuture from '../../Component/HomeFuture/HomeFuture';
import HomeOurPartners from '../../Component/HomeOurPartners/HomeOurPartners';
import HomeOurMoments from '../../Component/HomeOurMoments/HomeOurMoments';

const Home = () => {
  return (
    <div>
      <HomeCourses />
      <HomeGoals />
      <HomeCategories />
      <HomeExploreTop />
      <HomeSkilled />
      <HomeStudents />
      <HomeWorkshops />
      <HomeFuture />
      <HomeOurPartners />
      <HomeOurMoments />
      
    </div>
  );
};

export default Home;