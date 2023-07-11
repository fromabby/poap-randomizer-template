# POAP Links Randomizer

## What is a POAP?
A POAP, or proof of attendance protocol, is a blockchain-enabled digital souvenir designed to commemorate important events

### How it works
When a user enters the website, the client retrieves an unclaimed link from the database and sets that as the redirect URL.

In the user's POV, they are immediately redirected to the POAP link. The website acts as a middleman to assign a POAP link to the user.

When all the links are claimed, a request to toggle all `claimed: true` records to `claimed: false` is sent and a random link is selected from the pool.

-------------------------

### Populate the database

1. Clone the repository and run `npm install`.
2. Add an `.env` file in the root folder.
   - Add `DATABASE_URL` generated from MongoDB
   - Format: `DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.wgsus.mongodb.net/<DATABASE_NAME>"`
3. Go to `src/links.json` and add your list of links.
   > Eg. ["link_1", "link_2", "link_3", ...other links]
4. In the terminal, run `npm run dev` to be in development mode.
5. In the browser or any API client, send a GET request to `localhost:3000/api/add` to insert the links in the json file.
   > Each link should be unique.
   >
   > A response of `success: true` means that the links were successfully inserted into the database and the webapp is now available to use.


> View all links using the browser or an API client
> 
> /GET: localhost:3000/api/view


> Delete a link using an API client
>
> /DELETE: localhost:3000/api/delete?link={link_to_delete}
