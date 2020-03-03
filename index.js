function convert(schema, toJson = true) {
    const object = {};

    schema._ids._byKey.forEach((item) => {
        object[item.id] = item.schema.type === "object" ? convert(item.schema, false) : item.schema.type.toUpperCase();
    });

    return toJson ? JSON.stringify(object, null, '\t') : object;
}

module.exports = convert;
