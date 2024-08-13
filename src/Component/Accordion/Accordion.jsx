import React, { useState } from "react";
import "./Accordion.css";
// import axios from "axios";

function Accordion() {
  // useEffect(() => {
  //   fetch();
  // }, []);

  // const [data, setData] = useState([]);

  // const fetch = async () => {
  //   const res = await axios.get(`http://localhost:3000/data`);
  //   console.log(res.data);
  //   setData(res.data);
  // };

  const [show, setShow] = useState(false);

  return (
    <>
      <section className="main-div">
        {/* {data &&
          data.map((value) => {
            return (
              <div key={value.id}>
                <div  className="main-heading">
                  <p onClick={ () => setShow(!show)}> {show? "➖" : "➕" }</p>
                  <h3>{value.que}</h3>
                </div>
                 {
                    show && <p className="answers">{value.ans}</p>
                 }
                
              </div
            );
          })} */}

        <div className="main-heading">
          <p onClick={() => setShow(!show)}> {show ? "➖" : "➕"}</p>
          <h3>aaaaa</h3>
        </div>
        {show && <p className="answers">gggdg</p>}
      </section>
    </>
  );
}

export default Accordion;
