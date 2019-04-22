import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const HeaderContainer = () => {
      return <div className="top">
                  <div className="logo">
                        <ImageThumbnail />
                  </div>
                  <div className="heado">
                        <HeaderTitle />
                        <HeaderContent />
                  </div>
             </div>
}

export default HeaderContainer;