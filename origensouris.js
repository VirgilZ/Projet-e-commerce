let origensouris
function displayItems() {
    let products = origensouris.array

    for (i = 0; i < products.length; i++) {  
        $('.paiement').append(
            '<div class="affichage  col-md-6">' +
                    '<h4>' + products[i].name + '</h4>' +

                    '<img id="description" class="img-fluid w-50  " src="'+ products[i].img +'"' +
                    'alt="">' +
                    '<p>'+ products[i].price +'</p>' +
                    '<input class="boutonprix" type="button" value="Add to cart " onclick="store('+ products[i].id +')">' +

                    '<p class="replacement">' +
                    ' '+ products[i].infos +'' +
                    '</p>' +

                    '</div>'
        )
    }
}

function store(id) {
    sessionStorage.setItem(id, id)
}

displayItems() 