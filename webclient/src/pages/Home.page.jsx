import React from "react";
import Menu from "../parts/Menu.part";
import AllTodos from "../parts/AllTodos.part";

const Home = () => {
    return (
        <div className="flex">
            <Menu />
            <AllTodos />
        </div>
    );
};

export default Home;
