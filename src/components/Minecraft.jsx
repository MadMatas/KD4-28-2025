import { useState } from "react";
import { useEffect } from "react";


function Minecraft() {


    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const [answer, setAnswer] = useState(0);

    useEffect(() => {
        

        let ans = x;
        ans = ans * y + Number(z);

        setAnswer(ans)

    }, [x, y, z]);



  return (
    <>
      <div className="p-5">
        <div>
          <label htmlFor="X">X</label>
          <input type="number" name="X" id="X" value={x} onChange={(e) => [setX(e.target.value)]}/>
        </div>
        <div>
          <label htmlFor="Y">Y</label>
          <input type="number" name="Y" id="Y" value={y} onChange={(e) => [setY(e.target.value)]}/>
        </div>
        <div>
          <label htmlFor="Z">Z</label>
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
