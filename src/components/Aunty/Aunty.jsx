import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Halim"}></Cousin>
        <Cousin name={"Halima"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
