function isValidEnvironmentId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id is not a num');
    if (id < 0) throw new Error('id is a negative');

    next()
}

function isValidBody(req, res, next) {
    const { label, category, priority } = req.body;
    if (!label) throw new Error('you not gave a label');
    if (!category) throw new Error('you not gave a category');
    if (!priority) throw new Error('you not gave a priority');

    if (!isNaN(label)) throw new Error('label is a num');
    if (!isNaN(category)) throw new Error('category is a num');
    
    next()
}

module.exports = { isValidEnvironmentId, isValidBody };