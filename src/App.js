import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoc, handleStatus, saveData} from "./store/reducers/documentReducer";
import {Rows} from "./components/Rows/Rows";
import {ToastMessage} from "./components/ToastMessage/ToastMessage";

function App() {
    const doc = useSelector((state) => state.document.doc)
    const values = useSelector((state) => state.document.values)
    const status = useSelector((state) => state.document.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDoc())
    }, [dispatch])

    const handleForm = (event) => {
        event.preventDefault()
        dispatch(saveData(values))
    }

    const handleToast = () => {
        dispatch(handleStatus(''))
    }

    return (
        <>
            <ToastMessage message={status} handler={handleToast}/>
            <form onSubmit={handleForm} className="doc">
                {!!doc.length && <Rows rows={doc}/>}
            </form>
        </>
    );
}

export default App;
