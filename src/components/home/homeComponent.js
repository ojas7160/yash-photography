import React from 'react';
import TopSectionComponent from '../top-section/topSectionComponent';
import GalleryComponent from '../gallery/galleryComponent';
import FollowersComponent from '../followers/followersComponent';
import FooterComponent from '../footer/footerComponent';

const home = (props) => (
  <div>
    <TopSectionComponent></TopSectionComponent>
    <GalleryComponent></GalleryComponent>
    <FollowersComponent></FollowersComponent>
    <FooterComponent></FooterComponent>
  </div>
);
export default home;