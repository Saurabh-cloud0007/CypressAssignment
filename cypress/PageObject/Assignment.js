class AddtoCart {

    VerifytheFunnelDashboard(){

        cy.title().should('eq',"FunnelKit Cart");
    }

    RemoveThePopUp(){

        cy.window().then(win => {
            cy.stub(win, 'alert').as('windowAlert');
          });
      
          // Trigger an action that would cause an alert
          cy.get('#idalia-NoButtonElement--vrEfqnjJox7vh4rvSru8').click();
    }

    clickAddtoCart(){

        cy.get("a[aria-label='Add to cart: “De-Tan Face Pack | Multani Mitti & Liquorice”']").click();

    }

    clickOnAddButton(){
        cy.get("body > div:nth-child(23) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)").click();


    }

    clickOnCheckoutButton(){

        cy.get(".fkcart-checkout--text").click();

    }


    EnterEmailid(Emailid){

        cy.get('#billing_email').type(Emailid);


    }
    
    EnterFirstName(Fname){

        cy.get('#billing_first_name').type(Fname);
    }


   EnterLastName(lastname){

    cy.get('#billing_last_name').type(lastname);

   }

  EnterStreetAddress(StreetAD){

    cy.get('#shipping_address_1').type(StreetAD);
  }


  EnterCityAddress(city){
  
    cy.get('#shipping_city').type(city);
  }


EnterPincode(pincode){

    cy.get('#shipping_postcode').type(pincode);
}

SelectCountry(India){

    cy.get('#select2-shipping_country-container').click();
    cy.get('input[role=\'combobox\']').type(India);
    cy.get('.select2-results__option').eq(1).click();
}
clickonstate(){
    cy.get('#select2-shipping_state-container').click();
    cy.get('input[role=\'combobox\']').type("Uttar pradesh");
    cy.get('.select2-results__option').click();

}

clickonYes(){
    cy.get('#wfob_657a9210552a2').click();  
    cy.wait(5000);

}

ClickOnPlaceOrder(){
    cy.get('#place_order').click();
    cy.wait(5000);
}

ClickOnAddOrder(){
    cy.wait(5000);
    cy.get('.elementor-button-text').click();
}

}

export default AddtoCart;