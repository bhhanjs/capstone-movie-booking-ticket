# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React Project: movie - booking - ticket
- This project is built using Vite and React
- The style css: Tailwind + Shadcn
- Router: react-router-dom@6
- Call api: axios
- Store data: redux toolkit
- Helper call API: tanstack query
- Managing form: React hook form + yup

## UI preference
- Admin page: https://templates.iqonic.design/streamit-dist/dashboard/html/movie/movie-list.html
- website: https://forum-movie.net/yamagata
- website: https://www.showcasecinemas.com
- website: https://www.pathe.fr/en


## Project description
Dự án đặt vé xem phim gồm 2 phần:
1. Phần giao diện khách hàng
- Trang chủ 
- Trang chi tiết
- Trang đặt vé
- Trang đăng ký/ đăng nhập
2. Phần giao diện quản trị (optional 😂 )
- Trang quản lý phim (delete/ edit)
- Trang thêm phim

## Folder structure
In src:
1. apis: for the api calls
a. apiCalls folder: contains all the api calls
b. fetcher.js

2. assets: images

3. components:
a. ui: tạo bởi shadcn for shadcn components installed
b. shared: components được tạo ra để tái sửu dụng trong project
c. layouts: for the layouts
+ auth-layout folder
+ dashboard-layout folder
+ home-layout folder

4. constants: lưu trữ static variables 
+ config.js
+ role.js

5. hooks: custom hooks

6. lib: tạo bởi shadcn

7. pages: lưu trữ trang
+ Home-movie-list folder: movie list (layout homepage)
+ movie-details folder: movie detail (layout homepage)
+ auth folder: login page (layout authen)
+ auth folder: sign in page (layout authen)
+ admid folder

8. routes: lưu trữ đường dẫn
+ elements.jsx
+ paths.js

9. store: redux store
+ slices folder
+ store file

10. utils: functions tái sử dụng


## Logics
1. Register
+ To book the ticket => login => register
+ Get form data by React hook form 
+ Validation with yup - schema
+ Fetch API Post method by tanstack query
+ Handle data flow in onSuccess and onError

2. Login
+ Get form data by React hook form
+ Validation with yup - schema
+ Fetch API Post method by tanstack query
+ API send back a response 
+ Login Success => data response will be the data of the user => handle in onSucess => store data in the redux store and local Storage => Go back to the home page or re-direct to the previous page which need the authenticate
+ Login Fail => data response will be an error => handle in onError => Display UI to user 


3. Ticket Room
+ When user get into the ticket room => get user data in the redux store to check if user login yet
+ Create a component ProtectedRoute which wrap around the ticket room page
+ In the component: get the user data from redux store to check
a. if not
- Re-direct user to login 
- Display a toast 
- when the user login already, re-direct back to the previous authenticated page
b. if yes
- Fetch API to render the page
c. Where to store the data:
+ userInfor & token: Redux + localStorage : for authen persistence
+ seat map data: Redux : for temporary show time
+ selected seats (before confirm): useState or Redux : local state for the simple or redux if need to use in somewhere else
+ final booking: send to API only : server will handle the actual booking

## Notes for team
- font setup: Roboto

