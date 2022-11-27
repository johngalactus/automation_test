describe('empty spec', () => {
  function wait(ms) {
      var d = new Date();
      var d2 = null;
      do { d2 = new Date(); }
      while (d2 - d < ms);
    }

  /* ==== Test Created with Cypress Studio ==== */
  it('TC_A12', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
    cy.get('.border-right > :nth-child(3) > .form-control').clear('te');
    const num = Date.now();
    const n = num.toString();
    cy.get('[name="email"]').type(n);
    cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
    cy.get('.border-right > :nth-child(4) > .form-control').clear();
    cy.get('.border-right > :nth-child(4) > .form-control').type('John');
    cy.get('.vti__input').clear();
    cy.get('.vti__input').type('12345678');
    cy.get('.mt-3').click();
    cy.get('.width-p-85').click();
    cy.get('.d-flex > .btn-primary').click();
    cy.wait(4000);
    //cy.get('.card-body').click();
    cy.get(':nth-child(3) > .form-control').clear('te');
    cy.get(':nth-child(3) > .form-control').type('test1');
    cy.get(':nth-child(4) > .form-control').clear('te');
    cy.get(':nth-child(4) > .form-control').type('test2');
    cy.get(':nth-child(5) > .form-control').clear('te');
    cy.get(':nth-child(5) > .form-control').type('test3');
    cy.get('.card-body').click();
    cy.get('.card-body > .mt-4').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('TC_A03', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
      cy.get('.mt-3').click();
      cy.contains("There's error as following:")
      cy.contains("The email field is required")
      cy.contains("Full name field is required")
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('TC_A11', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
    cy.get('.border-right > :nth-child(3) > .form-control').clear('te');
    const num = Date.now();
    const n = num.toString();
    cy.get('[name="email"]').type(n);
    cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
    cy.get('.border-right > :nth-child(4) > .form-control').clear();
    cy.get('.border-right > :nth-child(4) > .form-control').type('John');
    cy.get('.vti__input').clear();
    cy.get('.vti__input').type('12345678');
    cy.get('.mt-3').click();
    cy.get('.d-flex > .btn-primary').click();
    cy.get('.card-body > .mt-4').click();
    cy.contains("There is 1 error/s:")
    cy.contains("At least one company name is required")
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('TC_A14', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://dev.starboardhq.com/incorporation/servicepteltd/setup');
    cy.get('.border-right > :nth-child(3) > .form-control').clear('te');
    const num = Date.now();
    const n = num.toString();
    cy.get('[name="email"]').type(n);
    cy.get('.border-right > :nth-child(3) > .form-control').type('@test.com');
    cy.get('.border-right > :nth-child(4) > .form-control').clear('J');
    cy.get('.border-right > :nth-child(4) > .form-control').type('John');
    cy.get('.vti__input').clear();
    cy.get('.vti__input').type('12345678');
    cy.get('.mt-3').click();
    cy.get('.d-flex > .btn-primary').click();
    cy.wait(4000);
    cy.get(':nth-child(3) > .form-control').clear('t');
    cy.get(':nth-child(3) > .form-control').type('test1');
    cy.get(':nth-child(4) > .form-control').clear('t');
    cy.get(':nth-child(4) > .form-control').type('test2');
    cy.get(':nth-child(5) > .form-control').clear('t');
    cy.get(':nth-child(5) > .form-control').type('test3');
    cy.get('.card-body > .mt-4').click();
    cy.wait(4000);
    cy.get(':nth-child(3) > .form-control').click();
    cy.get(':nth-child(3) > .form-control').type('Consultation');
    cy.get(':nth-child(4) > .icon-addon > :nth-child(1) > .input-group > .form-control').clear('8');
    cy.get(':nth-child(4) > .icon-addon > :nth-child(1) > .input-group > .form-control').type('88');
    cy.get(':nth-child(1) > [data-v-56e6ee59=""]').click();
    cy.get('.p-5 > :nth-child(6) > :nth-child(1) > .form-group > .form-control').select('Equity/Shareholder/Investors');
    cy.get('.p-5 > :nth-child(6) > :nth-child(2) > .form-group > .form-control').clear('4');
    cy.get('.p-5 > :nth-child(6) > :nth-child(2) > .form-group > .form-control').type('400');
    cy.get('.p-5 > :nth-child(7) > :nth-child(1) > .form-group > .form-control').select('3');
    cy.get('#vs1__combobox > .vs__selected-options > .vs__search').clear('A');
    cy.get('#vs1__combobox > .vs__selected-options > .vs__search').type('Afghanistan{enter}');
    cy.wait(4000);
    cy.get('#isRegisteredAddress').check();
    cy.get('#isSecretarialService').check();
    cy.get('.btn').click();
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  });
})