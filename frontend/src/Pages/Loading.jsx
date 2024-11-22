import ClockLoader from "react-spinners/ClockLoader";

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <ClockLoader
        color="#000000"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
};

export default Loading;