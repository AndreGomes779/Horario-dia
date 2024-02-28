function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var body = document.body
    var hora = data.getHours()
    
    msg.innerHTML = `<strong>Agora são ${hora}:00 horas.</strong>`
    if(hora >= 0 && hora < 12){
        // Bom Dia!
        img.innerHTML = '<img src="imagens/manhaED.png" alt="Manhã">'
        body.style.backgroundImage = "url('imagens/amanhecer.jpg')"
        body.style.backgroundSize = "cover"
    }else if(hora >=12 && hora <= 18){
        // Boa Tarde!
        img.innerHTML = '<img src="imagens/tardeED.png" alt="Tarde">'
        body.style.backgroundImage = "url('imagens/entardecer.jpg')"
        body.style.backgroundSize = "cover"
    }else{
        // Boa Noite!
        img.innerHTML = '<img src="imagens/noiteED.png" alt="Noite">'
        body.style.backgroundImage = "url('imagens/ceuestrelado.jpg')"
        body.style.backgroundSize = "cover"
    }
}