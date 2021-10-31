import React from 'react'
import './styles.css'

const BlogCard = ({ image, profileImage, title, description, profile, maxLengthOfDescription, link, time, size, backgroundColor, cardRadius, infoRadius, marginTop, marginLeft, marginBottom, marginRight }) => {
  let cardSize = size ? size : 'medium'
  let cardWidth =  (cardSize==='small') ? '250px' : (cardSize==='medium' ? '350px' : '650px')
  let bg = backgroundColor ? backgroundColor : '#ffffff'
  let timeFont = (size==='small') ? '10px' : (size==='medium' ? '14px' : '16px')
  let titleFont = (size==='small') ? '16px' : (size==='medium' ? '20px' : '24px')
  let descFont = (size==='small') ? '12px' : (size==='medium' ? '15px' : '18px')
  let changeCardRadius = cardRadius ? cardRadius : '0'
  let changeInfoRadius = infoRadius ? infoRadius : '0'
  let changeInfoMarginTop = infoRadius ? infoRadius : '5'
  let changeMarginTop = marginTop ? marginTop : '0'
  let changeMarginRight = marginRight ? marginRight : '0'
  let changeMarginBottom = marginBottom ? marginBottom : '0'
  let changeMarginLeft = marginLeft ? marginLeft : '0'
  let changeMaxLengthOfDescription = maxLengthOfDescription ? maxLengthOfDescription : ( (cardSize==='small') ? '30' : (cardSize==='medium' ? '60' : '100') )
  let changeRightMarginLeft = profileImage ? '0' : '30'

  console.log(cardSize);
  return (
    <div className='blogCard' style={{ maxWidth: `${cardWidth}`, marginTop: `${changeMarginTop}px`, marginRight: `${changeMarginRight}px`, marginBottom: `${changeMarginBottom}px`, marginLeft: `${changeMarginLeft}px` }}>
      <div className="top">
      {image && <img src={image} alt={title} className="image"  style={{ borderRadius: `${changeCardRadius}px ${changeCardRadius}px 0px 0px` }} />}
      </div>
      <div className="bottom" style={{ backgroundColor: `${bg}`, borderRadius: `${changeInfoRadius}px ${changeInfoRadius}px ${changeCardRadius}px ${changeCardRadius}px`, marginTop: `-${changeInfoMarginTop}px`, }}>
        {profileImage && <div className="left">
          <img src={profileImage} alt={profile} className="profile" />
        </div>}
        <div className="right" style={{ marginLeft: `${changeRightMarginLeft}px`}}>
          <p style={{ fontSize: `${timeFont}`, fontWeight: 'lighter' }}>{time}</p>
          <a href={link} className="title" style={{ fontSize: `${titleFont}`, fontWeight: '600' }}>
            <p>{title}</p>
          </a>
          <p className="description" style={{ fontSize: `${descFont}`, fontWeight: '400' }}>{(description.length > changeMaxLengthOfDescription) ? ((description.substring(0, `${changeMaxLengthOfDescription}`)) + '...') : description}</p>
          
        </div>
      </div>
    </div>
  )
}

export default BlogCard
