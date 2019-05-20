const utils = require ('../utils');

exports.order = (data) => {
    let response = [];

    data.pedido.forEach(order => {
        response.push({
            id: order.num_controle_pedido,
            total: utils.formatPrice(order.valor_total),
            frete: utils.formatPrice(order.valor_frete),
            quantidade: parseInt(order.numero_itens),
            cliente: order.nomcli_entrega,
            telefone: utils.formatPhone(order.tel_entrega),
            endereco: {
                rua: order.lgr_faturamento,
                numero: order.numero_faturamento,
                bairro: order.bairro_faturamento,
                cidade: order.cidade_faturamento,
                estado: order.uf_faturamento,
                pais: order.pais_faturamento,
                cep: order.cep_faturamento
            }           
        });
    });
    
    return response;
}