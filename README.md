# MERN FrontEnd React application

React application for managing Movies and Series hosted in a MongoDB.


## Steps to deploy

* Create environment file `.env.local` and add the [MERN backend](https://github.com/lichblitz/mern-backend) host variable
  - ``REACT_APP_BASE_URL=http://localhost:8080``
* Run `npm i` to install dependencies.
* Run `npm start` to run the app

## App details
- Created with `npx create-react-app` and improved with `react-app-rewired` dependency.
- Project architecture is an aproach to the Clean Architecture concepts.


```json
{
    "compilerOptions": {
        "target": "es6", // Target ECMAScript version (ES6 and above)
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ], // List of library files to be included in the compilation
        "jsx": "react", // Use React JSX for rendering
        "module": "esnext", // Specify the module system (ES modules)
        "esModuleInterop": true, // Enable compatibility with CommonJS imports
        "strict": true, // Enable all strict type-checking options
        "skipLibCheck": true, // Skip type checking of declaration files to improve performance
        "forceConsistentCasingInFileNames": true, // Ensure consistent casing for file names
        "noImplicitAny": true, // Disallow implicit 'any' types
        "strictNullChecks": true, // Enable strict null checks
        "strictFunctionTypes": true, // Enable strict checking of function types
        "strictPropertyInitialization": true, // Enable strict property initialization checks
        "noUnusedLocals": true, // Report errors on unused variables
        "noUnusedParameters": true, // Report errors on unused function parameters
        "noImplicitReturns": true, // Report error when not all code paths return a value
        "noFallthroughCasesInSwitch": true, // Report errors for fallthrough cases in switch statements
        "baseUrl": ".", // Base directory to resolve non-relative module names
        "paths": {
            "@/*": [
                "src/*"
            ] // Add aliases for absolute imports
        }
    },
    "include": [
        "src"
    ], // List of files to include in the compilation
    "exclude": [
        "node_modules",
        "build"
    ] // List of files to exclude from the compilation
}
```