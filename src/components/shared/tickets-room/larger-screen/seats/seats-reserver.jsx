import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import formatPrice from "@/components/shared/support-fn/format-price";

export default function SeatsReserver() {
  const { selectedSeats } = useSelector((state) => state.ticketRoomSlice);
  console.log(selectedSeats);

  const standard = selectedSeats.filter((seat) => seat.loaiGhe === "Thuong");
  const premium = selectedSeats.filter((seat) => seat.loaiGhe !== "Thuong");
  const total =
    selectedSeats.length !== 0
      ? standard.length * standard[0].giaVe + premium.length * premium[0].giaVe
      : "null";

  return (
    <div className="seat__reserver px-15">
      <div className="seat__reserver__container">
        {/* seat reserver confirm */}
        {selectedSeats.length === 0 ? (
          ""
        ) : (
          <div className="seat__confirm">
            <h3 className="text-lg font-semibold">Selected Seats</h3>
            <div className="flex justify-between items-center w-full">
              {/* table */}
              <div className="w-7/12">
                <Table>
                  {/* <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Seats</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader> */}
                  <TableBody>
                    {standard.length !== 0 && (
                      <TableRow>
                        <TableCell>Standard</TableCell>
                        <TableCell>{standard.length}</TableCell>
                        <TableCell>
                          {standard.map((seat) => seat.seatIdRender).join(",")}
                        </TableCell>
                        <TableCell>
                          {formatPrice(standard?.[0].giaVe)}
                        </TableCell>
                      </TableRow>
                    )}
                    {premium.length !== 0 && (
                      <TableRow>
                        <TableCell>Premium</TableCell>
                        <TableCell>{premium.length}</TableCell>
                        <TableCell>
                          {premium.map((seat) => seat.seatIdRender).join(",")}
                        </TableCell>
                        <TableCell>{formatPrice(premium?.[0].giaVe)}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell>{formatPrice(total)}</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              {/* button confirm */}
              <div className="w-5/12 flex justify-end">
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
