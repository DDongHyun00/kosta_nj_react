function Btn(props) {
    //props = {big : true, text : "Save"}
    const {fontSize,text,color,backgroundColor,onClick} = props;
    console.log(text, "is Read")
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    padding: "5px 10px",
    borderRadius: 5,
    fontSize: fontSize,
  };
  return <button style={style} onClick={{onClick}}>{text}</button>;
}
export default Btn;
