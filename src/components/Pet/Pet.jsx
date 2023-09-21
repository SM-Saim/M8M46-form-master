import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Pet = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Hooman</h2>
      <p>Now I have: {asset}</p>
      <p> I also have: {gift}</p>
    </div>
  );
};

export default Pet;
