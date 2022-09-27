import React, { useEffect } from "react";
import { fetchGreeting } from "./redux/greeting";
import { useDispatch, useSelector } from "react-redux";

export default function Greeting() {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greeting);
    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);
    return (
        <div>
            <p>Hi</p>
        </div>
    );
}