import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rafsan"}></Cousin>
        <Cousin name={"Rehana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
