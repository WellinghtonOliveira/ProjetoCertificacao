const inputEntrada = document.querySelector("#user-input")
const btnVerificar = document.querySelector("#check-btn")
const btnLimpar = document.querySelector("#clear-btn")
const dddValido = [
    { ddd: '93', pais: 'Afeganistão' },
    { ddd: '355', pais: 'Albânia' },
    { ddd: '49', pais: 'Alemanha' },
    { ddd: '376', pais: 'Andorra' },
    { ddd: '244', pais: 'Angola' },
    { ddd: '1', pais: 'Anguilla' },
    { ddd: '1', pais: 'Antígua e Barbuda' },
    { ddd: '54', pais: 'Argentina' },
    { ddd: '374', pais: 'Armênia' },
    { ddd: '297', pais: 'Aruba' },
    { ddd: '61', pais: 'Austrália' },
    { ddd: '43', pais: 'Áustria' },
    { ddd: '994', pais: 'Azerbaijão' },
    { ddd: '1', pais: 'Bahamas' },
    { ddd: '973', pais: 'Bahrein' },
    { ddd: '880', pais: 'Bangladesh' },
    { ddd: '1', pais: 'Barbados' },
    { ddd: '375', pais: 'Bielorrússia' },
    { ddd: '32', pais: 'Bélgica' },
    { ddd: '501', pais: 'Belize' },
    { ddd: '229', pais: 'Benin' },
    { ddd: '1', pais: 'Bermudas' },
    { ddd: '591', pais: 'Bolívia' },
    { ddd: '387', pais: 'Bósnia e Herzegovina' },
    { ddd: '267', pais: 'Botsuana' },
    { ddd: '55', pais: 'Brasil' },
    { ddd: '673', pais: 'Brunei' },
    { ddd: '359', pais: 'Bulgária' },
    { ddd: '226', pais: 'Burkina Faso' },
    { ddd: '257', pais: 'Burundi' },
    { ddd: '238', pais: 'Cabo Verde' },
    { ddd: '855', pais: 'Camboja' },
    { ddd: '237', pais: 'Camarões' },
    { ddd: '1', pais: 'Canadá' },
    { ddd: '236', pais: 'República Centro-Africana' },
    { ddd: '235', pais: 'Chade' },
    { ddd: '56', pais: 'Chile' },
    { ddd: '86', pais: 'China' },
    { ddd: '57', pais: 'Colômbia' },
    { ddd: '269', pais: 'Comores' },
    { ddd: '242', pais: 'Congo' },
    { ddd: '243', pais: 'Congo (República Democrática)' },
    { ddd: '682', pais: 'Ilhas Cook' },
    { ddd: '506', pais: 'Costa Rica' },
    { ddd: '385', pais: 'Croácia' },
    { ddd: '53', pais: 'Cuba' },
    { ddd: '357', pais: 'Chipre' },
    { ddd: '420', pais: 'República Tcheca' },
    { ddd: '45', pais: 'Dinamarca' },
    { ddd: '253', pais: 'Djibuti' },
    { ddd: '1', pais: 'Dominica' },
    { ddd: '1', pais: 'República Dominicana' },
    { ddd: '593', pais: 'Equador' },
    { ddd: '20', pais: 'Egito' },
    { ddd: '503', pais: 'El Salvador' },
    { ddd: '240', pais: 'Guiné Equatorial' },
    { ddd: '291', pais: 'Eritreia' },
    { ddd: '372', pais: 'Estônia' },
    { ddd: '251', pais: 'Etiópia' },
    { ddd: '679', pais: 'Fiji' },
    { ddd: '358', pais: 'Finlândia' },
    { ddd: '33', pais: 'França' },
    { ddd: '594', pais: 'Guiana Francesa' },
    { ddd: '689', pais: 'Polinésia Francesa' },
    { ddd: '241', pais: 'Gabão' },
    { ddd: '220', pais: 'Gâmbia' },
    { ddd: '995', pais: 'Geórgia' },
    { ddd: '49', pais: 'Alemanha' },
    { ddd: '233', pais: 'Gana' },
    { ddd: '350', pais: 'Gibraltar' },
    { ddd: '30', pais: 'Grécia' },
    { ddd: '299', pais: 'Groenlândia' },
    { ddd: '1', pais: 'Granada' },
    { ddd: '590', pais: 'Guadalupe' },
    { ddd: '1', pais: 'Guam' },
    { ddd: '502', pais: 'Guatemala' },
    { ddd: '224', pais: 'Guiné' },
    { ddd: '245', pais: 'Guiné-Bissau' },
    { ddd: '592', pais: 'Guiana' },
    { ddd: '509', pais: 'Haiti' },
    { ddd: '504', pais: 'Honduras' },
    { ddd: '852', pais: 'Hong Kong' },
    { ddd: '36', pais: 'Hungria' },
    { ddd: '354', pais: 'Islândia' },
    { ddd: '91', pais: 'Índia' },
    { ddd: '62', pais: 'Indonésia' },
    { ddd: '98', pais: 'Irã' },
    { ddd: '964', pais: 'Iraque' },
    { ddd: '353', pais: 'Irlanda' },
    { ddd: '972', pais: 'Israel' },
    { ddd: '39', pais: 'Itália' },
    { ddd: '1', pais: 'Jamaica' },
    { ddd: '81', pais: 'Japão' },
    { ddd: '962', pais: 'Jordânia' },
    { ddd: '7', pais: 'Cazaquistão' },
    { ddd: '254', pais: 'Quênia' },
    { ddd: '686', pais: 'Kiribati' },
    { ddd: '850', pais: 'Coreia do Norte' },
    { ddd: '82', pais: 'Coreia do Sul' },
    { ddd: '965', pais: 'Kuwait' },
    { ddd: '996', pais: 'Quirguistão' },
    { ddd: '856', pais: 'Laos' },
    { ddd: '371', pais: 'Letônia' },
    { ddd: '961', pais: 'Líbano' },
    { ddd: '266', pais: 'Lesoto' },
    { ddd: '231', pais: 'Libéria' },
    { ddd: '218', pais: 'Líbia' },
    { ddd: '423', pais: 'Liechtenstein' },
    { ddd: '370', pais: 'Lituânia' },
    { ddd: '352', pais: 'Luxemburgo' },
    { ddd: '853', pais: 'Macau' },
    { ddd: '389', pais: 'Macedônia' },
    { ddd: '261', pais: 'Madagáscar' },
    { ddd: '265', pais: 'Malawi' },
    { ddd: '60', pais: 'Malásia' },
    { ddd: '960', pais: 'Maldivas' },
    { ddd: '223', pais: 'Mali' },
    { ddd: '356', pais: 'Malta' },
    { ddd: '692', pais: 'Ilhas Marshall' },
    { ddd: '596', pais: 'Martinica' },
    { ddd: '222', pais: 'Mauritânia' },
    { ddd: '230', pais: 'Maurício' },
    { ddd: '262', pais: 'Mayotte' },
    { ddd: '52', pais: 'México' },
    { ddd: '691', pais: 'Micronésia' },
    { ddd: '373', pais: 'Moldávia' },
    { ddd: '377', pais: 'Mônaco' },
    { ddd: '976', pais: 'Mongólia' },
    { ddd: '382', pais: 'Montenegro' },
    { ddd: '212', pais: 'Marrocos' },
    { ddd: '258', pais: 'Moçambique' },
    { ddd: '95', pais: 'Mianmar' },
    { ddd: '264', pais: 'Namíbia' },
    { ddd: '674', pais: 'Nauru' },
    { ddd: '977', pais: 'Nepal' },
    { ddd: '31', pais: 'Países Baixos' },
    { ddd: '687', pais: 'Nova Caledônia' },
    { ddd: '64', pais: 'Nova Zelândia' },
    { ddd: '505', pais: 'Nicarágua' },
    { ddd: '227', pais: 'Níger' },
    { ddd: '234', pais: 'Nigéria' },
    { ddd: '683', pais: 'Niue' },
    { ddd: '672', pais: 'Ilha Norfolk' },
    { ddd: '47', pais: 'Noruega' },
]

// Adiciona novos elementos p
function addNovaResposta(resposta) {
    const respostaEntrada = document.querySelector("#results-div")
    const novoElemento = document.createElement('p')

    novoElemento.innerHTML = resposta
    novoElemento.className = 'resposta'
    respostaEntrada.appendChild(novoElemento)
}

// Deleta os lementos existentes
function limparElementos() {
    const elem = document.querySelectorAll("#results-div > p")
    inputEntrada.value = ''

    elem.forEach((el) => {
        el.remove()
    })
}

// Ouvinte de envento para criar novos elementos
btnVerificar.addEventListener("click", function () {
    const texto = inputEntrada.value

    if (!Number(texto) || texto == '') {
        alert('Please provide a phone number')
        return
    }

    let indexControler = 4

    do {
        let dddIdentificador = Number(texto.slice(0, indexControler))
        if (dddValido.some(valido => valido.ddd == dddIdentificador)) {
            const quemTem = dddValido.filter(quem => quem.ddd == dddIdentificador)

            if (quemTem.length > 1) {
                for (let i = 1; i < quemTem.length; i++) {
                    addNovaResposta(`Valido, ddd do ${quemTem[i].pais} - ${dddIdentificador} -`)
                }
                break
            }
            addNovaResposta(`Valido, ddd do ${quemTem[0].pais} - ${dddIdentificador} -`)
            break
        } else {
            console.log('ddd invalido')
        }

        --indexControler
    } while (indexControler > 1)
    inputEntrada.value = ''
    indexControler = 4
})

// Ouvinte de evento para limpar os elementos
btnLimpar.addEventListener("click", function () {
    limparElementos()
})