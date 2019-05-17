exports.formatPhone = (phone) => {
    phone = phone.replace(/\D/g,"");             
    phone = phone.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    phone = phone.replace(/(\d)(\d{4})$/,"$1-$2");    
    return phone;
}

exports.formatPrice = (price) => {
    price= price.toFixed(2).split('.');
    price[0] = "R$ " + price[0].split(/(?=(?:...)*$)/).join('.');
    return price.join(',');
}