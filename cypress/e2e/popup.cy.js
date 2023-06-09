/// <reference types="cypress" />


describe('pop up element', () => {
    it('click pop up', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.get('.btn buy').click()
    })
})