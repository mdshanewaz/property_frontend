import "./AddAssetPage.css";
import Api from "../../api/Api";
import { Title } from "../../components/Title/Title";
import { TbBulb } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useEffect, useState } from "react";
import { ShowPopUp } from "../../components/ShowPopUp/ShowPopUp";
import { useNavigate } from "react-router-dom";

export const AddAssetPage = () => {
    const navigate = useNavigate();
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);

    const[showPopup, setPopup] = useState({
        show:false,
        message:'',
    });

    const initialFormData = {
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

        has_parking : false,
        has_lift_access : false,
        has_generator_backup : false,
        has_security_guard : false,
        is_furnished : false,
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
    };

    const [formData, setFormData] = useState(initialFormData);

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

    const handleDistrictChange = async(e) => {
        const districtId = e.target.value;
        setFormData({
            ...formData,
            district: districtId,
        });
    }

    const handleSubmit= async(e)=> {
        e.preventDefault();

        const field_data = new FormData();

        Object.keys(formData).forEach(key => {
            field_data.append(key, formData[key]);
        })

        try {
            // Axios automatically stringifies objects to JSON
            const response = await Api.post(
                'apartment/create/',
                field_data,
                {
                    withCredentials:true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }, 
            );

            if(response.status==201) {
                setPopup({
                    show: true,
                    message: response.data.message,
                });

                setFormData(initialFormData);

                setTimeout(() => {
                    navigate('/profile/assets', {replace:true});
                }, 5000);
            }


                // alert(`Created user with ID: ${response.data}`);
            } 
            catch (error) {
                console.log(error);
        }};
    
    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: files[0]
        }));
    };

    Title (" | Add Asset");
    
    return (
        <>
            <div className="container">
                <div className="container_body">
                    <div className="add_asset_form_body">
                        <form onSubmit={handleSubmit}>

                            <label>Division</label>
                            <select id="" name="division" value={formData.division} onChange={handleDivisionChange} required>

                                <option value="">Select Division</option>
                                { divisions.map((division) => (
                                    <option key={division.id} value={division.id}>{division.name}</option>
                                ))}
                            </select>
                            
                            <label>District</label>
                            <select id="" name="district" value={formData.district} onChange={handleDistrictChange} required>
                                <option value="">Select District</option>
                                { districts.map((district) => (
                                    <option key={district.id} value={district.id}>{district.name}</option>
                                ))}
                            </select>

                            <input type="text" name="building_name" id="" placeholder="Apartment Title" value={formData.building_name} onChange={handleChange} required/>
                            <input type="text" name="owner_name" id="" placeholder="Owner Name" value={formData.owner_name} onChange={handleChange} required/>
                            <input type="tel" name="owner_phone" id="" placeholder="Contact Number" value={formData.owner_phone} onChange={handleChange} required/>
                            <textarea name="address" id="" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>

                            <input type="number" name="floor_number" id="" min="0" placeholder="On the Floor" value={formData.floor_number} onChange={handleChange} required/>
                            <input type="number" name="area_sqft" id="" min="0" placeholder="Area Square Feet" value={formData.area_sqft} onChange={handleChange} required/>
                            <input type="number" name="master_bedrooms" id="" min="0" placeholder="Master Bed" value={formData.master_bedrooms} onChange={handleChange} required/>
                            <input type="number" name="common_bedrooms" id="" min="0" placeholder="Common Bed" value={formData.common_bedrooms} onChange={handleChange} required/>
                            <input type="number" name="drawing_rooms" id="" min="0" placeholder="Drawing Room" value={formData.drawing_rooms} onChange={handleChange} required/>
                            <input type="number" name="dining_rooms" id="" min="0" placeholder="Dining Room" value={formData.dining_rooms} onChange={handleChange} required/>
                            <input type="number" name="kitchens" id="" min="0" placeholder="Kitchen" value={formData.kitchens} onChange={handleChange} required/>
                            <input type="number" name="wash_rooms" id="" min="0" placeholder="Wash Room" value={formData.wash_rooms} onChange={handleChange} required/>
                            <input type="number" name="balconies" id="" min="0" placeholder="Balcony" value={formData.balconies} onChange={handleChange} required/>
                            <input type="number" name="store_rooms" id="" min="0" placeholder="Store Room" value={formData.store_rooms} onChange={handleChange} required/>
                            <input type="number" name="servant_rooms" id="" min="0" placeholder="Servant Room" value={formData.servant_rooms} onChange={handleChange} required/>

                            <label htmlFor="">Has Parking</label>
                            <input type="checkbox" placeholder="Has Parking" name="has_parking" checked={formData.has_parking} onChange={handleChange} />
                            <label htmlFor="">Has Lift</label>
                            <input type="checkbox" placeholder="Has Lift" name="has_lift_access" checked={formData.has_lift_access} onChange={handleChange} />
                            <label htmlFor="">Has Generator</label>
                            <input type="checkbox" placeholder="Has Generator" name="has_generator_backup" checked={formData.has_generator_backup} onChange={handleChange}/>
                            <label htmlFor="">Has Security Guard</label>
                            <input type="checkbox" placeholder="Has Security Guard" name="has_security_guard" checked={formData.has_security_guard} onChange={handleChange}/>
                            <label htmlFor="">Is Furnished</label>
                            <input type="checkbox" placeholder="Is Furnished" name="is_furnished" checked={formData.is_furnished} onChange={handleChange}/>

                            <input type="number" name="price" min="0" placeholder="Price" value={formData.price} onChange={handleChange} required/>
                            <input type="date" name="available_from" placeholder="Available Form" value={formData.available_from} onChange={handleChange} required/>
                            <textarea name="description" id="" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>

                            <input type="file" name="image1" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange} required/>
                            <input type="file" name="image2" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange} required/>
                            <input type="file" name="image3" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange} required/>
                            <input type="file" name="image4" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image5" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image6" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image7" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image8" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image9" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="image10" id="" placeholder="Upload Image" accept="image/*" onChange={handleFileChange}/>
                            <input type="file" name="video" id="" placeholder="Upload Video" accept="video/*" onChange={handleFileChange}/>
                            <button type="submit">Submit Apartment</button>
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
                <ShowPopUp 
                    show={showPopup.show}
                    message={showPopup.message}
                    onClose={() => {
                        setPopup({
                            ...showPopup,
                            show:false,
                        })
                    }}
                />
            </div>
        </>
    );
}