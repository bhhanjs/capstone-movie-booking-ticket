import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";

export default function SeatsHeader() {
  return (
    <div className="w-full space-y-5">
      {/* seat header */}
      <div className="text-center">
        <h1 className="text-3xl text-yama-black font-bold">
          Select your seats
        </h1>
      </div>
      {/* seat lable */}
      <div className="seat__labels flex justify-start gap-5 items-center px-10">
        <div className="seat__label_group">
          <div className="seat-small selected__label">
            <CheckIcon className="w-5 h-5 text-yama-white" />
          </div>
          <label className="label">My seats</label>
        </div>

        <div className="seat__label_group">
          <div className="seat-small free__label"></div>
          <label className="label">Free seats</label>
        </div>

        <div className="seat__label_group">
          <div className="seat-small reserver__label">
            <PersonIcon className="w-3 h-3 text-gray-300" />
          </div>
          <label className="label">Reserver</label>
        </div>
      </div>
    </div>
  );
}
