import { useSearchParams } from "react-router-dom";
function Param2() {
  const [params] = useSearchParams();
  const id = params.get("id");
  const name = params.get("name");
  return (
    <>
      <p>요청 id : {id}</p>
      <p>name : {name}</p>
    </>
  );
}

export default Param2;
