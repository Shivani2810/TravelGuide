import Card from './Card'

// function Tours(props) {
//   return (
//     <div>
//       <div>heading</div>

//       {/* rendering multiple cards using map */}
//       <div>
//         {props.tourdata.map((tour) => (
//           <Card key={tour.id} {...tour} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tours;

function Tours({tourdata, removeTour}) {
  return (
    <div className='container'>

      <div className='heading'>
        <h2>"Your virtual Planner"</h2>
      </div>

      {/* rendering multiple cards using map */}
      <div className='cards'>
        {tourdata.map((tour) => (
          <Card key={tour.id} {...tour} removeTour1={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
