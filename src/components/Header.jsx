import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money Bag" />
      <h1>Investment Caluculator</h1>
    </header>
  );
}
