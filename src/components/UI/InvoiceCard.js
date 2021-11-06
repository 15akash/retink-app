const InvoiceCard = () => {
  return (
    <div className="bg-white mr-4 scroll-snap-x lg-scroll-snap-none">
      <div className="mt-5 pt-2 px-2 pb-3">Invoice</div>
      <div className="grid grid-rows-2 px-2">
        <table class="table-auto bg-white w-auto space-x-10 justify-between">
          <thead className=" bg-gray-100 text-left text-sm border-2 border-gray-200">
            <tr className="my-2 py-10">
              <th>NO.</th>
              <th>INVOICE SUBJECT</th>
              <th>CLIENT</th>
              <th>GST NO.</th>
              <th>CREATED</th>
              <th>STATUS</th>
              <th>PRICE</th>
            </tr>
          </thead>

          <tbody className="text-lg pt-5">
            <tr>
              <td>001401</td>
              <td>Design Works</td>
              <td>Retink Limited</td>
              <td>07BJQWDSDFOK1Z3</td>
              <td>06 November 2021</td>
              <td>Paid</td>
              <td>$890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceCard;
