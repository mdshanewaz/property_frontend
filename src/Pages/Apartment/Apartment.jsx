import React from 'react';
import './Apartment.css';
import Api from '../../api/Api';
import { Title } from '../../components/Title/Title';
import { Properties } from '../../components/Properties/Properties';
import { useEffect, useState } from 'react';

export const Apartment = () => {

    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get("apartment/flat/");
                setProperties(response.data.data);
            }
            catch(error){
                console.log(error.error);
            }
        }

        fetchData();
    }, [])

    Title (" | Apartments");

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className='container'>
            <div>
                <div className='apartment_aside'>
                    <div></div>
                </div>
                <div className='apartment_body'>
                    <div>
                        <div className="featured_body">
                            {properties.map((property) => ( 
                                <Properties 
                                    key = {property.id} 
                                    property = {property}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
