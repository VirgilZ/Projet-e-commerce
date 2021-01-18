function displayCart() {
    let products = cartArray.array
    let accueil = accueilArray.array
    let fgoodies = fncgoodies.array
    let fncclavier = fncclavier.array
    let fnchabits = fnchabits.array
    let fncpc = fncpc.array
    let fncsouris = fncsouris.array
    let fnctds = fnctds.array
    let g2 = g2.array
    let g2claviers = g2claviers.array
    let g2goodies = g2goodies.array
    let g2habits = g2habits.array
    let g2pc = g2pc.array
    let g2souris = g2souris.array
    let g2tds = g2tds.array
    let nouveaugoodies = nouveaugoodies.array
    let nouveaupc = nouveaupc.array
    let nouveautéclaviers = nouveautéclaviers.array
    let nouveautéhabits = nouveautéhabits.array
    let nouveautésouris = nouveautésouris.array
    let nouveautétds = nouveautétds.array
    let origen = origen.array
    let origenclavier = origenclavier.array
    let origenhabits = origenhabits.array
    let origenpc = origenpc.array
    let origensouris = origensouris.array
    let origentds = origentds.array
    let rogue = rogue.array
    let rogueclavier = rogueclavier.array
    let roguegoodies = roguegoodies.array
    let roguehabits = roguehabits.array
    let roguepc = roguepc.array
    let roguesouris = roguesouris.array
    let roguetds = roguetds.array
    let splyce = splyce.array
    let splyceclaviers = splyceclaviers.array
    let splycehabits = splycehabits.array
    let splycepc = splycepc.array
    let splycesouris = splycesouris.array
    let splycetds = splycetds.array
    let vitality = vitality.array
    let vitalityclavier = vitalityclavier.array
    let vitalitygoodies = vitalitygoodies.array
    let vitalityhabits = vitalityhabits.array
    let vitalitypc = vitalitypc.array
    let vitalitysouris = vitalitysouris.array
    let vitalitytds = vitalitytds.array
    


    
    let storage = Object.keys(sessionStorage) 
        if (products != 0) {
            for (i = 0; i < storage.length; i++) {
                for (j = 0; j < products.length; j++) {
                    if (storage[i] == products[j].id) {
                        $('.pagepanier').append(
                            '<div class="affichage  col-md-6">' +
                            '<h4>' + products[i].name + '</h4>' +

                            '<img id="description" class="img-fluid w-50  " src="' + products[j].img + '"' +
                            'alt="">' +
                            '<p>'+ products[i].price +'</p>' +
                            '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + products[j].id + ')">' +

                            '<p class="replacement">' +
                            ' '+ products[i].infos +'' +
                            '</p>' +

                            '</div>'
                        )
                    }
                }
            }
        }
        if (accueil != 0) {
            for (i = 0; i < storage.length; i++) {
                for (j = 0; j < accueil.length; j++) {
                    if (storage[i] == accueil[j].id) {
                        $('.pagepanier').append(
                            '<div class="affichage  col-md-6">' +
                            '<h4>' + accueil[i].name + '</h4>' +

                            '<img id="description" class="img-fluid w-50  " src="' + accueil[j].img + '"' +
                            'alt="">' +
                            '<p>'+ accueil[i].price +'</p>' +
                            '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + accueil[j].id + ')">' +

                            '<p class="replacement">' +
                            ' '+ accueil[i].infos +'' +
                            '</p>' +

                            '</div>'
                        )
                    }
                }
            }
        }
    
    if ( fgoodies != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fgoodies.length; j++) {
                if (storage[i] == fgoodies[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fgoodies[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fgoodies[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fgoodies[i].price +'£</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fgoodies[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fgoodies[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( fncclavier != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fncclavier.length; j++) {
                if (storage[i] == fncclavier[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fncclavier[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fncclavier[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fncclavier[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fncclavier[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fncclavier[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( fnchabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fnchabits.length; j++) {
                if (storage[i] == fnchabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fnchabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fnchabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fnchabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fnchabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fnchabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( fncpc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fncpc.length; j++) {
                if (storage[i] == fncpc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fncpc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fncpc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fncpc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fncpc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fncpc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( fncsouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fncsouris.length; j++) {
                if (storage[i] == fncsouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fncsouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fncsouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fncsouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fncsouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fncsouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( fnctds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < fnctds.length; j++) {
                if (storage[i] == fnctds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + fnctds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + fnctds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ fnctds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + fnctds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ fnctds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2 != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2.length; j++) {
                if (storage[i] == g2[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2claviers != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2claviers.length; j++) {
                if (storage[i] == g2claviers[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2claviers[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2claviers[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2claviers[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2claviers[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2claviers[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2goodies != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2goodies.length; j++) {
                if (storage[i] == g2goodies[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2goodies[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2goodies[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2goodies[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2goodies[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2goodies[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2jhabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2jhabits.length; j++) {
                if (storage[i] == g2jhabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2jhabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2jhabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2jhabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2jhabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2jhabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2pc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2pc.length; j++) {
                if (storage[i] == g2pc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2pc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2pc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2pc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2pc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2pc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
     if ( g2souris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2souris.length; j++) {
                if (storage[i] == g2souris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2souris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2souris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2souris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2souris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2souris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( g2tds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < g2tds.length; j++) {
                if (storage[i] == g2tds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + g2tds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + g2tds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ g2tds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + g2tds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ g2tds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
     if ( nouveaugoodies != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveaugoodies.length; j++) {
                if (storage[i] == nouveaugoodies[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveaugoodies[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveaugoodies[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveaugoodies[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveaugoodies[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveaugoodies[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    } if ( nouveaupc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveaupc.length; j++) {
                if (storage[i] == nouveaupc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveaupc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveaupc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveaupc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveaupc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveaupc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( nouveautéclaviers != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveautéclaviers.length; j++) {
                if (storage[i] == nouveautéclaviers[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveautéclaviers[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveautéclaviers[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveautéclaviers[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveautéclaviers[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveautéclaviers[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( nouveautéhabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveautéhabits.length; j++) {
                if (storage[i] == nouveautéhabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveautéhabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveautéhabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveautéhabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveautéhabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveautéhabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( nouveautésouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveautésouris.length; j++) {
                if (storage[i] == nouveautésouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveautésouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveautésouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveautésouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveautésouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveautésouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( nouveautétds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < nouveautétds.length; j++) {
                if (storage[i] == nouveautétds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + nouveautétds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + nouveautétds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ nouveautétds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + nouveautétds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ nouveautétds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origen != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origen.length; j++) {
                if (storage[i] == origen[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origen[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origen[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origen[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origen[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origen[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origenclavier != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origenclavier.length; j++) {
                if (storage[i] == origenclavier[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origenclavier[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origenclavier[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origenclavier[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origenclavier[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origenclavier[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origenhabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origenhabits.length; j++) {
                if (storage[i] == origenhabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origenhabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origenhabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origenhabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origenhabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origenhabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origenpc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origenpc.length; j++) {
                if (storage[i] == origenpc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origenpc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origenpc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origenpc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origenpc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origenpc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origensouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origensouris.length; j++) {
                if (storage[i] == origensouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origensouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origensouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origensouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origensouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origensouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( origentds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < origentds.length; j++) {
                if (storage[i] == origentds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + origentds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + origentds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ origentds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + origentds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ origentds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( rogue != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < rogue.length; j++) {
                if (storage[i] == rogue[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + rogue[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + rogue[j].img + '"' +
                        'alt="">' +
                        '<p>'+ rogue[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + rogue[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ rogue[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( rogueclavier != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < rogueclavier.length; j++) {
                if (storage[i] == rogueclavier[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + rogueclavier[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + rogueclavier[j].img + '"' +
                        'alt="">' +
                        '<p>'+ rogueclavier[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + rogueclavier[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ rogueclavier[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
     if ( roguegoodies != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < roguegoodies.length; j++) {
                if (storage[i] == roguegoodies[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + roguegoodies[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + roguegoodies[j].img + '"' +
                        'alt="">' +
                        '<p>'+ roguegoodies[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + roguegoodies[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ roguegoodies[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( roguehabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < roguehabits.length; j++) {
                if (storage[i] == roguehabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + roguehabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + roguehabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ roguehabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + roguehabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ roguehabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( roguepc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < roguepc.length; j++) {
                if (storage[i] == roguepc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + roguepc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + roguepc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ roguepc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + roguepc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ roguepc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( roguesouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < roguesouris.length; j++) {
                if (storage[i] == roguesouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + roguesouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + roguesouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ roguesouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + roguesouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ roguesouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( roguetds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < roguetds.length; j++) {
                if (storage[i] == roguetds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + roguetds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + roguetds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ roguetds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + roguetds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ roguetds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splyce != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splyce.length; j++) {
                if (storage[i] == splyce[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splyce[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splyce[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splyce[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splyce[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splyce[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splyceclaviers != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splyceclaviers.length; j++) {
                if (storage[i] == splyceclaviers[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splyceclaviers[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splyceclaviers[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splyceclaviers[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splyceclaviers[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splyceclaviers[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splycehabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splycehabits.length; j++) {
                if (storage[i] == splycehabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splycehabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splycehabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splycehabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splycehabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splycehabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splycepc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splycepc.length; j++) {
                if (storage[i] == splycepc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splycepc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splycepc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splycepc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splycepc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splycepc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splycesouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splycesouris.length; j++) {
                if (storage[i] == splycesouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splycesouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splycesouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splycesouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splycesouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splycesouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( splycetds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < splycetds.length; j++) {
                if (storage[i] == splycetds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + splycetds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + splycetds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ splycetds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + splycetds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ splycetds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitality != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitality.length; j++) {
                if (storage[i] == vitality[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitality[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitality[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitality[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitality[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitality[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalityclavier != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalityclavier.length; j++) {
                if (storage[i] == vitalityclavier[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalityclavier[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalityclavier[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalityclavier[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalityclavier[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalityclavier[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalitygoodies != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalitygoodies.length; j++) {
                if (storage[i] == vitalitygoodies[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalitygoodies[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalitygoodies[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalitygoodies[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalitygoodies[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalitygoodies[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalityhabits != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalityhabits.length; j++) {
                if (storage[i] == vitalityhabits[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalityhabits[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalityhabits[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalityhabits[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalityhabits[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalityhabits[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalitypc != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalitypc.length; j++) {
                if (storage[i] == vitalitypc[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalitypc[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalitypc[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalitypc[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalitypc[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalitypc[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalitysouris != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalitysouris.length; j++) {
                if (storage[i] == vitalitysouris[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalitysouris[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalitysouris[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalitysouris[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalitysouris[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalitysouris[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
    if ( vitalitytds != 0) {
        for (i = 0; i < storage.length; i++) {
            for (j = 0; j < vitalitytds.length; j++) {
                if (storage[i] == vitalitytds[j].id) {
                    $('.pagepanier').append(
                        '<div class="affichage  col-md-6">' +
                        '<h4>' + vitalitytds[i].name + '</h4>' +

                        '<img id="description" class="img-fluid w-50  " src="' + vitalitytds[j].img + '"' +
                        'alt="">' +
                        '<p>'+ vitalitytds[i].price + '</p>' +
                        '<input class="boutonprix" type="button" value="remove" onclick="removeFromCart(' + vitalitytds[j].id + ')">' +

                        '<p class="replacement">' +
                        ' '+ vitalitytds[i].infos +'' +
                        '</p>' +

                        '</div>'
                    )
                }
            }
        }
    }
}


    function removeFromCart(id) {
        sessionStorage.removeItem('' + id + '')
        $('.pagepanier').empty()
        displayCart()
    }



    displayCart( )