import "./AddAssetPage.css";
import Api from "../../api/Api";
import { Title } from "../../components/Title/Title";
import { TbBulb } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useEffect, useState } from "react";

export const AddAssetPage = () => {
    
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);

    const [formData, setFormData] = useState({
        division : "",
        district : "",
        building_name : "",
        owner_name : "",
        owner_phone : "",
        address : "",
        floor_number : "",
        area_sqft : "",
    
        master_bedrooms : "",
        common_bedrooms : "",
        drawing_rooms : "",
        dining_rooms : "",
        kitchens : "",
        wash_rooms : "",
        balconies : "",
        store_rooms : "",
        servant_rooms : "",

        has_parking : "",
        has_lift_access : "",
        has_generator_backup : "",
        has_security_guard : "",
        is_furnished : "",
        price : "",
        available_from : "",

        image1 : "",
        image2 : "",
        image3 : "",
        image4 : "",
        image5 : "",
        image6 : "",
        image7 : "",
        image8 : "",
        image9 : "",
        image10 : "",
        video : "",
        description : "",
    });

    useEffect(() => {
        const getDivisions = async () => {
            try {
                const response = await Api.get(
                    "location/division/",
                    {
                        withCredentials:true
                    },
                );
                setDivisions(response.data.data);
            }
            catch(error){
                console.log(error.error);
            }
        }

        getDivisions();
    }, [])

    const handleDivisionChange = async (e) => {
        const divisionId = e.target.value;
        setFormData({
            ...formData,
            division: divisionId,
            district: ""
        });

        try {
            const response = await Api.get(
                `location/district/${divisionId}`,
                {
                        withCredentials:true
                },
            );
            setDistricts(response.data.data);
        }
        catch(error) {
            console.log(error.error)
        }
    }

    Title (" | Add Asset");
    
    return (
        <>
            <div className="container">
                <div className="container_body">
                    <div className="add_asset_form_body">
                        <form action="">

                            <label>Division</label>
                            <select id="" name="division" value={formData.division} onChange={handleDivisionChange}>

                                <option value="">Select Division</option>
                                { divisions.map((division) => (
                                    <option key={division.id} value={division.id}>{division.name}</option>
                                ))}
                            </select>
                            
                            <label>District</label>
                            <select id="" name="district" value={formData.district} onChange={handleDivisionChange}>
                                <option value="">Select District</option>
                                { districts.map((district) => (
                                    <option key={district.id} value={district.id}>{district.name}</option>
                                ))}
                            </select>

                            <input type="text" name="building_name" id="" placeholder="Apartment Title"/>
                            <input type="text" name="owner_name" id="" placeholder="Owner Name"/>
                            <input type="tel" name="owner_phone" id="" placeholder="Contact Number"/>
                            <textarea name="address" id="" placeholder="Address"></textarea>
                            <input type="number" name="floor_number" id="" min="0" placeholder="On the Floor"/>
                            <input type="number" name="area_sqft" id="" min="0" placeholder="Area Square Feet"/>
                            <input type="number" name="master_bedrooms" id="" min="0" placeholder="Master Bed"/>
                            <input type="number" name="common_bedrooms" id="" min="0" placeholder="Common Bed"/>
                            <input type="number" name="drawing_rooms" id="" min="0" placeholder="Drawing Room"/>
                            <input type="number" name="dining_rooms" id="" min="0" placeholder="Dining Room"/>
                            <input type="number" name="kitchens" id="" min="0" placeholder="Kitchen"/>
                            <input type="number" name="wash_rooms" id="" min="0" placeholder="Wash Room"/>
                            <input type="number" name="balconies" id="" min="0" placeholder="Balcony"/>
                            <input type="number" name="store_rooms" id="" min="0" placeholder="Store Room"/>
                            <input type="number" name="servant_rooms" id="" min="0" placeholder="Servant Room"/>
                            <label htmlFor="">Has Parking</label>
                            <input type="checkbox" name="has_parking" id="" placeholder="Has Parking"/>
                            <label htmlFor="">Has Lift</label>
                            <input type="checkbox" name="has_lift_access" id="" placeholder="Has Lift"/>
                            <label htmlFor="">Has Generator</label>
                            <input type="checkbox" name="has_generator_backup" id="" placeholder="Has Generator"/>
                            <label htmlFor="">Has Security Guard</label>
                            <input type="checkbox" name="has_security_guard" id="" placeholder="Has Security Guard"/>
                            <label htmlFor="">Is Furnished</label>
                            <input type="checkbox" name="is_furnished" id="" placeholder="Is Furnished"/>
                            <input type="number" name="price" id="" min="0" placeholder="Price"/>
                            <textarea name="description" id="" placeholder="Description"></textarea>
                            <input type="file" name="image1" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image2" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image3" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image4" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image5" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image6" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image7" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image8" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image9" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="image10" id="" placeholder="Upload Image" accept="image/*"></input>
                            <input type="file" name="video" id="" placeholder="Upload Video" accept="video/*"/>
                        </form>
                    </div>
                    <div className="aside_note">
                        <div className="aside_note_inside">
                            <div className="aside_note_top">
                                <TbBulb className="aside_note_icon" /> <h2>How to post your property</h2>
                            </div>
                            <ul>
                                <li>Give true and actual information</li>
                                <li>Enter all the details</li>
                                <li>Add property photo</li>
                                <li>Submit and Wait for review</li>
                            </ul>
                            <hr />
                            <div className="aside_note_top">
                                <MdOutlineSupportAgent className="aside_note_icon" /> <h2>Need help?</h2>
                            </div>
                                <p>01888333222</p>
                                <p>support@luxora.com</p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}