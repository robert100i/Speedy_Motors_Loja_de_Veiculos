$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
        },
        messages: {
            telefone: "Este campo é obrigatório",
            nome: "Este campo é obrigatório",
            email: "Este campo é obrigatório",
            veiculoInteresse: "Este campo é obrigatório",
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato'); 
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 800)
    })
})