
const Input = ({ type, placeholder, value, labelName }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400 ">{labelName}</label>
            <input type={type} value={value} className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500" placeholder={placeholder} />
        </div>
    );
};

export default Input;