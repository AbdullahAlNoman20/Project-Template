import UseAuth from "../Hooks/UseAuth";

const Overview = () => {
    const {user} = UseAuth();
    return (
        <div>
            Overview
        </div>
    );
};

export default Overview;