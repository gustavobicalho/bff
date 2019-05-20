const utils = require ('../utils');

exports.user = (data) => {
    let response = {};

    data.results.forEach(user => {
        response = {
            id: user.id,
            fullName: `${user.name}  ${user.lastname}`,
            phone: utils.formatPhone(user.phone),
            cell: utils.formatPhone(user.cell),
            gender: user.gender,
            email: user.email,
        }
    });
    
    return response;
}