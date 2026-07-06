import './PropertyDetails.css'
import React, { useEffect, useState } from 'react';
import Api from '../../api/Api';
import { data, Link, useParams } from 'react-router-dom';
import { ImageURL } from '../../components/ImageURL/ImageURL';
import { MdEmojiTransportation } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const PropertyDetails = () => {
    const {id} = useParams();
    const [property, setPropersty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await Api.get(`apartment/detail/${id}/`,
                    {
                        withCredentials: true,
                    }
                );
                setPropersty(response.data.data)
                console.log(response)
            }
            catch(error) {
                console.error(error)
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) {
        return <h2>Loading...</h2>;
    }
    
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='container'>

            <div className='property_title'>
                <h2>{property.building_name}</h2>
                <h4>ID : </h4>
            </div>

            <div className='property_body'>

                <div className='property_body_left'>
                    <img src={ImageURL (property.image)} alt="" />
                </div>

                <div className='property_body_right'>
                    <div className='property_body_right_top'>
                        <h2>BDT {property.price}</h2> 
                        <h4>{property.area_sqft} sqft</h4>
                        <h4>BDT {property.price / property.area_sqft} / sqft</h4>
                        <hr />
                        <div className='property_body_right_button'>
                            <Link><MdEmojiTransportation className='property_icon'/> Request Visit</Link>
                        </div>
                        <div className='property_body_right_button'>
                            <Link><FaLock className='property_icon'/>Unlock Contact</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}
