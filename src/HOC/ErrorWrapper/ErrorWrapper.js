import './ErrorWrapper.css'

export const ErrorWrapper = ({children, error}) => {
    return (
        <div>
            {children}
            {error && <p className="error">{error}</p>}
        </div>
    )
}