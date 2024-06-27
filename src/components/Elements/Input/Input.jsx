const Input = (props) => {
    const { type, placeholder, name} = props
    return (
        <input type={type} 
        className="text-sm border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-slate-700 placeholder:opacity-50" id="password" 
        placeholder={placeholder}/>
    )
}
export default Input