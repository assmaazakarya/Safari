import React, { useEffect, useState } from "react";
import Seat from "./Seat";

function SeatsLayout() {
  const [SelectedSeat, setSelectedSeat] = useState(0);
  const [Seats, setSeats] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      status: "available",
    }))
  );

  useEffect(() => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (
          seat.id === 1 ||
          seat.id === 2 ||
          seat.id === 12 ||
          seat.id === 17 ||
          seat.id === 22 ||
          seat.id === 3 ||
          seat.id === 5 ||
          seat.id === 7
        ) {
          return { ...seat, status: "unavailable" };
        }
        return seat;
      })
    );
  }, []);

  //   console.log(Seats);
  let SeatRow = [];
  for (let i = 0; i < Seats.length; i += 5) {
    SeatRow.push(Seats.slice(i, i + 5));
  }

  function handleSeatClick(seatID) {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatID
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            }
          : seat
      )
    );
  }

  return (
    <div className="p-2">
      <div className="flex flex-col gap-10 md:gap-6 ">
        {SeatRow.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between">
            <div className="flex gap-4 md:gap-6 ">
              {row.slice(0, 2).map((seat) => (
                <Seat
                  key={seat.id}
                  Seat={seat}
                  action={() => handleSeatClick(seat.id)}
                />
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 ">
              {row.slice(2).map((seat) => (
                <Seat
                  key={seat.id}
                  Seat={seat}
                  action={() => handleSeatClick(seat.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatsLayout;
