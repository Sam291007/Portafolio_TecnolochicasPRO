let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 90,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo de sitios web y proyectos de Diseño gráfico.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
