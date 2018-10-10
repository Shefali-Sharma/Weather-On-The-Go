# Weather On The Go

## Installation:
### Installing NodeJs:
Download and Install NodeJs:
```
https://nodejs.org/en/download/
```

### Installing Angular:
```
sudo npm install -g @angular/cli

ng new <app_name>

cd <app_name>

ng serve
```
* ```-g```: this flag is used to indicate that we want to install angular for the entire system.
* ```<app_name>```: Name of the app that you want to give
* ```serve```: Launch the angular app (single page) to localhost. 

### Installing IDE

Download Visual Studio Code from ```code.visualstudio.com``` and install it. 

### Visual Studio - Extentions

* Open your project.
* Under 'View' open 'Extentions'
* Search for 'Angular Essentials' and install the extention

### Angular Google Maps (AGM)
Install using command:
* ```npm install @agm/core --save```

#### Documentation
To go the link below to get started:
```https://angular-maps.com/guides/getting-started/```

### Installing Express
```npm install --save express```

### Installing nodemon
```npm install --save-dev nodemon```

### Installing request
```npm install request@2.87.0 --save```

* ```2.87.0``` is the current version of the 'request' package at the time of the creation of this project. Please replace this with latest version from 'Version' given at https://www.npmjs.com/package/request.
* ```--save``` will save the installed package information in ```package.json```. This way we will not have to install request every time we restart the system(reboot the computer).

### npm Axios
For documentation on axios, visit: ```https://www.npmjs.com/package/axios```

#### Installing axios
npm install axios@0.18.0 --save
* At the time ```0.18.0``` was the latest version. Go ahead and install the latest version. Find version info on the Documentation url.

### npm google_directions
For documentation on google_directions, visit: 
```https://www.npmjs.com/package/google_directions```

#### Installing google_directions
```npm i google_directions@0.6.0 --save```
* At the time ```0.6.0``` was the latest version. Go ahead and install the latest version. Find version info on the Documentation url.

### Firebase
For documentation on firebase, visit: 
```https://www.npmjs.com/package/geofire```

#### Installing Geofire in Firebase
```npm install geofire firebase --save```

### Installing body-parser
```npm install --save body-parser```

### MongoDB
For documentation on MongoDB: 
```https://docs.mongodb.com/?_ga=2.33370558.1232252165.1538686586-1498401667.1534796860```

#### Setting-up Database
* Create an account at : ```https://www.mongodb.com/cloud/atlas``` for MongoDB Atlas.
* Create a new cluster after selecting appropriate settings.
* Under the 'Security' tab:
    * MongoDB Users: Click on 'Add New User'. Create a username and password, and click on 'Read and write to any database'.
    * IP Whitelist: Click on 'Add IP Address'. Click on 'Add Current IP Address'. 
        * Only this IP will be allowed to access the database. No other IP address will be allowed. So, do keep in mind to change the IP if accessing database from another account.
        * If you're away from the project for a couple of days (or maybe even after one day), you might've received a new local IP by your internet provider. Hence you should update that "IP Whitelist" if you're facing any connection issues!
    
#### Accessing MongoDB with Mongoose 
For documentation on Mongoose:
 * ```https://mongoosejs.com/```
 * ```https://mongoosejs.com/docs/guide.html```

#### Installing Mongoose
```npm install --save mongoose```

### Connecting Express to MongoDB
* Open MongoDB Cluster on Browser.
* Under 'Overview', click on 'Connect'. Click on 'Connect Your Application'. 
* Under 'Copy a connection string' - Click on 'SRV connection string (3.6+ driver)' (or whichever is the lastest driver the time).

#### To see your Database on Cloud
* Open MongoDB Cluster on Browser.
* Under 'Overview', click on 'Connect'. Click on 'Connect with Mongo Shell'. 
* Download the package and store files in a location in your computer.
* Open a terminal and go to the location where you placed your files. And then go into 'bin' folder (using 'cd').
* Under the section - 'Connect via the Mongo Shell', click on 'Short SRV connection string (3.6+ shell)' (or whichever is the lastest shell the time).
* Copy the command and paste it into your terminal and run. Enter your password when prompted.

### Accessing database
* Once logged-in, use command ```use <database-name>```
* Command:
    * ```help```: to see all availoable commands
    * ```show collections```: to all collections in the database (like tables in the SQL database).

### Time Difference using 'moment'
For documentation on moment:
```https://www.npmjs.com/package/moment```

#### Installing moment: 
```npm install --save moment```
