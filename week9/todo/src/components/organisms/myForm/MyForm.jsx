import InputWithHeader from "../../molecules/InputWithHeader/InputWithHeader";
import MyButton from "../../atoms/myButton/MyButton";

const MyForm = () => {
  return (
    <>
      <InputWithHeader />
      <MyButton variant="contained" size="small">
        Submit
      </MyButton>
    </>
  );
};

export default MyForm;
