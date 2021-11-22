const InputCheckout = ({ name, register, validationObj, errors, placeholder }) => {

    return (
        <div className="form-control">
            <label htmlFor="firstname">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input 
                {
                    ...register(name, validationObj)
                }
                className={errors[name] ? 'invalid' : ''}
                id={name}
                name={name}
                placeholder={placeholder}
                autoComplete="off"
            /> 
            {
                errors[name] && <div className="form-control__validation">
                    <small>{errors[name].message}</small>
                </div>
            }
        </div>
    )
}

export default InputCheckout
