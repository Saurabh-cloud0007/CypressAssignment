import AddtoCart from "../PageObject/Assignment.js";

describe('Add to cart and successfully place order', () => {
it('Add to Cart', () => {
    cy.visit('https://php811.funnelkitdemos.com/')
    const ln = new AddtoCart();
     ln.VerifytheFunnelDashboard();
     ln.clickAddtoCart();
     ln.clickOnCheckoutButton();
     ln.EnterEmailid("saurabhpratap199@gmail.com");   
     ln.EnterFirstName("saura");
     ln.EnterLastName("kumar");
     ln.EnterStreetAddress("Noida");
     ln.EnterCityAddress("Noida");
     ln.EnterPincode("201301");
     ln.SelectCountry("India");
     ln.clickonstate();
     ln.clickonYes();
     ln.ClickOnPlaceOrder();
     ln.ClickOnAddOrder();
    
  })
})