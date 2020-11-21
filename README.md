# RPG: Adventurer's Academy

# Table of Contents
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology](#technology)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General Info
The RPG: Adventurer's Academy is a fun and interactive learning tool designed to teach people who have never
played a role playing game how to do just that. The application is presented as a fun fantasy scholastic adventure which educates the user in RPG basics such as class differences, race strength and weaknesses, and the basics of role-playing. 

"Within the halls of the RPG: Adventurer’s Academy, you will be given the opportunity to learn the basic steps of any table-top RPG such as going on the offensive, casting powerful spells, and evading traps.

All prospective students will be granted access to our Audit-Mode.

While in Audit-Mode, prospective students will be able to study the Fighter, Wizard, and Rogue classes with a generic setup.

If you wish to further your RPG education and gain access to all our Academy's features, such as character creation, weapon and spell selection and host your own campaigns, please register."

**Please visit [https://dndbuddy3.herokuapp.com/](https://dndbuddy3.herokuapp.com/) for the site.**

For the feature of the site, please visit the [Features](#features) section for more details.

# Features
RPG: Adventurer's Academy contains the following features:

1. User Registration and Login
    1. User will initially arrive at our login page, where they can gain entry to our character sheet by entering their email and password. 
    2. If the user is new to our site they will need to register first and the button to register is clearly displayed on the login page.

2. Central Landing Hub
    1. The User will be able to select a variety of options:
        1. Create New Character
        2. Load Saved Character
        3. Dungeon Master (In Development)
    2. Future developments for this page include:
        1. Character Training Rooms
        2. Classrooms for learning about specific RPG facets
        3. Quiz Halls.

2. Creating Character
    1. User can follow our series of modals to generate character sheet.
   
3. Editing Character
    1. At anypoint the user can change their character by double clicking the element of their character they would like to edit.
    2. User can add or subtract character hitpoints determined by campaign play.

4. Saving Character
    1. After creating or editing their character the user has the option to save their character to our database, which will allow them to use the same character for multiple RPG sessions and campaigns.
    2. Additionally, generating a new character and not saving will allow the user to play a one off campaign but return to their main character later.
    3. Eventually we will allow up to 3 characters to be saved using our MongoDb system. 

3. Charcter Image, Stats, Skills and Weapons
    1. Character's image, stats, skills and weapons will be dynamically generated based on their characters gender, race and class.
    2. If user edits their character, intuitively the application will regenerate the appropriate image, stats, skills and weapons.

4. Dice Roll
    1. User can click on any one of six dice images, all which are used during Dungeons and Dragons campaign play, to generate a random roll.
    2. Each click will produce a dice rolling sound for an enhanced user experience.

5. Help Guides
    1. User has access to multiple help guides through out the application.
    2. Help guides have been placed strategically, where the user is likely to look for them. On mobile screens many of the help guides have been aggregated and can be found by clicking on User Guide in the top left corner.
    3. Guides will provide game definitions to assist beginners with campaign play as well as guides to how the site functions which all users may find beneficial to help them navigate our site.

# Screenshots

# Version 3.0

Desktop:

![screenshotmd](/public/assets/welcome.png?raw=true)

![screenshotmd](/public/assets/gender.png?raw=true)

![screenshotmd](/public/assets/class.png?raw=true)

![screenshotmd](/public/assets/race.png?raw=true)

![screenshotmd](/public/assets/login.png?raw=true)

![screenshotmd](/public/assets/audit.png?raw=true)


# Version 2.0

![screenshotmd](/public/assets/screenshot_large.PNG?raw=true)

![screenshotmd](/public/assets/screenshot_medium.PNG?raw=true)

<br>
<br>
<br>



# Code Style
Standard

# Technology
The following technology have been used for this project:

1. Application Programming Interface:
    1. D&D 5th Edition API - to GET and populate useful information on user's character sheet
    2. Our own Mongo and MySQL databases.
   
2. Stylesheets:
    1. Foundation 6
        1. Application Layout - provided the structure for our application
        2. Modals - guide user through initial setup and offer help and definitions during campaign play
        3. Responsive Layout - enhances campaign play by shifting most vital elements where user can readily access them
    2. Google Fonts - used font to indicate where to click in order to display help modals 
    3. Reset CSS - to reset styling setting
    4. Dice Font - to produce dice icons
    5. Font Awesome - used to enhance user experience through campaign appropriate font
   
3. React - To easily add components as we work and help funnel the flow of work.
    Components - 17
    1. ArmorClass
    2. AuditModal
    3. CharacterCreation
    4. CharacterImage
    5. Dice
    6. Grid
    7. Hitpoints
    8. HubModal
    9. NameBanner
    10. NavBlank
    11. NavBottom
    12. NavTop
    13. SavedCharacters
    14. Skills
    15. SpellsAndWeapons
    16. Stats
    17. WelcomeModal

# Status
Project status: Version 3.0 finished. Starting on 4.0

# Future Plan

Plan for the future development of this site:
1. Add additional character classes and races to enhance campaign play.
2. Add the ability to save multiple characters per user.
3. Connect dice rolls to dynamically fill character attributes, hitpoint and armor class values.
4. Create a database for Dungeon Masters that will have include random campaigns and encounters.
5. Give users the ability to access our character sheet without requiring them to register and login.
6. Update when D&D 6th Edition becomes available.
7. Add Classrooms/Lecture Halls
8. Add Quiz section to allow for unlocks
9. Add the ability to save more characters.
10. Make it a mobile app.

# Create By
Created by Chung Hei Fuk, David Deaton, Karl Behrens, Alex Madrigal and William Wassmann
