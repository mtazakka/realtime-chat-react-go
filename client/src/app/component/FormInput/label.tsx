const Label = (props:any) => {
    const { htmlFor, children } = props
    return (
        <label
            htmlFor={ htmlFor } className="block text-sm font-semibold text-gray-700 font-sans"
        >
            { children }
        </label>
    )
}

export default Label