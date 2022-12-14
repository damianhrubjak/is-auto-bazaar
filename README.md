# is-auto-bazaar

Web app, written to fetch and display data from Oracle DB.

---

## technologies

- Backend: Node.JS + Express + Typescript
- Frontend Vite + ReactJS + Tailwind

---

## installation

1. Clone repo
2. Download [`Oracle InstantClient`](https://download.oracle.com/otn_software/nt/instantclient/217000/instantclient-basic-windows.x64-21.7.0.0.0dbru.zip) and extract folder `instantclient_21_7` to `./backend/instantclient_21_7`
3. Then unpack files from wallet zip archive and copy them to `./backend/instantclient_21_7/network/admin`
4. Create `.env` file as a copy of `.env.example` file
5. Set all required credentials - user, password and desired connection string (see `tnsnames.ora` in wallet files)
6. Install all backend's and frontend's dependencies via `npm install`
7. Start project via command `npm run start`
