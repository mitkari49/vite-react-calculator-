import React from "react";

function OperationButtons({ operation, label, onClick }) {
    return (
        <button onClick={() => onClick(operation)}>{label}</button>
    );
}

export default OperationButtons;