import "./Featured.css";
import Api from "../../../api/Api";
import { Link } from "react-router-dom";
import { Properties } from "../../Properties/Properties";
import { useEffect, useState } from "react";

export const Featured = () => {

    const [properties, setProperties] = useState([]);

    useEffect (() => {
        const fetchProperties = async () => {
            try {
                const response = await Api.get("apartment/flat/");
                console.log(response.data.data);
                setProperties(response.data.data);
            }

            catch (error) {
                console.log(error.error);
            }
        }
        fetchProperties();
    }, []);

    return(
        <>
            <section className="container">
                <div className="feature_top">
                    <div className="featured_heading"><h2>Featured Properties</h2></div>
                    <div className="featured_button"> <Link> View All |  </Link></div>
                </div>
                <div className="featured_body">
                    {properties.map((property) => ( 
                        <Properties 
                            key = {property.id} 
                            property = {property}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}