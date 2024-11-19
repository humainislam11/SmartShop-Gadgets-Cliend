import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen -mt-16 min-w-screen flex justify-center items-center">
            <GridLoader
        color="#000000"
        loading={true}
        size={80}
       
      />
        </div>
    );
};

export default Loading;