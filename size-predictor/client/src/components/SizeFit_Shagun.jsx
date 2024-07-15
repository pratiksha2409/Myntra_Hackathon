import React, { useState } from 'react';

function SizeFit() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [burstSize, setBurstSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [fit, setFit] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulated fit value
    const simulatedFit = 'M';

    // Set the fit state to the simulated value
    setFit(simulatedFit);
  };

  return (
    <div className="App justify-center flex">
      <form id="form" className='m-5 flex flex-col w-8/12 xl:w-6/12 rounded-xl bg-slate-200 shadow-lg' onSubmit={handleSubmit}>
        <div className="px-12 py-5">
          <h2 className="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">Dress Size Predictor</h2>
        </div>

        <div className="flex w-full flex-col items-center bg-[#fdfeff]">
          <br />
          <label>
            Height:
            <input
              className='resize-none rounded-xl bg-gray-100 p-2 ml-2 text-gray-500 outline-none focus:ring'
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Weight:
            <input
              className='resize-none rounded-xl bg-gray-100 p-2 ml-2 text-gray-500 outline-none focus:ring'
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Burst Size:
            <input
              type="number"
              className='resize-none rounded-xl bg-gray-100 p-2 ml-2 text-gray-500 outline-none focus:ring'
              value={burstSize}
              onChange={(e) => setBurstSize(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Waist Size:
            <input
              type="number"
              className='resize-none rounded-xl bg-gray-100 p-2 ml-2 text-gray-500 outline-none focus:ring'
              value={waistSize}
              onChange={(e) => setWaistSize(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit" className='w-4/12 my-8 rounded-xl bg-gradient-to-r from-[#f21fb0] to-[#E24C1B] py-3 text-base text-white'>Submit</button>
        </div>
        {fit && (
         <div className='flex items-center justify-center py-5'>
         <h2 className='text-3xl text-black-1000'>Your Best Fit Size For This Brand  is : <span className='font-bold text-pink-500'>{fit}</span></h2>
       </div>
       
        )}
      </form>
    </div>
  );
}

export default SizeFit;
