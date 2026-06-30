import React from 'react';
import './Properties.css'
import { Link } from 'react-router-dom';
import { ImageURL } from '../ImageURL/ImageURL';

export const Properties = ({property}) => {

  return (
    <>
        <div className="property_card">
            <div>
                <img className='property_img' src={ImageURL (property.image)} alt="img" /></div>
            <div className='property_card_body'>
                <div><Link to={`/property/${property.id}`}><h4>{property.building_name}</h4></Link></div>
            <div><h3>৳ {property.price}</h3></div>
            <div>
                <p>
                    {`${property.master_bedrooms + property.common_bedrooms + property.living_bedrooms} Beds | `}
                    {`${property.washrooms} Baths | `}
                    {property.area_sqft} sq.ft | {property.district}
                </p>
            </div>
            </div>
        </div>
    </>
  )
}
