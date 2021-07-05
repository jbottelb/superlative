Basically, one person creates a voting form.
They give it a name, and an access password. They
also list a bunch of people that will be in the form.
Then, each person uses the access password to get into the form,
selects their name from the list of members then votes. Once they vote,
they are recorded as having voted to prevent anyone from voting again.

The only person who uses authentification is the person who creates the form.

DB: (this probably looks awful in md)
Table users {
id int [pk, increment] // auto-increment
username varchar
password varchar
email varchar
created_at timestamp
country_code int
}

Table form {
code int \[pk\]
members []
creator varchar
GroupName varchar
Password varchar
data array
}

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: U.username < form.creator
