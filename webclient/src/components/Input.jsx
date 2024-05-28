const Input = ({ type, placeholder, value, onChange, TLLabel, TRLabel, BLLabel, BRLabel }) => {
    return (
        <label className="form-control w-full">
            <div className="label py-0">
                {TLLabel && <span className="label-text">{TLLabel}</span>}
                {TRLabel && <span className="label-text-alt">{TRLabel}</span>}
            </div>
            <input
                type={type ?? "text"}
                placeholder= {placeholder ?? "Enter your name"}
                className="input input-bordered w-full"
                value={value}
                onChange={onChange}
            />
            <div className="label">
                {BLLabel && <span className="label-text-alt">{BLLabel}</span>}
                {BRLabel && <span className="label-text-alt">{BRLabel}</span>}
            </div>
        </label>
    );
};

export default Input;
