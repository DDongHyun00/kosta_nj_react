import { useParams } from "react-router-dom";
function Param1() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <p>요청 id : {id}</p>
    </>
  );
}

export default Param1;
