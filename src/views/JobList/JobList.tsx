import React, {useState} from "react";

type Data = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface Props{
    error: string;
    responseData: Data[];
}

const JobList = () => {

    const [data, setData] = useState<Props[] | {
        error: "",
        responseData: [],
    }>({
        error: "",
        responseData: [],
    });



    return(
        <>
            <h1>Hello aaaaaayyyyyyyy</h1>
        </>
    )
}

export default JobList;