
var soap = require('./lib/soap-server');


function tipoElementoEntradacalculo_gmf_retiro(){
}
tipoElementoEntradacalculo_gmf_retiro.prototype.P_FOND ="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_PLAN="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_NROID="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_BANCO="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_FORMAPAGO="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_CUENTA="";
tipoElementoEntradacalculo_gmf_retiro.prototype.P_VALOR_RET="";


function tipoElementoSalidacalculo_gmf_retiro(){
}
tipoElementoSalidacalculo_gmf_retiro.prototype.P_VALOR = '';
tipoElementoSalidacalculo_gmf_retiro.prototype.P_RSPTA= '';
tipoElementoSalidacalculo_gmf_retiro.prototype.P_COD_RSPTA= '';

function Mycalculo_gmf_retiro(){
}

Mycalculo_gmf_retiro.prototype.calculo_gmf_retiro = function(tipoElementoEntradacalculo_gmf_retiro){
	console.log(tipoElementoEntradacalculo_gmf_retiro);
	return tipoElementoEntradacalculo_gmf_retiro;
};
var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('calculo_gmf_retiro', new Mycalculo_gmf_retiro());
var soapService2 = soapServer.addService('calculo_gmf_retiro2', new Mycalculo_gmf_retiro());
var test2operation = soapService.getOperation('calculo_gmf_retiro');
soapService2.getOperation('calculo_gmf_retiro');
test2operation.setInputType('tipoElementoEntradacalculo_gmf_retiro',tipoElementoEntradacalculo_gmf_retiro);
test2operation.setOutputType('tipoElementoSalidacalculo_gmf_retiro',tipoElementoSalidacalculo_gmf_retiro);



soapServer.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
