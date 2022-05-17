import * as React from "react";

import styles from "./styles/app.module.scss";

/** Objective checklist:
 * 1. 3 Entry Points
 * 2. Type of Vehicles: S - Small, M - Medium & L - Large
 * 3. Type of Slots: SP - Small, MP - Medium & LP - Large
 * 4. Calculation fees - Flat rate 40 pesos for first 3 hours //TODO:
 *    Exceeding hourly rate (PARKED in & Regardless of vehicle size):
 *    20 pesos/hour for SP
 *    60 pesos/hour for MP
 *    100 pesos/hour for LP
 *    Parking that exceeds 24 hours, 5000 pesos charge
 * 5. Vehicle leaving and returning within one hour must be charged //TODO:
 *    continuous rate ---- * Problem: how to keep track? Before leaving, prompt the user
 *    whether not coming back or coming back?
 * 6. 0 small, 1 medium & 2 large
 * 7. Show user if the slot is available or not
 * 8. Park and unpark
 */

const app = () => {
  const [parkingData, setParkingData] = React.useState([
    {
      entryPoint: "A",
      where: "West Entrance",
      className: styles.westEnt,
      slots: [
        {
          slotType: 0,
          name: "Small (SP)",
          list: [],
        },
        {
          slotType: 1,
          name: "Medium (MP)",
          list: [],
        },
        {
          slotType: 2,
          name: "Large (LP)",
          list: [],
        },
      ],
    },
    {
      entryPoint: "B",
      where: "East Entrance",
      className: styles.eastEnt,
      slots: [
        {
          slotType: 0,
          name: "Small (SP)",
          list: [],
        },
        {
          slotType: 1,
          name: "Medium (MP)",
          list: [],
        },
        {
          slotType: 2,
          name: "Large (LP)",
          list: [],
        },
      ],
    },
    {
      entryPoint: "C",
      where: "South Entrance",
      className: styles.southEnt,
      slots: [
        {
          slotType: 0,
          name: "Small (SP)",
          list: [],
        },
        {
          slotType: 1,
          name: "Medium (MP)",
          list: [],
        },
        {
          slotType: 2,
          name: "Large (LP)",
          list: [],
        },
      ],
    },
  ]);

  const currentDate = new Date();

  const [formRadio, setFormRadio] = React.useState([
    {
      vehicleType: 0,
      entryPoint: "",
      date: `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
    },
  ]);

  const handleChange = (index, e) => {
    let data = [...formRadio];
    data[index][e.currentTarget.name] = e.currentTarget.value;
    setFormRadio(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const magicNumber = 0;

    for (let i = 0; i < parkingData.length; i++) {
      if (parkingData[i].entryPoint === formRadio[magicNumber].entryPoint) {
        for (let j = 0; j < parkingData[i].slots.length; j++) {
          if (
            parkingData[i].slots[j].slotType ===
            Number(formRadio[magicNumber].vehicleType)
          ) {
            if (parkingData[i].slots[j].list.length !== 3) {
              parkingData[i].slots[j].list.push(formRadio[magicNumber].date);

              setParkingData([...parkingData]);
            } else {
              alert("Parking space is full!");
            }
          }
        }
      }
    }
  };

  const handleCompute = (vehicleType) => {
    const currentDate = new Date();
    const magicNumber = 0;
    const getMyTime = formRadio[magicNumber].date;
    const magicHour = getHourNow === 12 ? 7 : 8;
    const getSeconds = Number(currentDate.getSeconds());
    const magicMinute = getSeconds <= 9 ? 4 : 5;
    const startIndex = 0;
    const endIndex = getHourNow === 12 ? 1 : 2;

    // Current Hour & Minutes
    const getHourNow =
      Number(currentDate.getHours()) === 0
        ? 12
        : Number(currentDate.getHours());

    const getMinutesNow = Number(currentDate.getMinutes());

    console.log("GetHourNow", getHourNow);
    console.log("getMinutesNow", getMinutesNow);

    // Login time of each car
    const startedHour =
      Number(
        getMyTime
          .substring(getMyTime.length - magicHour)
          .substring(startIndex, endIndex)
      ) === 0
        ? 12
        : Number(
            getMyTime
              .substring(getMyTime.length - magicHour)
              .substring(startIndex, endIndex)
          );

    const startedMinutes = Number(
      getMyTime
        .substring(getMyTime.length - magicMinute)
        .substring(startIndex, endIndex)
    );

    console.log("startedHour", startedHour);
    console.log("startedMinutes", startedMinutes);

    let remainingHour = getHourNow - startedHour;
    let remainingMinutes = getMinutesNow - startedMinutes;

    let is24H = 1000 * 60 * 24;
    let is1H = 1000 * 60;

    let charges = 0;
    let hourlyCharge = 0;
    const flatRate = 40;

    // Flat rate
    if (remainingHour <= 180) {
      charges = flatRate;
    }

    if (Number(vehicleType) === 0) {
      hourlyCharge = 20;
      console.log(hourlyCharge);
    } else if (Number(vehicleType) === 1) {
      hourlyCharge = 60;
      console.log(hourlyCharge);
    } else if (Number(vehicleType) === 2) {
      hourlyCharge = 100;
      console.log(hourlyCharge);
    }

    // Succeeding hour
    if (remainingHour > is1H * 3) {
      remainingHour -= is1H * 3;
      charges += 40;
    }

    // 24h
    if (remainingHour > is24H) {
      let nth = parseInt(remainingHour / is24H);
      charges += nth * 5000;
      remainingHour -= nth * is24H;
    }

    return alert(`Your bill is ${charges} pesos`);
  };

  const handleUnPark = (name, index) => {
    const getSelectedCar = document
      .getElementById(name)
      .getAttribute("data-value");

    const getSlotType = document
      .getElementById(name)
      .getAttribute("data-slottype");

    const getName = document.getElementById(name).getAttribute("data-name");

    for (let i = 0; i < parkingData.length; i++) {
      if (parkingData[i].entryPoint === getName) {
        for (let j = 0; j < parkingData[i].slots.length; j++) {
          if (parkingData[i].slots[j].slotType === Number(getSlotType)) {
            if (parkingData[i].slots[j].list.includes(getSelectedCar)) {
              parkingData[i].slots[j].list.splice(index, 1);
              setParkingData([...parkingData]);
            }
          }
        }
      }
    }

    handleCompute(Number(getSlotType), getName);
  };

  return (
    <section className={styles.container}>
      <div className={styles.outterContainer}>
        {parkingData.map((data, index) => {
          return (
            <div key={index} className={data.className}>
              <h2 className={styles.entryPoint}>{data.entryPoint}</h2>
              <p className={styles.where}>{data.where}</p>

              {data.slots.map((slot, index) => {
                return (
                  <div key={index} className={styles.innerContainer}>
                    <p>
                      <span className={styles.slotType}>Slot Type: </span>
                      {slot.name}
                    </p>
                    <ul className={styles.list}>
                      {slot.list.map((list, i) => {
                        return (
                          <li
                            id={slot.name}
                            key={i}
                            data-value={list}
                            data-slottype={slot.slotType}
                            data-name={data.entryPoint}
                            onClick={() => handleUnPark(slot.name, i)}
                          >
                            {list}
                          </li>
                        );
                      })}
                    </ul>

                    {slot.list.length === 3 && (
                      <p className={styles.fullSlot}>Full!</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <form onSubmit={(values) => onSubmit(values)} className={styles.form}>
        {formRadio.map((data, index) => {
          return (
            <div key={index}>
              <div>
                <span>Vehicle Type - </span>
                <label htmlFor="small"> SP </label>
                <input
                  type="radio"
                  name="vehicleType"
                  id="small"
                  value={0}
                  onChange={(e) => handleChange(index, e)}
                  required
                />

                <label htmlFor="medium"> MP </label>
                <input
                  type="radio"
                  name="vehicleType"
                  id="medium"
                  value={1}
                  onChange={(e) => handleChange(index, e)}
                  required
                />

                <label htmlFor="large"> LP </label>
                <input
                  type="radio"
                  name="vehicleType"
                  id="large"
                  value={2}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>

              <div>
                <span>Entry point - </span>
                <label htmlFor="westEnt">A </label>
                <input
                  type="radio"
                  name="entryPoint"
                  id="westEnt"
                  value="A"
                  onChange={(e) => handleChange(index, e)}
                  required
                />

                <label htmlFor="eastEnt"> B </label>
                <input
                  type="radio"
                  name="entryPoint"
                  id="eastEnt"
                  value="B"
                  onChange={(e) => handleChange(index, e)}
                  required
                />

                <label htmlFor="southEnt"> C </label>
                <input
                  type="radio"
                  name="entryPoint"
                  id="southEnt"
                  value="C"
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="plateNumber">Current Date & Time:</label>
                <input
                  type="text"
                  placeholder={`${data.date}`}
                  value={data.date}
                  onChange={(e) => handleChange(index, e)}
                  name="date"
                  className={`${styles.input} ${styles.date}`}
                  disabled
                />
              </div>
            </div>
          );
        })}

        <div>
          <button type="submit" className={styles.btnSubmit}>
            Park
          </button>
          <button
            type="reset"
            className={styles.btnReset}
            onClick={() =>
              setFormRadio([
                {
                  vehicleType: 0,
                  entryPoint: "",
                },
              ])
            }
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default app;
