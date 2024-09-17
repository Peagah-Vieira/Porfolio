import React from "react";

type props = {
    load: boolean,
}

export default function Preloader({ load }: props) {
    return <div id={load ? "preloader" : "preloader-none"}></div>;
}

