# Superlative Voter

#### By Josh Bottelberghe and Macklin Freitag

Basically, one person creates a voting form.
They give it a name, and an access password. They
also list a bunch of people that will be in the form.
Then, each person uses the access password to get into the form,
selects their name from the list of members then votes. Once they vote,
they are recorded as having voted to prevent anyone from voting again.

The only person who uses authentification is the person who creates the form.

The changelog states all features that are functional.

## How we do on the feature 4 rubric:

Submitted on time: yes\
Formatting: yes (could use a couple more comments)\
Formtting 2: yes (anything new need to be added to changelog)\
No Errors: yes (for the features for this part)\
Webpack: yes\
Tree Diagram: yes (in public)\
Load Data: yes (voter form can be loaded from ID)\
Parse Initialized: yes\
Parse models in external folders: yes\
Rule of 10: Yes, forms are broken down into awards and candaidate\
UML: Yes (in public)

Both the component Tree diagram and UML are in the public folder

## DB: (this probably looks awful in md)

Table users {\
id int [pk, increment] // auto-increment\
username varchar\
password varchar\
email varchar\
created_at timestamp\
country_code int\
}

Table form {\
// Creating tables\
Table users as U {\
id int [pk, increment] // auto-increment\
username varchar\
password varchar\
email varchar\
created_at timestamp\
}

Table form {\
code int [pk]\
creator varchar\
GroupName varchar\
Password varchar\
}

Table award {\
awardCode int [pk]\
formCode int\
title varchar\
candadites array\
}

Table candidate {\
awardCode int\
name varchar\
votes int\
}

Ref: U.username < form.creator\
Ref: form.code < award.formCode\
Ref: award.awardCode < candidate.awardCode
