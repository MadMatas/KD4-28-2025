import { useState } from "react";
import { useEffect } from "react";


function Minecraft() {


    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const [answer, setAnswer] = useState(0);

    useEffect(() => {
        

        let plotis = x;
        let aukstis = y;
        let ilgis = z;
        let ans = 0;

        ans = (2 * (plotis * aukstis) + 2 * (ilgis * aukstis) + 2 * (ilgis * plotis)) - 2;

        setAnswer(ans)

    }, [x, y, z]);



  return (
    <>
      <div className="ml-3">
        <p>Minecraft namo reikiamų blokų skaičiuotuvas (vienablokės durys atskaičiuotos)</p>
      </div>
      <div className="p-5">
        <div>
          <label className="mr-5" htmlFor="X">Plotis</label>
          <input type="number" name="X" id="X" value={x} onChange={(e) => [setX(e.target.value)]}/>
        </div>
        <div>
          <label className="mr-5" htmlFor="Y">Aukštis</label>
          <input type="number" name="Y" id="Y" value={y} onChange={(e) => [setY(e.target.value)]}/>
        </div>
        <div>
          <label className="mr-5" htmlFor="Z">Ilgis</label>
          <input type="number" name="Z" id="Z" value={z} onChange={(e) => [setZ(e.target.value)]}/>
        </div>
      </div>
      <div className="p-5">
        Atsakymas: {answer}
      </div>
    </>
  );
}

export default Minecraft;
