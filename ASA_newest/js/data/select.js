//yearArray();
function yearSelect(select_wrap, year_select, make_option) {

select_wrap = f.getId("select-wrap");
  year_select = document.createElement("select");
  year_select.id = "year-select";
  year_select.className = "form-control";
  for(year of year_array) {
    make_option = document.createElement("option");
    make_option.value = year;
    make_option.innerHTML = year;
    year_select.appendChild(make_option);
  }
  select_wrap.appendChild(year_select);
}