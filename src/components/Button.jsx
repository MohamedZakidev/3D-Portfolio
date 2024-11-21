// eslint-disable-next-line react/prop-types
function Button({ children, containerClass, isBeam }) {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex size-3">
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
            {children}
        </button>
    )
}

export default Button
