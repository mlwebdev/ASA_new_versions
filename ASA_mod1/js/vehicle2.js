function vForm(vehicleForm, yearSelect, makeInput, modelInput, trimInput, vSubmit) {
  (function createFormInputs () {
    vehicleForm = f.form_,
    yearSelect = f.create("select"),
    makeInput = f.create("input"), 
    modelInput = f.create("input"), 
    trimInput = f.create("input");
    vSubmit = f.create("button");  
  })();

  (function setFormProperties() {
    f.app.className = "container";
    vehicleForm.id = "vehicleForm";

    yearSelect.id = "yearSelect";
    yearSelect.className = "form-control space";
    makeInput.id = "makeInput"
    makeInput.className = "form-control space";
    makeInput.placeholder = "Enter Make";
    modelInput.id = "modelInput";
    modelInput.className = "form-control space";
    modelInput.placeholder = "Enter Model";
    trimInput.id = "trimInput";
    trimInput.className = "form-control space";
    trimInput.placeholder = "Enter Trim";
    vSubmit.id = "vSubmit";
    vSubmit.className = "btn btn-primary";
    vSubmit.innerHTML = "Submit";
  })();

  (function formAppends(makeOption) {
    for(year of yearArray) {
      makeOption = f.create("option");
      makeOption.value = year;
      makeOption.innerHTML = year;
      f.append(yearSelect, makeOption);
    }
    f.append(f.app, vehicleForm);
    f.append(vehicleForm, yearSelect);
    f.append(vehicleForm, makeInput)
    f.append(vehicleForm, modelInput)
    f.append(vehicleForm, trimInput); 
    f.append(vehicleForm, vSubmit);   
    document.title = "Vehicle profile";

  })();
};    











