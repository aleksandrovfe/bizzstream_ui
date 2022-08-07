export const calculateErrors = (doc, payload) => {
    const validationErrors = {}
    doc.flat().forEach(doc => {
        if (doc.maxLength && payload?.[doc.name] && payload[doc.name].length > doc.maxLength) {
            validationErrors[doc.name] = `Maximum length ${doc.maxLength} characters`
        }
    })

    return validationErrors
}