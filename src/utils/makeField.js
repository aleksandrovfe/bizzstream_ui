import {ErrorWrapper} from "../HOC/ErrorWrapper/ErrorWrapper";

export const makeField = (field, handleValue, values, validationErrors, disableForm) => {
    if (field.type === 'Text') {
        return (
            <ErrorWrapper error={validationErrors[field.name]}>
                <label>
                    {field.label}
                    <input required onChange={(event) => handleValue(event.target.name, event.target.value)} name={field.name} type="text"/>
                </label>
            </ErrorWrapper>
        )
    }
    if (field.type === 'number') {
        return (
            <label>
                {field.label}
                <input required onChange={(event) => handleValue(event.target.name, +event.target.value)}  name={field.name} type="number"/>
            </label>
        )
    }
    if (field.type === 'button') {
        return (
            <button disabled={disableForm} type="submit">{field.label}</button>
        )
    }
    return ''
}