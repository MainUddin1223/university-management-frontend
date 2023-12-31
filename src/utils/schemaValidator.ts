export const getErrorMessageByPropartyName = (obj: Record<string, any>, propertyPath: string) => {

    const propertys = propertyPath.split('.');
    console.log(propertys)
    let value = obj;
    for (const prop of propertys) {
        if (value[prop]) {
            value = value[prop]
        } else {
            return undefined
        }
    }
    return value.message
}