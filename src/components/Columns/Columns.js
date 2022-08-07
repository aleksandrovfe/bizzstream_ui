import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../../store/reducers/documentReducer";
import {makeField} from "../../utils/makeField";

export const Columns = ({columns}) => {
    const values = useSelector((state) => state.document.values)
    const validationErrors = useSelector((state) => state.document.validationErrors)
    const disableForm = useSelector((state) => state.document.disableForm)
    const dispatch = useDispatch()

    const handleValue = (name, value) => {
        dispatch(setValue({[name]: value}))
    }

    return columns.map(col => (
        <div key={col.label} className="col">{makeField(col, handleValue, values, validationErrors, disableForm)}</div>
    ))
}
