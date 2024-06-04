import React from "react";

const TodoDetails = () => {
    return (
        <div className="bg-white p-2.5 border-[2px] border-[#e5e5e5] rounded-[10px]">
            <p className="text-[30px] font-bold">Documenting on Github</p>
            <p className="text-[18px] font-semibold">
                <span className="text-[#3f3f3f]">Due Date: </span>
                <span>4 June, 2024</span>
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget arcu vitae dolor condimentum placerat ut at erat. Nunc
                blandit dui vitae lectus dapibus, ut feugiat metus commodo. Sed
                at odio non libero dapibus mollis. Praesent pulvinar, velit eget
                scelerisque auctor, enim orci lobortis erat, in maximus purus
                arcu in eros.
            </p>
        </div>
    );
};

export default TodoDetails;
// Path: webclient/src/pages/Todo.page.jsx
