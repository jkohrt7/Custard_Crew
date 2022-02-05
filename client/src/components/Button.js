
function Button (props) {
    return (
        <button className = "text-white text-lg px-4 w-24 transition ease-in-out duration-75 hover:bg-gray-600 ">
            {props.label}
        </button>
    )
}

export default Button;