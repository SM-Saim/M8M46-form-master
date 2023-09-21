import { useContext, useEffect } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Halim"}></Cousin>
        <Cousin name={"Halima"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add more 1000</button>
    </div>
  );
};

export default Aunty;
