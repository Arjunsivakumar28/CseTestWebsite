console.log("check works!");

let table_contents = [];

let row = new Object();

row = {
    recurring: true,
    date: "09/10/2023",
    invoiceNo: 10000,
    amount: 100,
    dueDate: "10/23/2023",
    status: "Paid",
};

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "09/11/2023",
    invoiceNo: 10001,
    amount: 200,
    dueDate: "09/24/2023",
    status: "Not Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: true,
    date: "09/12/2023",
    invoiceNo: 10002,
    amount: 300,
    dueDate: "09/25/2023",
    status: "Not Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "09/08/2023",
    invoiceNo: 9999,
    amount: 50,
    dueDate: "09/10/2023",
    status: "Over Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: true,
    date: "09/01/2023",
    invoiceNo: 9998,
    amount: 150,
    dueDate: "09/11/2023",
    status: "Over Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "08/25/2023",
    invoiceNo: 9997,
    amount: 250,
    dueDate: "09/11/2023",
    status: "Paid",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: true,
    date: "08/11/2023",
    invoiceNo: 9996,
    amount: 1250,
    dueDate: "11/11/2023",
    status: "Not Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "07/28/2023",
    invoiceNo: 9995,
    amount: 1350,
    dueDate: "08/11/2023",
    status: "Over Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: true,
    date: "06/28/2023",
    invoiceNo: 9994,
    amount: 1999,
    dueDate: "08/21/2023",
    status: "Paid",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "01/28/2023",
    invoiceNo: 9993,
    amount: 2999,
    dueDate: "09/21/2023",
    status: "Paid",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: false,
    date: "09/28/2022",
    invoiceNo: 9992,
    amount: 2250,
    dueDate: "11/21/2022",
    status: "Over Due",
}

table_contents.push(row);

row = new Object();

row = {
    recurring: true,
    date: "09/10/2022",
    invoiceNo: 9991,
    amount: 2350,
    dueDate: "12/21/2022",
    status: "Over Due",
}

table_contents.push(row);

console.log("table arr : ", table_contents);

// --------------------------------------------------------------------------------------------------------------

function displayRows(table_contents) {

    let Html_rows = "";

    for (row_obj of table_contents) {

        let recur_sign = "";

        let status_sign = "";

        let pay_btn = "";

        if (row_obj.recurring == true) {
            recur_sign = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
            viewBox="0 0 30 30">
            <path
                d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z">
            </path>
        </svg>
        `
        } else {
            recur_sign = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
            class="bi bi-slash-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z" />
        </svg>
        `
        }

        if (row_obj.status == "Paid") {
            status_sign = `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
                viewBox="0 0 30 30" style="fill:#40C057;">
                <path
                    d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z">
                </path>
            </svg>
            `
        } else if (row_obj.status == "Over Due") {
            status_sign = `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                viewBox="0 0 48 48">
                <path fill="#f44336"
                    d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z">
                </path>
                <path fill="#fff"
                    d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z">
                </path>
                <path fill="#fff"
                    d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z">
                </path>
            </svg>
            `
        } else if (row_obj.status == "Not Due") {
            status_sign = `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            `
        }

        if (row_obj.status == "Paid") {
            pay_btn = "";
        } else {
            pay_btn = `
            <button class=" btn btn-outline-success">Pay</button>
            `;
        }

        Html_rows += `
        <tr class="align-middle">
            <td>
                <div class="d-flex justify-content-center align-items-center my-2"><input
                        class="form-check-input" type="checkbox" value="" id="row-check"
                        aria-label="row-check" style="padding: .8rem;"></div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">` + recur_sign + `
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">` + row_obj.date + `</div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2"> INV`+ row_obj.invoiceNo + `</div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">$`+ row_obj.amount + `</div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">`+ row_obj.dueDate + `</div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">
                    `+ status_sign + `
                    <span class="ms-2">`+ row_obj.status + `</span>
                </div>
            </td>
            <td>
                <div class="d-flex justify-content-center align-items-center my-2">
                    <a class="me-2" href="../../docs/Miner_Body Rituals Among the Nacirema.pdf">
                        pdf
                    </a>
                    <a class="me-2" href="#">
                        view
                    </a>
                    `+ pay_btn + `
                </div>
            </td>
        </tr>
        `
    }

    document.getElementById("invoice-table-body").innerHTML = Html_rows;
}

// --------------------------------------------------------------------------------------------------------------

function sidebar_open_close(ele) {
    let mainbar = document.getElementById("main-bar");
    let sidebar = document.getElementById("main-sidebar");
    let open = ele.children[0].children[0];
    let close = ele.children[0].children[1];

    open.classList.remove("d-none");
    if (sidebar.style.display == "flex") {

        sidebar.classList.remove("d-flex");
        sidebar.style.display = "none";

        mainbar.classList.remove("col-10");
        mainbar.classList.add("col");

        close.style.display = "none";

        open.style.display = "flex";

        console.log("element check : ", close.style.display);
    } else {

        sidebar.classList.remove("d-none");
        sidebar.style.display = "flex";

        mainbar.classList.remove("col");
        mainbar.classList.add("col-10");

        close.style.display = "flex";

        open.style.display = "none";

        console.log("element check : ", close.style.display);
    }
    console.log("element check : ", sidebar);


}

// --------------------------------------------------------------------------------------------------------------

let filterTable = JSON.parse(JSON.stringify(table_contents));
let statusTable = table_contents.filter((obj) => obj.status == "Not Due");
let dateTable = JSON.parse(JSON.stringify(table_contents));

function compareArrays(sObj) {
    for (let dObj of dateTable) {
        if (dObj.invoiceNo == sObj.invoiceNo) {
            console.log("check obj print : ", dObj);
            console.log("check status obj print : ", sObj);
            return true;
        }
    }
}

// Display the default table
displayRows(statusTable);

filterTable = statusTable.filter(compareArrays);

// --------------------------------------------------------------------------------------------------------------

function statusChange() {

    let select = document.getElementById("invoice-type-filter");

    switch (select.options.selectedIndex) {

        case 0:

            statusTable = table_contents.filter((obj) => obj.status == "Not Due");
            break;

        case 1:

            statusTable = table_contents.filter((obj) => obj.status == "Over Due");
            break;

        case 2:

            statusTable = table_contents.filter((obj) => obj.status == "Paid");
            break;

        case 3:

            statusTable = JSON.parse(JSON.stringify(table_contents));
            displayRows(table_contents);
            break;

        default:

            console.log("I should not be here");

            break;
    }

    console.log("filter table pre check : ", filterTable);

    filterTable = statusTable.filter(compareArrays);

    console.log("filter table status check : ", filterTable);

    console.log("Status table status check : ", statusTable);

    displayRows(filterTable);

}

// --------------------------------------------------------------------------------------------------------------

function dateConvert(dateString) {

    let month_index = dateString.slice(0, 2) - 1;
    let day = dateString.slice(3, 5);
    let year = dateString.slice(6);

    let date_obj = new Date(year, month_index, day);

    return date_obj;
}

// --------------------------------------------------------------------------------------------------------------

function dateChange() {

    let dateRange = document.getElementById("invoice-date-filter");

    let today = new Date();

    let date_limit = new Date();

    switch (dateRange.options.selectedIndex) {

        case 0:

            dateTable = JSON.parse(JSON.stringify(table_contents));
            displayRows(table_contents);
            break;

        case 1:

            date_limit = new Date();
            date_limit.setDate(today.getDate() - 1);
            dateTable = table_contents.filter((obj) => dateConvert(obj.date) >= date_limit);
            break;

        case 2:

            date_limit = new Date();
            date_limit.setDate(today.getDate() - 7);
            dateTable = table_contents.filter((obj) => dateConvert(obj.date) >= date_limit);
            break;

        case 3:

            date_limit = new Date();
            date_limit.setDate(today.getDate() - 31);
            dateTable = table_contents.filter((obj) => dateConvert(obj.date) >= date_limit);
            break;

        case 4:

            date_limit = new Date();
            date_limit.setDate(today.getDate() - 183);
            dateTable = table_contents.filter((obj) => dateConvert(obj.date) >= date_limit);
            break;

        case 5:

            date_limit = new Date();
            date_limit.setDate(today.getDate() - 365);
            dateTable = table_contents.filter((obj) => dateConvert(obj.date) >= date_limit);
            break;

        default:

            console.log("I should not be here!!!");
            break;

    }


    console.log("filter table pre check : ", filterTable);

    filterTable = statusTable.filter(compareArrays);

    console.log("filter table status check : ", filterTable);

    console.log("date table status check : ", dateTable);

    displayRows(filterTable);

}

// --------------------------------------------------------------------------------------------------------------

let checkSearch = document.getElementById("table-search");

checkSearch.addEventListener("keyup", function () {

    let searchTerm = checkSearch.value.toLowerCase();

    let searchTableContents = JSON.parse(JSON.stringify(table_contents));

    let resultTable = searchTableContents.filter((obj) => ( (JSON.stringify(obj.date).toLowerCase().includes(searchTerm)) || 
    (JSON.stringify(obj.invoiceNo).toLowerCase().includes(searchTerm)) || (JSON.stringify(obj.amount).toLowerCase().includes(searchTerm)) ||
    (JSON.stringify(obj.dueDate).toLowerCase().includes(searchTerm)) || (JSON.stringify(obj.status).toLowerCase().includes(searchTerm)) ));

    console.log("filter table pre check : ", searchTableContents);

    searchTableContents = resultTable.filter((obj) => JSON.stringify(filterTable).includes(JSON.stringify(obj)));

    console.log("filter table status check : ", searchTableContents);

    console.log("result table status check : ", resultTable);

    displayRows(searchTableContents);

})

// --------------------------------------------------------------------------------------------------------------
