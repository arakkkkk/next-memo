"use client";
import axios from "axios";
import { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/v1/user/logout",
            withCredentials: true,
        })
            .then(() => {
                window.location.href = "/user/login";
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);
};
export default Logout;
