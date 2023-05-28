function isValidUserId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id is not a num');
    if (id < 0) throw new Error('id is a negative');

    next()
}

function isValidBody(req, res, next) {
    const { name, surname, birth, city, age } = req.body;
    if (!name) throw new Error('you not gave a name');
    if (!surname) throw new Error('you not gave a surname');
    if (!birth) throw new Error('you not gave a birth');
    if (!city) throw new Error('you not gave a city');
    if (!age) throw new Error('you not gave a age');

    if (!isNaN(name)) throw new Error('name is a num');
    if (!isNaN(surname)) throw new Error('surname is a num');
    if (!isNaN(city)) throw new Error('category is a num');
    if (isNaN(age)) throw new Error('age is not a num');
    

    const regex = /^\d{4}\-\d{2}\-\d{2}$/gm;

    if(!regex.test(birth)) throw new Error('data format is invalid')

    next()
};

module.exports = { isValidUserId, isValidBody };