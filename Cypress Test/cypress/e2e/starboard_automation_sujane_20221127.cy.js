describe('Automation Test Cases for Starboard Onboarding Form', () => {
    function wait(ms) {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while (d2 - d < ms);
    }

    /* ==== Test Created with Cypress Studio ==== */
    it('TC_A12: Enter valid company name and proceed to the next screen', function () {
        cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
        cy.get('.border-right > :nth-child(3) > .form-control').clear('');
        const num = Date.now();
        const n = num.toString();
        cy.get('[name="email"]').type(n); // generate unique email ID 
        cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
        cy.get('.border-right > :nth-child(4) > .form-control').clear();
        cy.get('.border-right > :nth-child(4) > .form-control').type('John');
        cy.get('.vti__input').clear();
        cy.get('.vti__input').type('12345678');
        cy.get('.mt-3').click();
        cy.get('.width-p-85').click();
        cy.get('.d-flex > .btn-primary').click();
        cy.wait(4000);
        cy.get(':nth-child(3) > .form-control').clear('');
        cy.get(':nth-child(3) > .form-control').type('ABC Company'); // first choice company name
        cy.get(':nth-child(4) > .form-control').clear('');
        cy.get(':nth-child(4) > .form-control').type('Techno Inc'); // second choice company name
        cy.get(':nth-child(5) > .form-control').clear('');
        cy.get(':nth-child(5) > .form-control').type('Alpha Labs'); // third choice company name
        cy.get('.card-body').click();
        cy.get('.card-body > .mt-4').click();
        /* ==== End Cypress Studio ==== */
    });


    /* ==== Test Created with Cypress Studio ==== */
    it('TC_A14: Enter relevant company details and proceed to the next screen', function () {
        cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
        cy.get('.border-right > :nth-child(3) > .form-control').clear('');
        const num = Date.now();
        const n = num.toString();
        cy.get('[name="email"]').type(n);
        cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
        cy.get('.border-right > :nth-child(4) > .form-control').clear('');
        cy.get('.border-right > :nth-child(4) > .form-control').type('John');
        cy.get('.vti__input').clear();
        cy.get('.vti__input').type('12345678');
        cy.get('.mt-3').click();
        cy.get('.d-flex > .btn-primary').click();
        cy.wait(4000);
        cy.get(':nth-child(3) > .form-control').clear('');
        cy.get(':nth-child(3) > .form-control').type('ABC Company');
        cy.get(':nth-child(4) > .form-control').clear('');
        cy.get(':nth-child(4) > .form-control').type('Techno Inc');
        cy.get(':nth-child(5) > .form-control').clear('');
        cy.get(':nth-child(5) > .form-control').type('Alpha Labs');
        cy.get('.card-body > .mt-4').click();
        cy.wait(4000);
        cy.get(':nth-child(3) > .form-control').click();
        cy.get(':nth-child(3) > .form-control').type('Consultation'); // nature of business 
        cy.get(':nth-child(4) > .icon-addon > :nth-child(1) > .input-group > .form-control').clear('');
        cy.get(':nth-child(4) > .icon-addon > :nth-child(1) > .input-group > .form-control').type('88'); // business activity code
        cy.get(':nth-child(1) > [data-v-56e6ee59=""]').click();
        cy.get('.p-5 > :nth-child(6) > :nth-child(1) > .form-group > .form-control').select('Equity/Shareholder/Investors'); // source of funding
        cy.get('.p-5 > :nth-child(6) > :nth-child(2) > .form-group > .form-control').clear('');
        cy.get('.p-5 > :nth-child(6) > :nth-child(2) > .form-group > .form-control').type('400'); // estimated average transations per month
        cy.get('.p-5 > :nth-child(7) > :nth-child(1) > .form-group > .form-control').select('3'); // FYE month
        cy.get('#vs1__combobox > .vs__selected-options > .vs__search').clear('');
        cy.get('#vs1__combobox > .vs__selected-options > .vs__search').type('Afghanistan{enter}'); // country that the entity transacts most with
        cy.wait(4000);
        cy.get('#isRegisteredAddress').check();
        cy.get('#isSecretarialService').check();
        cy.get('.btn').click();
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('TC_A27: Check the list of errors for Sign up, Login, Company name form and Company details form', function() {
        cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
        cy.get('.border-right > :nth-child(3) > .form-control').clear('');
        cy.get('.border-right > :nth-child(3) > .form-control').type('@@@@'); // invalid sign up email format
        cy.get('.border-right > :nth-child(4) > .form-control').clear('');
        cy.get('.border-right > :nth-child(4) > .form-control').type('John');
        cy.get('.vti__input').clear('');
        cy.get('.vti__input').type('12345678');
        cy.get('.mt-3').click();
        cy.wait(4000);
        cy.contains("There's error as following:") // error list for sign up form
        cy.contains("The email must be a valid email address.")
        cy.get(':nth-child(3) > .form-control').clear('');
        cy.get(':nth-child(3) > .form-control').type('@@@@@@'); // invalid login email format
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').clear('');
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('Abcd123');
        cy.get('.row > :nth-child(2) > .mt-4').click();
        cy.wait(4000); 
        cy.contains("There's error as following:") // error list for login credentials
        cy.contains("The login email must be a valid email address.")
        cy.get(':nth-child(3) > .form-control').click();
        cy.get('.border-right').click();
        cy.get(':nth-child(3) > .form-control').clear();
        cy.get('.border-right > :nth-child(4) > .form-control').clear('');
        const num = Date.now();
        const n = num.toString();
        cy.get('[name="email"]').type(n);
        cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com'); // valid sign up email format
        cy.get('.border-right > :nth-child(4) > .form-control').clear('');
        cy.get('.border-right > :nth-child(4) > .form-control').type('John');
        cy.get('.vti__input').clear();
        cy.get('.vti__input').type('12345678');
        cy.get('.mt-3').click();
        cy.wait(4000)
        cy.get('.d-flex > .btn-primary').click();
        cy.wait(4000);
        cy.get(':nth-child(4) > .form-control').clear('');
        cy.get(':nth-child(4) > .form-control').type('Techno Inc');
        cy.get(':nth-child(5) > .form-control').clear('');
        cy.get(':nth-child(5) > .form-control').type('Alpha Labs');
        cy.get('.card-body > .mt-4').click();
        cy.wait(4000);
        cy.contains("There is 1 error/s:") // error list for company name form
        cy.contains("At least one company name is required")
        cy.get(':nth-child(4) > .form-control').clear('');
        cy.get(':nth-child(4) > .form-control').type('ABC Company');
        cy.get('.card-body > .mt-4').click();
        cy.get('.btn').click();
        cy.wait(4000);
        cy.get('.btn').click();
        cy.contains("There is 12 error/s:"); // error list for company details form
        cy.contains("Nature of business field is required");
        cy.contains("At least one business activity field is required");
        cy.contains("The source of fund field is required");
        cy.contains("Estimated average transactions per month field is required");
        cy.contains("Country that the entity transacts most with field is required");
        cy.contains("The fye month field is required");
        cy.contains("Company secretary’s email address field is required");
        cy.contains("Company secretary’s full name field is required");
        cy.contains("Registered address line 1 field is required");
        cy.contains("City field is required");
        cy.contains("Postal code field is required");
        cy.contains("Country field is required");
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('TC_A31: Check the list of errors for Transfer-in with an existing UEN number', function() {
        cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
        const num = Date.now();
        const n = num.toString();
        cy.get('[name="email"]').type(n);
        cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
        cy.get('.border-right > :nth-child(4) > .form-control').clear('');
        cy.get('.border-right > :nth-child(4) > .form-control').type('John');
        cy.get('.vti__input').clear('123');
        cy.get('.vti__input').type('12345678');
        cy.get('.mt-3').click();
        cy.wait(4000)
        cy.get('.btn-outline-primary').click(); // tramsfer-in is selected
        cy.get('.flex-column > .form-group > .form-control').clear('');
        cy.get('.flex-column > .form-group > .form-control').type('201600008M'); // UEN number is entered
        cy.get(':nth-child(4) > .modal-dialog > .modal-content > .modal-body > .flex-column > .d-flex > .btn').click();
        cy.wait(4000);
        cy.contains("There is 1 error/s:"); // error list for transfer-in
        cy.contains("This UEN is already registered.");
        /* ==== End Cypress Studio ==== */
    });
})