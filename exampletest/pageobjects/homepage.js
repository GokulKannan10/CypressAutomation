

class homepage{

getEditBox (){

    return cy.get('input[name="name"]:nth-child(2)')
}

getGender(){

    return cy.get('select')
}

gettwowaydatabinding(){

return cy.get(':nth-child(4) > .ng-untouched')    
}

getshopbutton(){

    return cy.get(':nth-child(2) > .nav-link')
}



}

export default homepage