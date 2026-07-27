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
            <div className='apartment_container'>
                <div className='apartment_aside'>
                    <div className='apartment_form_container'>
                        <form action="">
                            <select name="" id="">
                                <option value="">Division</option>
                                <option value="">Exmp Div 1</option>
                                <option value="">Exmp Div 2</option>
                            </select>

                            <select name="" id="">
                                <option value="">District</option>
                                <option value="">Exmp Dist 1</option>
                                <option value="">Exmp Dist 2</option>
                            </select>

                            <input type="number" id="" name="minPrice" placeholder="Minimum Price" />
                            <input type="number" placeholder="Max Price" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className='apartment_body'>
                    <div className='apartment'>
                        {properties.map((property) => ( 
                            <Properties 
                                key = {property.id} 
                                property = {property}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
