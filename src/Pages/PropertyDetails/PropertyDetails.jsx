import './PropertyDetails.css'
import React, { useEffect, useState } from 'react';
import Api from '../../api/Api';
import { data, useParams } from 'react-router-dom';
import { ImageURL } from '../../components/ImageURL/ImageURL';

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
                    <h2>{property.price}</h2>
                    <h4>{property.area_sqft}</h4>
                    <button>Request Visit</button>
                    <button>Unlock Contact</button>
                </div>

            </div>

        </div>
    </>
  )
}
