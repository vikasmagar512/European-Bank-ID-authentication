# European-Bank-ID-authentication

# Implementing Two Factor Authentication using BankID
Umer Asif, Assistant Software Engineer, Virtual Force Pvt. Ltd.


## What is BankID System

The BankID system is a leading electronic identification solution in Nordic/Scandinavian countries for two factor authentication. The mechanism allows companies, banks and government agencies to authenticate and conclude agreements with individuals over the internet.

It has been developed and implemented by a large number of banks. The system contains and protects a user’s sensitive information such as contact details, email address, phone number, bank account number.

The BankID system is a two-step verification mechanism. The user can install the BankID app on either his mobile phone or personal computer. This application will provide the user with a “personal number” for any website/client that implements BankID system in order to verify his identity. It will give information about the user’s first name, last name, complete name and the personal number.

For development, the BankID system offers a testing service which can be accessed [here](https://demo.bankid.com/)

Throughout this document, the term BankID will be used in three contexts:

* BankID system: this refers to the system or the mechanism of BankID.
* BankID app: this refers to the mobile/desktop application of the BankID system.
* BankID personal number: This refers to the ‘personal number’ or ID generated by BankID system.

## Obtaining a New Personal Code & BankID Personal Number

In order to generate a new personal code and BankID personal number, follow these steps:

* Log on to https://demo.bankid.com 
* As demonstrated in Figure 1, click on the “Generate Code” tab on the red highlighted section of the page

![Figure 1](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1.png "Figure 1")
* A new page will open as shown in Figure 1.2. Continue by providing the credentials: organisation name, project name, your first name, last name and a valid email.
* Click “Order code”. 
![Figure 1.2](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1.2.png "Figure 1.2")

* The BankID system will send you a code on your given email. Check your email and copy the string after  “är:” Go back to the page demo page (Figure 1). Paste the copied string in the text field of the highlighted section and click “Log In.”
![Figure 1a](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1a.png "Figure 1a")

* A new page will open (Figure 1.3). Click on “Issue” tab. 
![Figure 1.3](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1.3.png "Figure 1.3")

* A new page will open (Figure 1.4), asking you to enter your desired BankID personal number. The personal number you select must comply with the Luhn algorithm in order to be accepted. You could use http://planetcalc.com/2464/ to generate a unique personal number that complies with Luhn algorithm. 
* Type in your BankID personal number in the text field under “Issue Mobile BankID” if you want to install the system and verify it using mobile. Or if you wish to use the BankID for a desktop application, then type in your BankID personal number in the text field under “Issue BankID on file”. Click “Issue”. Since using mobile BankID is more common, we would select that in our example.
![Figure 1.4](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1.4.png "Figure 1.4")

* Once you click “Issue”, the system will assess your personal number against Luhn algorithm. If it is acceptable, a pop-up screen will open with an activation code. (Figure 1.5)
![Figure 1.5](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure1.5.png "Figure 1.5")

## Setting Up the Mobile App
Before we continue, it is important to first install the BankID app on your Android phone. Follow these steps:

* Log on to https://www.bankid.com/bankid-i-dina-tjanster/rp-info and download the android app from the page shown in Figure 2.
![Figure 2](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure2.png "Figure 2")

* Once you have downloaded and installed this .apk, activate it using the personal number and activation code on your mobile.

![Figure 2.1](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure2.1.png "Figure 2.1")

* On subsequent login attempts, a screen will appear on your phone, with a tab to enter a new Mobile Bank ID.

* The app will ask you to enter your BankID personal number and your activation code.

* Now it will ask you to create a security code/password.

* Once you have entered your password and it is accepted, the BankID system is ready for you to use.

* You can check whether your BankID system is working properly. Log on to http://demo.bankid.com and click on “Log in with a Test BankID” and enter your BankID personal number on the “BankID on any Device” section. If you keep your Mobile BankID app running on your mobile/desktop, this will initiate a prompt in your app to enter the security code/password for authentication.

![Figure 2.2](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure2.2.png "Figure 2.2")

* Enter the password and click “Identify”. You should be allowed into the system now. This means a testing BankID has been issued successfully and you can use it to implement and test BankID based authentication on your application. 


## Setting Up the Client Certificate
This section will outline steps for Relaying Party (Your Application).

* You need to first download the certificate so that you can access the SOAP service of the BankID system. Log on to https://www.bankid.com/bankid-i-dina-tjanster/rp-info and download the certificate in the marked section shown in Figure 3.
![Figure 3](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure3.png "Figure 3")

* Now log on to https://appapi.test.bankid.com/rp/v4?wsdl to access the web service. This service requires the above mentioned certificate. 
* The password for this certificate is “qwerty123”.

## Using SOAP Client UI
In order to check which methods are available in the web service, we can use a soap client:  

* Download the latest version of SoapUI from https://www.soapui.org/. 
* Once the download and installation is complete, a new screen will open as shown in Figure 4.
![Figure 4](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.png "Figure 4")

* Now you need to configure the certificate so that it can be used to access the service methods. For that: - Click on File>Preference, or click on the preference button. 
  * On the left panel, click on SSL Settings. 
  * In the KeyStore, provide the link to certificate you downloaded.
  * In keyStore Password enter “qwerty123”.
  * Click OK.
![Figure 4a](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4a.png "Figure 4a")

* Now click on “SOAP”. On the next window, provide the project name, it’s SOAP address i.e. https://appapi.test.bankid.com/rp/v4?wsdl. Click OK.
* After loading you will see the above screen with a project folder as shown in Figure 4.1. To know more about what a WSDL is, see http://www.w3schools.com/wsdl.
![Figure 4.1](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.1.png "Figure 4.1")

### Sending Request to the Server 
In order to login using the BankID system, you need the first two methods under “RpServiceSoapBinding”: Authenticate and Collect; as shown in Figure 4.1. You can use these methods to get user information:
* Click on the + icon preceding Authenticate. 
* Double click  “Request 1.” 
* You’ll pass an XML request template that the server expects, as shown in Figure 4.2.
![Figure 4.2](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.2.png "Figure 4.2")

* The first box is where you will type in your BankID personal number.
* The second box is where you can enter User info. In this example, I have entered only the IP address of my localhost. This is a recommended field, so that the RP (Relaying Part, the app that is using BankID to login) knows where the request originated.
* The third box contains the conditions which are given in following table. You can use these conditions according to your requirements. In the aforementioned example, I have used two conditions. 

Type of condition | Values | Default
--- | --- | ---
CardReader | "class1" - (default). The transaction must be performed using a card reader where the PIN-code is entered on the computers keyboard, or a card reader of higher class.<br/>*  "class2" - The transaction must be performed using a card reader where the PIN-code is entered on the reader, or a reader of higher class.<br/>*  &lt;no value&gt; - defaults to "class1".<br/>*  This condition should be combined with a CertificatePolicies for a smart card to avoid undefined behavior.<br/> | No special type of card reader required.
CertificatePolicies | The oid in certificatePolicies in the user certificate. One wildcard ”*” is allowed from position 5 and forward ie. 1.2.752.78.*<br/>The values for production BankIDs are:<br/>"1.2.752.78.1.1" - BankID on file<br/>"1.2.752.78.1.2" - BankID on smart card<br/>"1.2.752.78.1.5" - Mobile BankID<br/>"1.2.752.71.1.3" - Nordea e-id on file and on smart card.<br/>The values for test BankIDs are:<br/>"1.2.3.4.5" - BankID on file<br/>"1.2.3.4.10" - BankID on smart card<br/>"1.2.3.4.25" - Mobile BankID<br/>"1.2.752.71.1.3" - Nordea e-id on file and on smart card.<br/>“1.2.752.60.1.6” - Test BankID for some BankID Banks<br/> | If no certificatePolicies is set the following are default in the production system:<br/>1.2.752.78.1.1, 1.2.752.78.1.2, 1.2.752.78.1.5, 1.2.752.71.1.3<br/>The following are default in the test system:<br/>1.2.3.4.5, 1.2.3.4.10, 1.2.3.4.25, 1.2.752.60.1.6, 1.2.752.71.1.3<br/>If one certificatePolicy is set all the default policies are dismissed.
IssuerCn | The CN (common name) of the issuer. Wildcards are not allowed. Nordea values for production: <br/> "Nordea CA for Smartcard users 12" - E-id on smart card issued by Nordea CA. "Nordea CA for Softcert users 13" - E-id on file issued by Nordea CA
Example Nordea values for test: "Nordea Test CA for Smartcard users 12" - E-id on smart card issued by Nordea CA. "Nordea Test CA for Softcert users 13" - E-id on file issued by Nordea CA | If issuer is not defined all relevant BankID and Nordea issuers are allowed.
AutoStartTokenRequired | If set to Yes, the client must have been started using the autoStartToken. To be used if it is important that the BankID App is on the same device as the RP service.
If omitted, the client does not need to be started using the autoStartToken. It does not work to set it to No. | If omitted, the client does not need to be started using the autoStartToken.
AllowFingerprint | Users of iOS devices may use Touch ID for authentication. No other devices are supported at this point. The functionality is not supported for signing.
If set to yes, the users are allowed to use Touch ID.
If set to no, the users are not allowed to use Touch ID. | yes for authentication.
Not supported for signing.

### Response from the Server
When you request the server with your XML, it will give you an initial response. If there is an error in parameters, it will give “INVALID_PARAMETERS” error as shown in Figure 4.3

![Figure 4.3](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.3.png "Figure 4.3")

If all the parameters are correct, then you will receive a response from the server with two values:
* **orderRef**: it is an important value for Mobile BankID. Subsequent calls to the server must contain this orderRef for the server to consider it a valid/authentic request.
* **autoStartToken**: it is used if you wish to use a locally installed application.

If the all the parameters are correct, it service will give a response like shown in Figure 4.4.

![Figure 4.4](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.4.png "Figure 4.4")

Now click on the Collect method and double click on Request 1 of Collect as shown in Figure 4.1 and Figure 4.5. Copy the orderRef string and paste it in the collect method’s orderRef tag.
![Figure 4.1](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.1.png "Figure 4.1")

![Figure 4.5](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.5.png "Figure 4.5")

At this point you need to open BankID app in your mobile and type your password in it. If the password is correct and there is no disruption in the communication, (e.g. internet disconnection) you’ll see a response from the BankID server containing the data as shown in Figure 4.6.
![Figure 4.6](https://github.com/virtualforce/bankid-authentication/blob/master/images/Figure4.6.png "Figure 4.6")

As you can see in Figure 4.6, the response has many fields. The first one is progressStatus which tells you about the status of the request. The messages and their reasons are explained in the following table:

Status | Reason | Action by RP
--- | --- | ---
OUTSTANDING_TRANSACTION | The order is being processed. The client has not yet received the order. The status will later change to NO_CLIENT, STARTED or USER_SIGN. | If RP tried to start the client automatically, the RP should inform the user that the app is starting. Message RFA13 should be used.<br/>If RP did not try to start the client automatically, the RP should inform the user that he needs to start the app. Message RFA1 should be used.
NO_CLIENT | The order is being processed. The client has not yet received the order.<br/>If the user did not provide her ID number the error START_FAILED will be returned in this situation. | If RP tried to start the client automatically: This status indicates that the start failed or the users BankID was not available in the started client. RP should inform the user. Message RFA1 should be used.<br/>If RP did not try to start the client automatically: This status indicates that the user not yet has started his client. RP should inform the user. Message RFA1 should be used.
STARTED | A client has been started with the autostarttoken but a usable ID has not yet been found in the started client. When the client starts there may be a short delay until all IDs are registered. The user may not have any usable IDs at all, or has not yet inserted their smart card. | If RP does not require the autoStartToken to be used and the user provided her ID number the RP should inform the user of possible solutions. Message RFA14 should be used.<br/>If RP require the autostarttoken to be used or the user did not provide his ID number the RP should inform the user of possible solutions. Message RFA15 should be used. Note: STARTED is not an error, RP should keep on polling using collect.
USER_SIGN | The client has received the order. | The RP should inform the user. Message RFA9 should be used.
USER_REQ | Not used | -
COMPLETE | COMPLETE <br/> The user has provided the security code and completed the order. Collect response includes the signature, user information and the ocsp response. | RP should control the user information returned in userInfo and continue their process.


In the *userInfo* tag, you will get the user information. From here you can extract the user information and use it for login purposes. 

# Node.js Implementation
In general the BankID based authentication should be implemented at the server side (though it really depends upon your project needs). In this example, I have implemented it using Node.js. 

I have made a node.js project and made a module for the users. Here I have model, controller and route files. In my controller I have made a new method called signinWithBankId and in this method I have defined my code as shown in Figure 5.

I am making a variable myXMLText in which I have defined all the XML. This is my controller file. The following code fragment shows how my code is laid out. I am also getting the personal number in the req variable which I stored in personalNumber:


And here's some code! :+1:

```javascript

/**
 * Module dependencies.
 */
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var path = require('path'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    mongoose = require('mongoose'),
    passport = require('passport'),
    https = require("https"),
    request = require('request'),
    fs = require('fs'),
    User = mongoose.model('User'),
    parseString = require('xml2js').parseString;

exports.signinWithBankId = function(req, res, next) {

    var personalNumber =req.body.bankId;

    //The initial call to the bankId server with personal number to get orderRef
    var myXMLText = '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://bankid.com/RpService/v4.0.0/types/">' +
        '<soapenv:Header/>' +
        '<soapenv:Body> ' +
        '<typ:AuthenticateRequest> ' +
        '<!--Optional:--> ' +
        '<personalNumber>'+personalNumber+'</personalNumber> ' +
        '<!--0 to 20 repetitions:--> ' +
        '<endUserInfo> ' +
        '<type>IP_ADDR</type>  ' +
        '<value>192.168.0.1</value>  ' +         //Optional Parameters
        '</endUserInfo> ' +
        '<!--Optional:--> ' +
        '<requirementAlternatives> ' +
        '<!--0 to 7 repetitions:--> ' +
        '<requirement> ' +
        '<!--1 to 10 repetitions:--> ' +
        '<condition> ' +
        '<!--<key>?</key> -->  ' +
        '<!--1 to 20 repetitions:-->  ' +
        '<!--<value>?</value> -->  ' +
        '<key>CertificatePolicies</key> 	<!--The certificate policy must be --> ' +
        '<value>1.2.3.4.*</value>  	<!--1.2.752.1.5 (Mobile BankID) --> ' + //Currently set to test BankID -- Change in Production
        '</condition> ' +
        '</requirement> ' +
        '<requirement>  ' +
        '<condition>  ' +
        '<key>AllowFingerprint</key> 	<!--// TouchID --> ' +
        '<value>no</value> 			<!--is not allowed --> ' +
        '</condition>  ' +
        '</requirement> ' +
        '</requirementAlternatives> ' +
        '</typ:AuthenticateRequest> ' +
        '</soapenv:Body> ' +
        '</soapenv:Envelope>';

```
**Figure 5**

Next I will explain the node.js based client side.

Section A shows I am making the initial request to the BankID server. Here I am also passing the certificate in the agentOptions. At the end I have a callback function which will execute when this request is successful.

```javascript

var resJson = "";
    var autoStartToken = "";
    var orderRef = "";
    var faultString = "";
    var intervalid;
    
    request({
        url: "https://appapi.test.bankid.com/rp/v4",
        host: "appapi.test.bankid.com",
        rejectUnauthorized: false,
        requestCert: true,
        method: "POST",
        headers: {
            "content-type": "application/xml",  // <--Very important!!!
            //'Accept-Encoding': "gzip,deflate",
            'Content-Length': Buffer.byteLength(myXMLText),
            //'User-Agent': 'Apache-HttpClient/4.1.1 (java 1.5)',
            'Connection': "Keep-Alive"
        },

        body: myXMLText,

        agentOptions: {
            pfx: fs.readFileSync('cert/FPTestcert2_20150818_102329.pfx'),
            passphrase: 'qwerty123',
        },


    }, function(error, response, body) {

```
 **Section A**
 
**Section B** shows I am extracting the information from the XML response. Here I am parsing the response of the server. If the server responded with a fault or error, this will extract that too and log the fault string. You can pass this fault string to the client.
If the server has responded with Completed, then moving forward we need to extract the orderRef and now make a call to the Collect method. 

```javascript

//extracting orderRef from the bankId server response XML
        parseString(body, function(err, result) {
            resJson = JSON.stringify(result);

            var tempStr = "JSON.parse(resJson)";
            var indeces = Array('soap:Envelope','soap:Body',0,'ns2:AuthResponse',0);
            
            for (var i=0;i<indeces.length; i++)
                if(eval(tempStr+"['"+indeces[i]+"']"))
                    tempStr += "['"+indeces[i]+"']";
                else
                {
                    tempStr += "['soap:Fault'][0]";
                    faultString = eval(tempStr).faultstring[0];
                    break;
                }
                
            if(faultString !==""){
                console.log(faultString); //Report the user (client) about the fault
            }

```
**Section B**

```javascript
else
            {
            var theValue = eval(tempStr);
            autoStartToken = theValue.autoStartToken;
            orderRef = theValue.orderRef;
            //Ping the BankId server every 3 seconds, with orderRef to get the User Data
            intervalid = setInterval(function() {
                var myXMLTextOrderRef = '<?xml version="1.0" encoding="utf-8"?>' +
                    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://bankid.com/RpService/v4.0.0/types/">' +
                    '<soapenv:Header/>' +
                    '<soapenv:Body>' +
                    '<typ:orderRef>' + orderRef[0] + '</typ:orderRef>' +
                    '</soapenv:Body>' +
                    '</soapenv:Envelope>';

```
**Section C**

After extracting the orderRef, we make another XML and will be requesting the server again, this time with orderRef and calling the Collect method. I have also attached a timer with this piece of code to poll the server every 3 seconds (not the most sophisticated way, but works for me). I have done this because there can be delays related to user’s typing speed or error, issues with the personal number or the internet etc. This request also contains the certificate. 

```javascript

request({
                    url: "https://appapi.test.bankid.com/rp/v4",
                    host: "appapi.test.bankid.com",
                    rejectUnauthorized: false,
                    requestCert: true,
                    method: "POST",
                    headers: {
                        "content-type": "application/xml",  // <--Very important!!!
                        //'Accept-Encoding': "gzip,deflate",
                        'Content-Length': Buffer.byteLength(myXMLTextOrderRef),
                        //'User-Agent': 'Apache-HttpClient/4.1.1 (java 1.5)',
                        'Connection': "Keep-Alive"
                    },
                    body: myXMLTextOrderRef,
                    agentOptions: {
                        pfx: fs.readFileSync('cert/FPTestcert2_20150818_102329.pfx'),
                        passphrase: 'qwerty123',
                    },

```
**Section D**

```javascript

}, function(error, response, body) {
                    if (!error) {
                        parseString(body, function(err, result) {
                            var resp = JSON.stringify(result);
                            var tempStrnew = "JSON.parse(resp)";
                            var indecesNew = Array('soap:Envelope','soap:Body',0,'ns2:CollectResponse',0);
                            var statusCod = "";
                            var faultStringRes = "";
                            
                            for (var i=0;i<indecesNew.length; i++)
                                if(eval(tempStrnew+"['"+indecesNew[i]+"']"))
                                    tempStrnew += "['"+indecesNew[i]+"']";
                                else
                                {
                                    tempStrnew += "['soap:Fault'][0]";
                                    faultStringRes = eval(tempStrnew).faultstring[0];
                                    break;
                                }
                            if(faultStringRes !== "")
                            {
                                console.log(faultStringRes); //Inform the client about this fault too!
                                clearInterval(intervalid);
                                return;
                            }

                            statusCod = eval(tempStrnew).progressStatus[0];

                            if (statusCod === "OUTSTANDING_TRANSACTION") {
                                console.log("Outstanding Transaction");

                            }
                            if (statusCod === "NO_CLIENT") {
                                console.log("No Client");
                                clearInterval(intervalid);
                            }
                            if (statusCod === "COMPLETE") {
                                console.log(body);
                                var providerUserProfile = 
                                {
                                firstName: eval(tempStrnew)['userInfo'][0].givenName[0],
                                lastName: eval(tempStrnew)['userInfo'][0].surname[0],
                                displayName: eval(tempStrnew)['userInfo'][0].name[0],
                                email: eval(tempStrnew)['userInfo'][0].emails ? eval(tempStrnew)['userInfo'][0].emails[0].value : undefined,
                                username: eval(tempStrnew)['userInfo'][0].personalNumber[0],
                                password: eval(tempStrnew)['userInfo'][0].surname[0]+"123!@#",
                                //profileImageURL: (profile.id) ? '//graph.facebook.com/' + profile.id + '/picture?type=large' : undefined,
                                provider: 'local',
                                providerIdentifierField: 'username',
                                providerData: {username: eval(tempStrnew)['userInfo'][0].personalNumber[0]},
                                userRole: ['patient'],
                                };
                                
                                User.findOne({"username":providerUserProfile.username}, function (err, person) {
                                    if (!person)
                                    {
                                        providerUserProfile.isNewUser = true;
                                        res.json(providerUserProfile);  
                                    }
                                    else
                                    {
                                        providerUserProfile.isNewUser = false;
                                        res.json(providerUserProfile);  
                                    }
                                });
                                clearInterval(intervalid);
                                return;
                            }
                        });
                        }
                    });
                }, 3000);
            }
        });
    });
};

```
**Section E**

In the callback of the function request, I again parse it to see what the response is. After parsing we will get one of two things. Either:
Status code of the request: if the response shows status in progress, we can check for different statuses and add commands accordingly. 
Fault string: contains the fault string you can inform the client about the fault. 

If however, the progress status was complete, then we can extract the user data from the response, and use that data to login/signup the system. In the given example, after extracting the data from the response, I search in my ‘User’ model to find if there is an existing User of the same username (in this case I am treating the username as the personal number which will be unique).
If such a person is found then it not a new user and it will return that user. If the user does not exist, then we can redirect to the signup function.


### References
 
 * [BankID Relying Party Guidelines v2.10](https://www.bankid.com/assets/bankid/rp/bankid-relying-party-guidelines-v2.10.pdf) for technical details
 * [markdown-it](https://jbt.github.io/markdown-editor/) for Markdown Editing
 * [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#html) for Markdown learning
