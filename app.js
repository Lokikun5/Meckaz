var txtAnim = document.getElementById('h11');

var typewriter = new Typewriter(txtAnim, {
    
    delay: 75,
    deletSpeed: 30
});

typewriter
.changeDelay(50)
.typeString('Analyse et résumé du manga de ')
.pauseFor(100)
.typeString('Nicolas David.')
.pauseFor(300)
.typeString('<br> Rédigé par <span style ="color: #27ae60">Quadjovie Antonio.</span>')
.pauseFor(500)
.deleteChars(30)
.start();