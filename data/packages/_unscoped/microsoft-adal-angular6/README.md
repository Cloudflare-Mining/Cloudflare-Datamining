# Active Directory Authentication Library (ADAL) for Angular 6+ (Angular 6.X.X and Angular 7.X.X)

This is a wrapper library for Angular 6+ (Angular 6.X.X and Angular 7.X.X) modules over Microsoft ADAL (Azure Active Directory Authentication Library) - [https://github.com/AzureAD/azure-activedirectory-library-for-js](https://github.com/AzureAD/azure-activedirectory-library-for-js) that helps you integrate your web app with Microsoft's AAD (Azure Active Directory) for authentication scenarios.

Working example at [https://github.com/manishrasrani/ms-adal-angular6-example](https://github.com/manishrasrani/ms-adal-angular6-example)

___

For information on how to configure Azure Active Directory refer - [https://docs.microsoft.com/en-us/azure/app-service/app-service-mobile-how-to-configure-active-directory-authentication](https://docs.microsoft.com/en-us/azure/app-service/app-service-mobile-how-to-configure-active-directory-authentication)

<h2>Consumption of the library</h2>

  **Step 1: Install the package**
```bash
npm i microsoft-adal-angular6
```
Also add it to your dependencies section in package.json so that it is restored when you do an npm install.

**Step 2: Import MsAdalModule and configure Adal options**

 In the root module of your application, import the MsAdalModule module.
```bash
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
```
Configure Adal options while importing the module.
```bash
@NgModule({
imports: [
    MsAdalAngular6Module.forRoot({
      tenant: '<YOUR TENANT>',<-------------------------------- ADD
      clientId: '<YOUR CLIENT / APP ID>',<--------------------- ADD
      redirectUri: window.location.origin,
      endpoints: { <------------------------------------------- ADD
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
        ---
        ---
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>', <------ ADD
    }),
    ---
    ---
  ],
  ---
  ---
})
```

In case you need to set configuration values dynamically at runtime, you can also pass a function:
```typescript

export function getAdalConfig() {
  return {
      tenant: '<YOUR TENANT>',
      clientId: '<YOUR CLIENT / APP ID>',
      redirectUri: window.location.origin,
      endpoints: { 
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx",
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
    };
}

@NgModule({
imports: [
    MsAdalAngular6Module.forRoot(getAdalConfig),
  ],
})
```

This might be the case if you need to pass `window.location.origin` as `redirectUri`, since the Angular AOT compiler applies a [special behavior](https://github.com/manishrasrani/ms-adal-angular6/issues/7) when compiling @Decorators.

For a list of all available adal configuration options, refer - [https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/dev/lib/adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/dev/lib/adal.js)

**Step 3: Secure individual routes**

 Use the AuthenticationGuard to secure indivuadual routes in your application. This ensures that users navigating to them must be authenticated with AAD to view them.

Import AuthenticationGuard and add it as a provider in your root module.
```bash
import { AuthenticationGuard } from 'microsoft-adal-angular6';
```

```bash
@NgModule({
    providers: [AuthenticationGuard],
    ---
    ---
})
```
In your routing module, add it to the routes you want to secure - 
```bash
const routes: Routes = [
    { path: '', component: AppComponent, pathMatch:'full', canActivate: [AuthenticationGuard]}
  ]; 
@NgModule({
    imports: [    
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
```

**Step 4 (Optional): Generating resource tokens**

To generate resource level tokens for APIs your website may consume, specify the resources in your endpoints array while injecting adalConfig into MsAdalAngular6Module.
Then to generate token, use acquireToken() of MsAdalAngular6Service- 
 ```bash
constructor(private adalSvc: MsAdalAngular6Service) {
    this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
      console.log(resToken);
    });
```

**Step 5 (Optional): Other properties and methods**

Based on your application needs you could use the below supported properties and methods of adalSvc - 
```bash
this.adalSvc.userInfo // Gives you the complete user object with various properties about the logged in user
```
```bash
this.adalSvc.LoggedInUserEmail // Gets the LoggedInUserEmail
```
```bash
this.adalSvc.LoggedInUserName // Gets the LoggedInUserName
```
```bash
this.adalSvc.RenewToken() // Renews the AAD token
```
```bash
this.adalSvc.logout() // Logs out the signed in user
```


With these steps your application should be up and running with ADAL. 

**Important links**
1. [Azure Active Directory Overview](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-whatis)
2. [Configure Azure Active Directory](https://docs.microsoft.com/en-us/azure/app-service/app-service-mobile-how-to-configure-active-directory-authentication)
3. [Azure Active Directory Pricing](https://azure.microsoft.com/en-in/pricing/details/active-directory/)
4. [Active Directory Authentication Library (ADAL) for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js)
5. [Sample Angular6 app that consumes this library](https://github.com/manishrasrani/ms-adal-angular6-example)
