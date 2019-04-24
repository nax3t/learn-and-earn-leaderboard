# learn-and-earn-leaderboard

## Tasks

- [ ] Models
	- [ ] User (only for admin, use passport-local-mongoose)
		- [ ] isAdmin: Boolean
	- [ ] Week
		- [ ] date-range: String (select a date, turn into string, show start and end of week e.g., April 22 - [ ] 28)
		- [ ] winners: [
			{
				name: String,
				place: String (1st, 2nd, 3rd)
			}
		]
		
- [ ] Views
	-	[ ] Landing/Home (show previos week winners)
	- [ ] About (show info about contest, link to Discord)
	- [ ] Weeks/Index (all existing week documents, paginated)
	- [ ] Weeks/Show (single week document)
	- [ ] Admin/Login (admin dashboard login, redirect to /admin/weeks)
	- [ ] Admin/Weeks/Index (isAdmin middleware protected, all existing week documents, paginated, tabular format, admin can edit/delete)
	- [ ] Admin/Weeks/New (admin can create a new week document)
	- [ ] Admin/Weeks/Edit (admin can edit an existing week document)

- [ ] Routes
	- [ ] GET /
	- [ ] GET /about
	- [ ] GET /weeks
	- [ ] GET /weeks/:id
	- [ ] GET /admin/login
	- [ ] POST /admin/login
	- [ ] GET /admin/weeks/new
	- [ ] POST /admin/weeks
	- [ ] GET /admin/weeks
	- [ ] GET /admin/weeks/:id/edit
	- [ ] PUT /admin/weeks/:id/
	- [ ] DELETE /admin/weeks/:id/