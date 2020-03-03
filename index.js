function convert(schema) {
    const object = {};

    schema._ids._byKey.forEach((item) => {
        object[item.id] = item.schema.type === "object" ? convert(item.schema) : item.schema.type.toUpperCase();
    });

    return JSON.stringify(object, null, '\t');
}

module.exports = convert;
