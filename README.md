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
- Link server: https://movienew.cybersoft.edu.vn/swagger/index.html

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


## Notes for team
- font setup: Roboto
