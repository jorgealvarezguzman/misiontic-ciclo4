var User = require('../src/models/User.js')
var expect = require('chai').expect
var assert = require('assert');

describe ('Testing entrada base de datos', function(){
    describe('Testing en usuarios', function(){
        it ('Longitud password hash', function( done ){
            var user4 = new User({
                nombre: "Juan Martinez",
                email: "prueba4@correo.com",
                hashed_password: "EF994E7262A78B",
                celular: "3087654321",
                carrera: "Ingenieria electronica",
                proyectos: [],

            })

            user4.validate(function(err){
                expect( err.errors.hashed_password ).to.exist;
                done();
            })
        
            

        })

        it ('Prueba formato correo', function( done ){
            var user4 = new User({
                nombre: "Juan Martinez",
                email: "prueba4correo.com",
                hashed_password: "EF994E7262A78B97C039ADF58214EE7DF1076824A7E47538948BA61AE02B05C7",
                celular: "3087654321",
                carrera: "Ingenieria electronica",
                proyectos: [],

            })

            user4.validate(function(err){
                expect( err.errors.email ).to.exist;
                done();
            })
        
            

        })
            
    })
})