import * as React from "react";

import styles from "./styles/app.module.scss";

/** Objective checklist:
 * 1. 3 Entry Points
 * 2. Type of Vehicles: S - Small, M - Medium & L - Large //TODO:
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
 * 6. 0 small, 1 medium & 2 large //TODO:
 * 7. Show user if the slot is available or not //TODO:
 * 8. Park and unpark //TODO:
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

  // const [dateTime, setDateTime] = React.useState(new Date());

  // React.useEffect(() => {
  //   const updateTime = () => {
  //     setInterval(() => {
  //       const currentDate = new Date().toLocaleDateString();
  //       setDateTime({ date: currentDate });
  //     }, 1000);
  //   };

  //   updateTime();
  // }, [dateTime]);

  const currentDate = new Date();

  const [formRadio, setFormRadio] = React.useState([
    {
      vehicleType: 0,
      entryPoint: "",
      date: `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()} ${
        currentDate.getHours() / 2
      }:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
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

  const handleUnPark = (index) => {
    const getSelectedCar = document
      .getElementById(index)
      .getAttribute("data-value");

    for (let i = 0; i < parkingData.length; i++) {
      for (let j = 0; j < parkingData[i].slots.length; j++) {
        if (parkingData[i].slots[j].list.includes(getSelectedCar)) {
          // parkingData[i].slots[j].list.filter(
          //   (e) => e !== getSelectedCar.toString()
          // );

          parkingData[i].slots[j].list.splice(index);

          setParkingData([...parkingData]);
        }
      }
    }
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
                            id={i}
                            key={i}
                            data-value={list}
                            onClick={() => handleUnPark(i)}
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
