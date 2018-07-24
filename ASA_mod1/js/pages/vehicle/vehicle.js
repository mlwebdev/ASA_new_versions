
function vForm(
  app3, vehicleForm, makeOption, makeInput, modelInput, trimInput, vSubmit, selectDiv, selectWrap
){
  //selectWrap = f.getId("select-wrap");



  vehicleForm = f.form_,
  selectDiv = f.create("div");
  // yearSelect = f.create("select"),
  makeInput = f.create("input"), 
  modelInput = f.create("input"), 
  trimInput = f.create("input");
  vSubmit = f.create("button");  

  // Add Attributes
  f.app.className = "container";
  vehicleForm.id = "vehicleForm";
  selectDiv.id = "select-wrap";
  selectWrap = f.getId("select-wrap");
  
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

    
    
    
    f.append(vehicleForm, makeInput);
    f.append(vehicleForm, modelInput);
    f.append(vehicleForm, trimInput); 
    f.append(vehicleForm, vSubmit);   
    f.append(document.body, vehicleForm);
    document.title = "Vehicle profile";

    f.addClass(f.getId("app2"), "hide");
};    

/**/









