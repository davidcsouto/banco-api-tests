const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/authentication');

describe('Transferências', () => {
    describe('POST /transferências', ()=> {
        let token;

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                        valor: 11.00,
                        token: ""
                     })

                expect(response.status).to.equal(201)
                expect(response.body.message).to.be.a('string').and.equal('Transferência realizada com sucesso.')
        })
        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                        contaOrigem: 1,
                        contaDestino: 2,
                        valor: 9.99,
                        token: ""
                     })

                expect(response.status).to.equal(422)
                expect(response.body.error).to.be.a('string').and.equal('O valor da transferência deve ser maior ou igual a R$10,00.')
        })
    })
})