import React from 'react'
import detailBannerImage from '../../assets/detailBannerImage.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import'../../components/Dropdown/Dropdown.css'
import './Details.css'
import { guidelines } from '../../data/guidelines'
import Banner from '../../components/Banner/Banner'

export default function Details() {
  return (
    <>
    <Banner bannerImage={detailBannerImage}/>
    <div className='dropdown__wrapper'>
      {guidelines.map((g) => (
        <Dropdown key={g.id} title={g.title} modifier="">
          <p className='dropdown__body__text'>{g.description}</p>
        </Dropdown>
      ))}
    </div>
    </>
  )
}
