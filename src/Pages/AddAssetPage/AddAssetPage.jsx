import "./AddAssetPage.css";
import Api from "../../api/Api";
import { Title } from "../../components/Title/Title";
import { TbBulb } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

export const AddAssetPage = () => {
    
    

    Title (" | Add Asset");
    
    return (
        <>
        <div className="container">
            <div className="container_body">
                <div className="add_asset_form_body">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Apartment Title"/>
                        <input type="text" name="" id="" placeholder="Owner Name"/>
                        <input type="tel" name="" id="" placeholder="Contact Number"/>
                        <textarea name="" id="" placeholder="Address"></textarea>
                        <input type="number" name="" id="" min="0" placeholder="Floor"/>
                        <input type="number" name="" id="" min="0" placeholder="Area Square Feet"/>
                        <input type="number" name="" id="" min="0" placeholder="Master Bed"/>
                        <input type="number" name="" id="" min="0" placeholder="Common Bed"/>
                        <input type="number" name="" id="" min="0" placeholder="Drawing Room"/>
                        <input type="number" name="" id="" min="0" placeholder="Dining Room"/>
                        <input type="number" name="" id="" min="0" placeholder="Kitchen"/>
                        <input type="number" name="" id="" min="0" placeholder="Wash Room"/>
                        <input type="number" name="" id="" min="0" placeholder="Balcony"/>
                        <input type="number" name="" id="" min="0" placeholder="Store Room"/>
                        <input type="number" name="" id="" min="0" placeholder="Servant Room"/>
                        <label htmlFor="">Has Parking</label>
                        <input type="checkbox" name="" id="" placeholder="Has Parking"/>
                        <label htmlFor="">Has Lift</label>
                        <input type="checkbox" name="" id="" placeholder="Has Lift"/>
                        <label htmlFor="">Has Generator</label>
                        <input type="checkbox" name="" id="" placeholder="Has Generator"/>
                        <label htmlFor="">Has Security Guard</label>
                        <input type="checkbox" name="" id="" placeholder="Has Security Guard"/>
                        <label htmlFor="">Is Furnished</label>
                        <input type="checkbox" name="" id="" placeholder="Is Furnished"/>
                        <input type="number" name="" id="" min="0" placeholder="Price"/>
                        <textarea name="" id="" placeholder="Description"></textarea>
                        <input type="file" name="" id="" placeholder="Upload Video" accept="image/*"></input>
                        <input type="file" name="" id="" placeholder="Upload Video" accept="video/*"/>
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