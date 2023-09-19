import classes from "./ResultsTable.module.css";

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ResultsTable(props) {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearlyData) => {
          return (
            <tr key={yearlyData.year}>
              <td>{yearlyData.year}</td>
              <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearlyData.savingsEndOfYear -
                    props.initialInvestment -
                    yearlyData.savingsEndOfYear * yearlyData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearlyData.yearlyContribution * yearlyData.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default ResultsTable;
