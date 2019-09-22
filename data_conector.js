const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);


module.exports = {

    getNormsByTerm: function getNormsByTerm(term, quantity) {
        return fetch(`https://www.leychile.cl/Consulta/obtxml?opt=61&cadena=${term}&cantidad=${quantity}`)
            .then(res => {
                //console.log(res)
            });

    },

    getSingleNormTitle: function getSingleNormTitle(term, quantity) {
        return fetch(`https://www.leychile.cl/Consulta/obtxml?opt=61&cadena=${term}&cantidad=${quantity}`)
            .then(res => res.text()).then(parseXML).then(res => console.dir(res));
    },

    getDateOfFirstResult: function getDateOfFirstResult(term, quantity) {
        let value = fetch(`https://www.leychile.cl/Consulta/obtxml?opt=61&cadena=${term}&cantidad=${quantity}`)
            .then(res => res.text()).then(parseXML).then((res) =>  res.Normas.Norma[0].FechaPublicacion[0]);
        Promise.resolve(value).then(val => console.log(val));
        return Promise.resolve(value);
    }

    // getsingleNormDate: function getsingleNormDate(term, quantity, index) {
    //     return fetch(`https://www.leychile.cl/Consulta/obtxml?opt=61&cadena=${term}&cantidad=${quantity}`)
    //         .then(res => res.text()).then(parseXML).then(res => console.log(res.Normas['$'].fechaGeneracion));
    // }

}
