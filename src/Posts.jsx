import {useParams, useLocation } from "react-router-dom"

export default function Posts ()
{
    const urlstring = new URLSearchParams(useLocation().search);
    const {id}=useParams();
    const fname = urlstring.get("fname");
    const lname = urlstring.get("lname");
    return (<h1>This is post page Hello {fname} {lname} {id}</h1>);
}