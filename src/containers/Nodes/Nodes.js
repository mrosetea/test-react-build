import React from "react";
const Nodes = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </div>
    )
}

export default Nodes;