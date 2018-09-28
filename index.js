// Require library
const escpos = require("escpos");
const device  = new escpos.USB();
const options = { encoding: "GB18030" }
const printer = new escpos.Printer(device, options);

// Create a sample
device.open(function(){
  printer
  .font("a")
  .align("ct")
  .style("bu")
  .size(1, 1)
  .text("Welcome")
  .text("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
  .text("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  .text("It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  .barcode("1234567890", "EAN8")
  .qrimage("https://github.com/song940/node-escpos", function(err){
    this.cut();
    this.close();
  });
});