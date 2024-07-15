// import React, { useState } from 'react';
// import axios from 'axios';

// function Size() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [burstSize, setBurstSize] = useState('');
//   const [waistSize, setWaistSize] = useState('');
//   const [fit, setFit] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await axios.post('http://localhost:5000/predict', {
//       height: parseFloat(height),
//       weight: parseFloat(weight),
//       burst_size: parseFloat(burstSize),
//       waist_size: parseFloat(waistSize)
//     });
//     setFit(response.data.fit);
//   };

//   return (
//     <div className="App">
//       <h1>Dress Size Predictor Brand</h1>
//       <img
//         src="https://via.placeholder.com/150"
//         alt="Dress"
//         onClick={() => document.getElementById('form').style.display = 'block'}
//         style={{ cursor: 'pointer' }}
//       />
//       <form id="form" style={{ display: 'none' }} onSubmit={handleSubmit}>
//         <label>
//           Height:
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Weight:
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Burst Size:
//           <input
//             type="number"
//             value={burstSize}
//             onChange={(e) => setBurstSize(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Waist Size:
//           <input
//             type="number"
//             value={waistSize}
//             onChange={(e) => setWaistSize(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {fit && (
//         <div>
//           <h2>Your Best Fit Size is: {fit}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Size;
import React, { useState } from 'react';
import axios from 'axios';

function Size() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [burstSize, setBurstSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [brand, setBrand] = useState('');
  const [fit, setFit] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/predict', {
      height: parseFloat(height),
      weight: parseFloat(weight),
      burst_size: parseFloat(burstSize),
      waist_size: parseFloat(waistSize),
      brand: brand
    });
    setFit(response.data.fit);
  };

  return (
    <div className="App justify-center flex ">
      {/* <h1 className='flex justify-center font-bold text-xl'>Dress Size Predictor</h1> */}

      <form id="form" className='m-5 flex flex-col w-8/12 xl:w-6/12  rounded-xl bg-slate-200 shadow-lg' onSubmit={handleSubmit}>
      <div class="px-12 py-5">
      <h2 class="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">Dress Size Predictor</h2>
    </div>
    
    <div class="flex w-full  flex-col items-center bg-[#fdfeff]">
    {/* <div className='flex justify-center'>
        <img
            src="https://via.placeholder.com/150"
            alt="Dress"
            className='w-40 mt-2 '
            onClick={() => document.getElementById('form').style.display = 'block'}
            style={{ cursor: 'pointer' }}
            />
    </div> */}
        {/* <label className='mt-3 '>
          Brand:
          <input
          className='resize-none rounded-xl bg-gray-100 p-2 ml-2  text-gray-500 outline-none focus:ring'
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </label> */}
        <br />
        <label >
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
        <button type="submit" className=' w-4/12  my-8 rounded-xl bg-gradient-to-r from-[#f21fb0] to-[#E24C1B] py-3 text-base text-white'>Submit</button>
        </div>
      {fit && (
          <div className='flex items-center justify-center py-5'>
          <h2 className='text-sm text-gray-900 '>Your Best Fit Size is: <span className='font-bold'>{fit}</span></h2>
        </div>
      )}
      </form>
      

    </div>
  );
}

export default Size;