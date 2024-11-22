import { useEffect, useState } from "react";

const Accordion = () => {
  const [frequentlys, setFrequentlys] = useState([]);
  useEffect( ()=>{
      fetch('frequently.json')
      .then(res => res.json())
      .then(data => setFrequentlys(data))
  },[])
 
    return (
        <div className="flex  flex-col gap-2 w-4/5 mx-auto mb-20">
            {
              frequentlys.map((frequently) => <div key={frequently.faq_id} className="collapse collapse-arrow bg-orange-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">{frequently.question}</div>
              <div className="collapse-content">
                <p>{frequently.answer}</p>
              </div>
            </div>)
            }
        </div>
    );
};

export default Accordion;