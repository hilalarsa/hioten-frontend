# Boilerplate Next.js
This boilerplate I create based on current project that I've done. I setting up the unit-test and coverage, git-action, docker, eslint, nginx, envar, sonar,material-ui redux, custom error page, custom css, custom theme, babel, axios and etc.

## Base
    next 9.5.3
    react 16.13.1
    react-dom 16.13.1
    
## Environment Variable
put your local environment variable at `.env.local` file then use it on `next.js.config`
optional : also add it on Dockerfile if you want to inject the envar at docker image build time using argument (example provided inside Dockerfile)

## Code
Create your page inside `/pages` folder. 
example `/pages/detail-tagihan/index.js` this page is automatically have routing, so you can access directly on `localhost:3000/detail-tagihan`

## Global App Setting
I provided file `pages/_app.js` to setting everything that will be used globally such as global css, title, redux, and theme

## Global Document Setting
The document that used to setting meta, link-rel, pwa color, appname, icon and etc could be found at `pages/_document.js

## Custom 404
Custom the 404 pages by edit `/pages/404.js`

## Custom Style (CSS and Material Theme)
Create the custom style inside `/src/css/custom-style.css` access this syle at needed element using `className`

## Redux
Redux setting is provided, the example is I create global snackbar that can use in every page and it's sticky to the _app.js.
create new redux file:
1. create folder inside `/redux/` example `/redux/user`
2. create `action.js` and `reducer.js` file
3. combine your reducer inside the `/redux/index.js`
 
See the existing file to know more.

## Unit Testing
    enzyme 3.11.0
    enzyme-adapter-react-16 1.15.2
    jest 26.1.0
    jest-localstorage-mock 2.4.3
    jest-sonar-reporter
Create your unit test file inside folder `__tests__` with prefix `<name>.test.js`. Start your unit testing code based on enzyme and jest rule.
__Unit test npm command :__
| command | desc |
| ------ | ------ |
| "test": "jest" | do a test on active file, or you can use button test on the left IDE |
| "test:watch": "jest --watch" | active test after amout of time or after your change in unit test file saved |
|  "test:coverage": "jest --coverage"| generate test coverage file (also test report for sonarcloud/sonarqube coverage, find on `/coverage/` |

## Github Action (CICD)
I provided github action inside `/.github/workflows/workflow.js.yml`
This action have some jobs, I give comment in every line so look by yourself.
The action is :
  - build apps, 
  - test, 
  - push to sonarcloud (sepulsa), 
  - build docker image and push to staging (google cloud k8s), 
  - build image and push to production (google cloud k8s).
 
9 September 2020
Thankyou