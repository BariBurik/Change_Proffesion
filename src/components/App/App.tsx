import { FC } from "react";
import './App.scss'
import HowItWork from "../HowItWork/HowItWork";
import ThirdBlock from "../ThirdBlock/ThirdBlock";
import Comments from "../Comments/Comments";
import QandA from "../QandA/QandA";
import About from "../About/About";
import Form from "../Form/Form";
import Body from "../UI/Body/Body";
import Header from "../Header/Header";
import useDisplayWidth from "@/hooks/useDisplayWidth";

 
export const App: FC = () => {
    useDisplayWidth()

    return ( 
        <div>
            <Header/>
            <HowItWork/>
            <ThirdBlock/>
            <Comments/>
            <QandA/>
            <About/>
            <Form/>
            <div><Body pos="center" size={18}>© 2021 Лаборатория интернет</Body></div>
        </div>
    );
}

export default App;