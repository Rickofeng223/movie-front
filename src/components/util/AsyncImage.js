import React, {useEffect, useState} from "react";

const AsyncImage = ({src, alt, className}) => {
    const [img, setImg] = useState();

    const fetchImage = async () => {
        const blob = await (await fetch(src)).blob();
        setImg(URL.createObjectURL(blob));
    };

    useEffect(()=> {
        if(src) {
            fetchImage()
        }

    }, []);

    return (<img src={img} alt={alt} className={className}/>);
}
export default AsyncImage