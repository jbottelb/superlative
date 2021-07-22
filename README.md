# Superlative Voter

#### By Josh Bottelberghe

Link to production:
https://ndsuperlativevoter.netlify.app/

Link to repo
https://github.com/jbottelb/superlative

Basically, one person creates a voting form.
They give it a name to be accessed from. They
also list a bunch of people that will be in the form.
Then anyone can access the form and vote. The creator may then view the
form and see who is winning.

The only person who uses authentification is the person who creates the form. Then only they can view the form.

Future work:

- log devices to present voting multiple times
- let creators do more with resultant data and print results

Both the component Tree diagram and UML are in the public folder

Known Errors:

- There are no restrictions to voting multiple times
  Fix: there would have to be some logging of who has voted. One idea is to use voter keys

## DB:

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
