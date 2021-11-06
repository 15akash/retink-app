const InvoiceCard = () => {
  return (
    <div className="bg-white mr-4 scroll-snap-x lg-scroll-snap-none shadow-lg">
      <div className="mt-5 pt-5 px-4 pb-3">Invoice</div>
      <div className="grid pb-5">
        <table class="table-auto bg-white w-auto space-x-10 justify-between">
          <thead className=" bg-gray-50 text-left text-sm border-2 border-gray-200">
            <tr>
              <th className="py-2 px-4">NO.</th>
              <th className="p-2 px-4">INVOICE SUBJECT</th>
              <th className="p-2 px-4">CLIENT</th>
              <th className="p-2 px-4">GST NO.</th>
              <th className="p-2 px-4">CREATED</th>
              <th className="p-2 px-4">STATUS</th>
              <th className="p-2 px-4">PRICE</th>
            </tr>
          </thead>

          <tbody className="text-lg pt-5">
            <tr>
              <td className="p-4">001401</td>
              <td className="p-4">Design Works</td>
              <td className="p-4">Retink Limited</td>
              <td className="p-4">07BJQWDSDFOK1Z3</td>
              <td className="p-4">06 November 2021</td>
              <td className="p-4">Paid</td>
              <td className="p-4">$890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceCard;
