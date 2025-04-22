import { useEffect } from "react";

function Image() {
    function destroyed(){
        console.log("이미지가 소멸됨");
    }
    function created(){
        console.log("이미지가 생성됨");
        return destroyed;
    }
    useEffect((created) , [])
  return (
    <>
      <img src=" src/assets/react.svg" alt="react.svg" />
    </>
  );
}

export default Image;