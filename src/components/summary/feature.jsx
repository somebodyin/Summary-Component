
export default function Feature({ element }) {
    const textColor = {color: `${element.color}`};
    
    return (
        <div className="flex flex-row px-4 items-center h-[3.25rem]  bg-[]/[.10] rounded-lg md:w-[15rem]"
        style={{
            backgroundColor: `${element.color}1A`,
        }}>
            {element.icon}
            <p className="font-medium ml-3" style={textColor}>{element.category}</p>
            <p className="ml-auto font-semibold text-gray-400">
                <span className=" text-darkGrayBlue">{element.score}</span>
                {" "}/ 100
            </p>
        </div>
    );
}