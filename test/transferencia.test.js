const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/authentication');
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transferências', () => {
    describe('POST /transferências', ()=> {
        let token;

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
        })

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

                expect(response.status).to.equal(201)
                expect(response.body.message).to.be.a('string').and.equal('Transferência realizada com sucesso.')
        })
        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7

            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)

                expect(response.status).to.equal(422)
                expect(response.body.error).to.be.a('string').and.equal('O valor da transferência deve ser maior ou igual a R$10,00.')
        })
    })
})