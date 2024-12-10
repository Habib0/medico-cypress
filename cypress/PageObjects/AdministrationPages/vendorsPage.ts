import sharedPage from "../sharedPage";
class vendorsPage extends sharedPage{
    addVendorBtn:string;
    nameInput:string;
    addressInput:string
constructor(){
    super()
    this.addVendorBtn='//button[@type="button" and text()=" New Vendor "]'
    this.nameInput='[name="name"]'
    this.addressInput='[name="address"]'
    }
}
export default vendorsPage;