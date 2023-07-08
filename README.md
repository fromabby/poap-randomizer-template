## How to initialize poap database

1. Clone `main` into your device and create a new branch.
2. Create an `.env` file in the root folder.
   - Add `DATABASE_URL` generated from mongodb
   - Format: `mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.wgsus.mongodb.net/<DATABASE_NAME>`
3. Go to `src/links.json` and populate the links.
   > Note: Do not change the structure of the JSON. Only insert the records inside `"poap_links": []`.
   >
   > Eg. "poap_links": ["link_1", "link_2", "link_3", ...other_links]
4. In the console, run `npm run dev` to be in `development` mode
5. In the browser, enter `localhost:3000/api/add` in the address bar.
