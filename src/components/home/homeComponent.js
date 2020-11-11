import React from 'react';
import TopSectionComponent from '../top-section/topSectionComponent';
import GalleryComponent from '../gallery/galleryComponent';
import FollowersComponent from '../followers/followersComponent';
import FooterComponent from '../footer/footerComponent';
import { connect } from 'react-redux';

const home = (props) => {
  console.log(props)
  return (
    <div>
      <TopSectionComponent theme={props.theme}></TopSectionComponent>
      <GalleryComponent theme={props.theme}></GalleryComponent>
      <FollowersComponent theme={props.theme}></FollowersComponent>
      <FooterComponent theme={props.theme}></FooterComponent>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme
  }
}

export default connect(mapStateToProps)(home);