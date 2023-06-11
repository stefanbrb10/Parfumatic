class Produs{

    constructor({id, nume, descriere, pret, gramaj, brand, gen, note, pt_alergici, imagine, data_adaugare, anotimp, stoc}={}) {

        for(let prop in arguments[0]){
            this[prop]=arguments[0][prop]
        }

    }

}