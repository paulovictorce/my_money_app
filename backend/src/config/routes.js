const express = require('express')

module.exports = function(server) {

    //URL base das rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas Ciclos de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}