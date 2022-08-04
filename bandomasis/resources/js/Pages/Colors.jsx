import axios from "axios";
import { useEffect, useState } from "react";

const Colors = (props) => {
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState("#009955");

    const save = () => {
        if (colors !== null) {
            axios.post(props.saveUrl, colors).then((res) => "");
        }
    };

    useEffect(() => {
        setColors(props.colors ?? []);
    }, [props.colors]);

    useEffect(() => {
        const timerId = setInterval(() => {
            save();
        }, 5000);
        return () => clearInterval(timerId);
    }, [save]);

    const addColor = () => {
        setColors([...colors, color]);
    };

    const deleteColor = (id) => {
        let oldColors = [...colors];
        const colorDelete = oldColors.splice(id, 1);
        setColors(oldColors);
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center mt-3 ">
                {colors.map((color, index) => {
                    return (
                        <button
                            onClick={() => deleteColor(index)}
                            className="w-32 h-32 mr-2 animate-spin-slow rounded-lg flex items-center justify-center"
                            key={index}
                            style={{ backgroundColor: color }}
                        >
                            {color}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col items-center justify-center mt-8 ">
                <input
                    value={color}
                    type="color"
                    name="addColor"
                    id="add"
                    className="mt-3"
                    onChange={(e) => setColor(e.target.value)}
                />
                <button
                    onClick={addColor}
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                >
                    Add color
                </button>
                <button
                    onClick={save}
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                >
                    Save color
                </button>
            </div>
        </>
    );
};

export default Colors;
