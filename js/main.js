const proyectos = [
    {name: 'Fiorella', link: 'https://fiorela08.github.io/Proyecto-Integrador-2/'},
    {name: 'Pilar', link: 'https://pilarariassantos.github.io/mi-proyecto-2/'},
    {name: 'Camila', link: 'https://camilaavilaa.github.io/proyecto-integrador-2/'},
    {name: 'Paula', link: 'https://julipabellido.github.io/proyecto-integrador2/'},
    {name: 'Daiana', link: 'https://daibenavidez.github.io/proyecto-final/'},
    {name: 'Eugenia', link: 'https://eugeborelli.github.io/proyecto-integrador-2-correccion/'},
    {name: 'Mariela', link: 'https://marielac14.github.io/proyecto-integrador-2/'},
    {name: 'Khory Mey Ling', link: 'https://meylinggamarra.github.io/proyecto-integrador-2/'},
    {name: 'Fulvia', link: 'https://fulviagarcia.github.io/proyecto-integrador-2/'},
    {name: 'Lelia', link: 'https://leliahurtado.github.io/proyecto-integrador-2/'},
    {name: 'Micol', link: 'https://micol-jim.github.io/proyecto-integrador-2/'},
    {name: 'Nicole', link: 'https://nicolekorn.github.io/Eidos-ProyectoIntegrador1/'},
    {name: 'Lidia', link: 'https://liz-maiz.github.io/Mi-Proyecto/'},
    {name: 'Daniela Ruth', link: 'https://dani0100.github.io/proyecto-integrador-2/'},
    {name: 'Yanina', link: 'https://shanmolina.github.io/proyecto-integrador-2/'},
    {name: 'Grisel', link: 'https://grisel182.github.io/proyecto-2-grisel-oliva/'},
    {name: 'Ivonne', link: 'https://chivonnebelen.github.io/proyecto-Integrador2/'},
    {name: 'Cassandra', link: 'https://cassfsd.github.io/Proyecto-Integrador-2/'},
    {name: 'Leila', link: 'https://leilacds.github.io/Proyecto-2/'},
    {name: 'Melissa', link: 'https://melissa21soledad.github.io/proyecto-integrador-cs/'},
    {name: 'Laura', link: 'https://lauramirez96.github.io/mi-proyecto2/'},
    {name: 'Alison', link: 'https://alismar34.github.io/Mi-proyecto-2-Ali/'},
    {name: 'Melissa', link: 'https://amelissarc.github.io/Proyecto-2/'},
    {name: 'Luciana', link: 'https://lucianarodriguez1998.github.io/proyecto-integrador-2-2/'},
    {name: 'Melina', link: 'https://melinarodriguezaranda.github.io/Proyecto-Integrador-2/'},
    {name: 'Celeste', link: 'https://celerome.github.io/mi-projecto-2-final/'},
    {name: 'Melisa', link: 'https://melisa2109.github.io/proyecto-integrador-2/'},
    {name: 'Mariam', link: 'https://mvetencourt.github.io/codigolatam-tp2/'},
    {name: 'Rocío', link: 'https://rorovico.github.io/proyecto-integrador-2/'},
    {name: 'Camila', link: 'https://camcamz.github.io/proyecto2/'},
];


const ulProyectos = document.querySelector('#proyectos');

proyectos.forEach((proyecto) => {
   
    let html = `<a href="${proyecto.link}" target="_blank" aria-label="abrir-proyecto">
                    ${proyecto.name}
                </a>`;

    const listItem = document.createElement('LI');

    listItem.innerHTML = html;

    ulProyectos.appendChild(listItem);

    

});


 