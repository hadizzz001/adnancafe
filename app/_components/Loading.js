// components/Loading.js
const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
            <img src="../pics/load.gif" alt="Loading..." className="w-16 h-16" />
        </div>
    );
};

export default Loading;
