import React from "react";

function InputField({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="placeholder"
        />
    );
}

export default InputField;