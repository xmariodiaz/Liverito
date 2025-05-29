Liverito App
```Step 1```
npm install --save-dev tsx **I didnt have tsx**
Initialize the Next.js Project with TypeScript
npx create-next-app@latest liverito --typescript

✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/Mari00000/test/liverito.

```Step 2```
Install dependencies ORM 
npm install drizzle-orm pg
npm install -D drizzle-kit
npm install drizzle-kit@latest

npm install @neondatabase/serverless

touch root.../drizzle.config.ts
npm install --save-dev @types/dotenv 
npm install dotenv **I had to install this dependency because is not in node package ORM**

**For documentation**
npm install next-swagger-doc
npm install mobx
npm install redoc
npm install swagger-ui-react
npm i -D @types/swagger-ui-react

npm install styled-components
npm install --save-dev @types/styled-components


**UI**
npm i ui-button

```Step 3```
Registered domain in godaddy liverito.com
Added mx records improvmx.com  in godaddy for email forwarding

```Step 4```
Created neon account using admin1@liverito.com
Created the DB and place the link into the  .ENV
Created schema Cile (src/db/schema.ts) **contents the db schema**

generate schema 
```sh 
npm run drizzle:generate
```

apply migrate the schema;
```sh 
npx drizzle-kit migrate
```
OR 
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```
once the seeds are full send the data to the tables:
```json
//added to package.json
"seed": "tsx db/scripts/seed.ts"
```
then run:
npm run seed

**Note** if anything goes wrong, drop tables, then re-generate and re-seed:
https://console.neon.tech/
```sql 
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```


```Step 5 ```
backend api
check Postman package the api does not have a key

```Step 6 ```
frontend card and color codes:

pending	 =  Waiting / Attention	-- text-yellow-500	#F59E0B ⏳
assigned =	In Progress	        -- text-blue-500	#3B82F6 🤖
picked_up =	On the Way	        -- text-purple-500	#8B5CF6 🚚
delivered =	Almost Done	        -- text-green-500	#10B981 📦
completed =	Done / Success	    -- text-gray-500	#6B7280 ✅

| Status      | Emoji | Suggested Color | Tailwind Class     | Hex Code  |
| ----------- | ----- | --------------- | ------------------ | --------- |
| `pending`   | ⏳     | Soft Amber      | `text-amber-400`   | `#FBBF24` |
| `assigned`  | 🤖    | Cool Sky Blue   | `text-sky-400`     | `#38BDF8` |
| `picked_up` | 🚚    | Purple Indigo   | `text-indigo-500`  | `#6366F1` |
| `delivered` | 📦    | Leafy Green     | `text-emerald-500` | `#10B981` |
| `completed` | ✅     | Slate Gray      | `text-slate-500`   | `#64748B` |


```Step 7```
**Components**
npm i react-leaflet
npm install leaflet react-leaflet


npm install -D @types/google.maps