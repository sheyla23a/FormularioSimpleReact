
const MensajeExito = ({ children }) => {
    return (
        <div className="alert alert-success" role="alert">
            {children}
        </div>
    );
};

export default MensajeExito;