# dataTables_exapmple
This project demonstrates how to create a table using the DataTables library.
The table supports real-time updates, sorting, searching, and pagination.

See the section for tutorial used for this project [deployment](https://pusher.com/tutorials/realtime-table-datatables/#creating-our-table-blueprint) 
for more information on DataTAbles go to [DataTables](https://datatables.net/examples/index)

### `Example Code`
```
$(document).ready(function () {
  const table = $('#example').DataTable({
    paging: true,
    searching: true,
    ordering: true,
    responsive: true,
  });
```

### `Dependencies`
This project uses the following libraries and tools:
- jQuery (required by DataTables)
- DataTables

