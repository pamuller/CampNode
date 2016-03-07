"use strict";
var db = require("../orientDBConfig.js");

function Church() {
	
	  
	  this.add = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		 /* db.insert().into('Company').set(req.body.company).one()
			.then(function (company) {
				console.log('created', company);
				res.send(company);
			
				//return company
			  
			})*/
		  var obj=req.body;
		 //obj.province={'@rid':obj.province};
		  
			db.query('insert into church (churchname,province,address,churchcontactno) values ('+obj.churchname+','+obj.province+','+obj.address+','+obj.churchcontactno+')'
					 ).then(function (church){
					  console.log(church); //an Array of records inserted
					  
					  db.query('insert into person (firstname,lastname,contactno,email,password,name,status) values (\''+obj.youthleaderName+'\',\''+obj.youthleaderSurname+'\',\''+obj.youthleadercell+'\',\''+obj.youthleaderemail+'\',\'password\',\''+obj.youthleaderemail+'\',\'false\')'
						 ).then(function (people){
						 
							 db.query('create edge youthpaster from '+people[0]['@rid']  +' to '+ church[0]['@rid']
							 ).then(function (response){
							  console.log(response); //an Array of records inserted
							});
							 
							 
							 
						});
					  
					  
			
					});
		  
		  
		  
		  
		    /* db.insert().into('church').set(obj).one()
			.then(function (church) {
				console.log('created', church);
				return church;
				//return company
			  
			}).then(function(church)
			{
				res.send(church);
			});
	       */
		  
		  
	  };
	  
	  
	  
	  this.update = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
		  console.log("reg.body:"+req.body);
			var idd = req.body['@rid'];
			delete req.body['@rid'];
			//db.query('insert into church (churchname, address, youthleaderName,province,youthleaderemail,youthleadercell,churchcontactno,youthleaderSurname) values (:name, :password, :status
	
			
			
			db.update('Church').set(req.body).where('@rid = "'+idd+'"').scalar()
				.then(function (total) {
				  console.log('updated', total, 'users');
				  res.send('updated', total, 'users');
				});
			
			
		
		  
		  /*
		     db.insert().into('Company').set(req.body).one()
			.then(function (company) {
				console.log('created', company);
				return company;
				//return company
			  
			}).then(function(company){
				
				agent.addCompanyAgent(company,req.body.person);
				
			}).then(function()
			{
				res.send("Done");
			});
	
		   */
		  
	  };
	  
	  
	  this.deleteRecord = function(res,req){
		  var ii=0;
		  ii=1;
		 // db.insert().into('Company').set({companyReg: company.companyReg,organizationName:'organizationName', country: 'country', email: 'email', phoneNo: 'phoneNo', physicalAddress: 'physicalAddress', postalAddress: 'postalAddress', postalCode: '175', vatNo: 'vatNo', website: 'website'}).one()
			
			console.log("reg.body:"+req.params.id);
			
			db.delete('VERTEX').from('church')
			.where('@rid = #'+req.params.id)
			.one()
			.then(function (total) {
			  console.log('deleted', total, 'church');
			  res.send('Deleted '+total + ' records');
			});
		  
		  
		  
	  };
	  
	  
	  
	  this.findall = function(res,req)
	  {		
		  db.query()
		  db.select().from('church').all()
			.then(function (church) {
			  console.log('active users', church);
			  res.send(church);
		  });
	  };
	  
	  
	  
	  
  
}

var church = new Church();

module.exports = church;














