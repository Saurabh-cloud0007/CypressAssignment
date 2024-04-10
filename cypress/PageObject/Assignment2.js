class AddtoCart {

txtTriggerAlert="#idalia-NoButtonElement--vrEfqnjJox7vh4rvSru8";
txtAddTOCart="a[aria-label='Add to cart: “De-Tan Face Pack | Multani Mitti & Liquorice”']";
txtClickOnAddButton="//div[@class='fkcart-carousel__container']//div[1]//div[1]//div[1]//div[2]";
txtCheckOutButton=".fkcart-checkout--text";
enterEmail="#billing_email";
enterFirstname="#billing_first_name";
enterLastName="#billing_last_name";
enterStreetAddress="#shipping_address_1";
enterCityAddress="#shipping_city";
enterPinCode="#shipping_postcode";
SelectCountryClick="#select2-shipping_country-container";
inputIndia="input[role=\'combobox\']";
selectIndia=".select2-results__option'";
clickOnPlaceOrder="#place_order";
clickOnAddOrder=".elementor-button-text";


    VerifytheFunnelDashboard(){

        cy.title().should('eq',"FunnelKit Cart");
    }

    RemoveThePopUp(){

        cy.window().then(win => {
            cy.stub(win, 'alert').as('windowAlert');
          });
      
          // Trigger an action that would cause an alert
          cy.get(this.txtTriggerAlert).click();
    }

    clickAddtoCart(){

        cy.get(this.txtAddTOCart).click();

    }

    clickOnAddButton(){
        cy.get(this.txtClickOnAddButton).click();


    }

    clickOnCheckoutButton(){

        cy.get(this.txtCheckOutButton).click();

    }


    EnterEmailid(Emailid){

        cy.get(this.enterEmail).type(Emailid);


    }
    
    EnterFirstName(Fname){

        cy.get(this.enterFirstname).type(Fname);
    }


   EnterLastName(lastname){

    cy.get(this.enterLastName).type(lastname);

   }

  EnterStreetAddress(StreetAD){

    cy.get(this.enterStreetAddress).type(StreetAD);
  }


  EnterCityAddress(city){
  
    cy.get(this.enterCityAddress).type(city);
  }


EnterPincode(pincode){

    cy.get(this.enterPinCode).type(pincode);
}

SelectCountry(India){

    cy.get(this.SelectCountryClick).click();
    cy.get(this.inputIndia).type(India);
    cy.get(this.selectIndia).eq(1).click();
}

ClickOnPlaceOrder(){
    cy.get(this.clickOnPlaceOrder).click();
}

ClickOnAddOrder(){
    cy.get(this.clickOnAddOrder).click();
}

}

export default AddtoCart;