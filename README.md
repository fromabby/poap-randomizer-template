## To initialize poap database

1. Clone `main` into your device.
2. Create a new branch.
3. Create an `.env` file in the root folder.

Add `DATABASE_URL` generated from mongodb
Format: "mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.wgsus.mongodb.net/<DATABASE_NAME>"

4. Go to `src/links.json` and populate the links.
   Note: Do not change the structure of the JSON. Only insert the records inside `"poap_links": []`.

Each POAP link record should contain:
`{
  link: string
  claimed: boolean
}`

5. In the console, run `npm run dev` to be in `development` mode
6. In the browser, enter `localhost:3000/api/populate` in the address bar.
