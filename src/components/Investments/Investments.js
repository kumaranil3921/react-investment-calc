import NewInvestment from "./NewInvestment";
function Investments(props) {
  return (
    <div>
      <NewInvestment onSubmitInvestment={props.onSubmitInvestment} />
    </div>
  );
}

export default Investments;
