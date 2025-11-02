import React from 'react'

function Intrests({data,setData}) {
  const {Intrests}=data;
 const handleclick = (e) => {
    const { value, checked } = e.target;

    setData((prev) => {
      let updatedIntrests;

      if (checked) {
        // Add interest if not already present
        updatedIntrests = [...prev.Intrests, value];
      } else {
        // Remove interest if unchecked
        updatedIntrests = prev.Intrests.filter((item) => item !== value);
      }

      return {
        ...prev,
        Intrests: updatedIntrests,
      };
    });
  };
  return (
   <>
   <div>
    <label>
      <input type="checkbox" value="coding" name="coding" checked={Intrests?.includes("coding")} onChange={handleclick}/>
      coding
    </label>
      <label>
      <input type="checkbox" value="music" name="music" checked={Intrests?.includes("music")} onChange={handleclick}/>
      music
    </label>
      <label>
      <input type="checkbox" value="playing" name="playing" checked={Intrests?.includes("playing")} onChange={handleclick}/>
      playing
    </label>
   </div>
      </>
  )
}

export default Intrests