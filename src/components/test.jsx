import Api from "../api/Api"

export async function GetAppartment() {
  try{
    const response = await Api.get("apartment/flat/");
    console.log(response.data);
    return response.data;
  }
  catch{
    throw new Error(err.message); 
  }
}