        const dataSet = [];

    const dataTable = $('#realtime').DataTable({
          data: dataSet,
          columns: [
            { title: 'Name' },
            { title: 'Position' },
            { title: 'Office' },
            { title: 'Extn.' },
            { title: 'Start date' },
            { title: 'Salary' }
          ]
        });


    //  buildForm() return the value of every option in our form
    function buildForm() {
        return [
          $('#name').val(),
          $('#position').val(),
          $('#office').val(),
          $('#extn').val(),
          $('#startDate')
            .val()
            .replace(new RegExp('-', 'g'), '/'),
          `$${$('#salary').val()}`
        ];
      }


// We create a method called addRow() to append whatever data buildForm() returns

   function addRow(dataTable) {
        const formData = buildForm();
        const addedRow = dataTable.row.add(formData).draw();  //row.add() adds a new row to the table using the given data
         // .draw() redraws and updates the table in the current context
         // .show() displays a field in our table. This is useful for cases when you want to have extra form fields available, but only show them under certain conditions
         // .draw(false) adds a new row without resetting or distorting the current page
        addedRow.show().draw(false);
        const addedRowNode = addedRow.node();  // .node() serves as an event listener, it returns the DOM element for the requested field thus enabling DOM manipulation of the field
        console.log(addedRowNode);
        $(addedRowNode).addClass('highlight');
      }

      // take addRow() method which we built and bind it to a button using jQuery’s .click() method. When the button is clicked

        $('#add').on('click', () => {
            addRow(dataTable);
        });

/*
    Let’s now create a method called selectRow() , its function is to select a row in our table. Selecting a row puts the row to the spot
    so we can be able to remove it. The method just adds a selected class to the selected row and removes any other row that selected
    class was previously added to:
*/
    function selectRow(dataTable, row) {
        if ($(row).hasClass('selected')) {
          $(row).removeClass('selected');
        } else {
          dataTable.$('tr.selected').removeClass('selected');
          $(row).addClass('selected');
        }
      }

/*
      We also create a method called removeRow() , its function is to remove a row from our table. The row removed
      is the row with the selected class
*/

    function removeRow(dataTable) {
        dataTable.row('.selected').remove().draw( false );
      }

    //   bind selectRow() and removeRow() to their respective event triggers using jQuery’s .click() method

    $('#realtime tbody').on('click', 'tr', function(){
          selectRow(dataTable, this)();
        });

    $('#remove').on('click', function() {
         removeRow(dataTable);
    });