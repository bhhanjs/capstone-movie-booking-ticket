import React from "react";
import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function SeatsReserver({ selected = [1, 2] }) {
  return (
    <div className="seat__reserver px-15">
      <div className="seat__reserver__container  space-y-5">
        {/* seat lable */}
        <div className="seat__labels flex justify-start gap-5 items-center">
          <div className="seat__label_group">
            <div className="seat selected__label">
              <CheckIcon className="w-5 h-5 text-yama-white" />
            </div>
            <label className="label">My seats</label>
          </div>

          <div className="seat__label_group">
            <div className="seat free__label"></div>
            <label className="label">Free seats</label>
          </div>

          <div className="seat__label_group">
            <div className="seat reserver__label">
              <PersonIcon className="w-3 h-3 text-gray-300" />
            </div>
            <label className="label">Reserver</label>
          </div>
        </div>

        {/* seat reserver confirm */}
        {selected.length === 0 ? (
          ""
        ) : (
          <div className="seat__confirm">
            <h3 className="text-lg font-semibold">Selected Seats</h3>
            <div className="flex justify-between items-center">
              <ul>
                {selected.map((seat) => (
                  <li className="text-sm text-gray-400">
                    Fautueil standard :{" "}
                    <span className="text-yama-dark-gray text-[14px] font-semibold px-5">
                      {seat}
                    </span>
                  </li>
                ))}
              </ul>
              <div>
                <Button className="bg-yama-main-green text-yama-white h-12 hover:bg-yama-main-green duration-300 transition-all ase-[cubic-bezier(1,.4,.5,1)] hover:opacity-70">
                  Reserve my seats
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
