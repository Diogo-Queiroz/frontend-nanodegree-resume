/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$('#main').append('Diogo Fernandes de Queiroz');
// var awesomeThoughts = "I am Diogo Queiroz and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').append(funThoughts);
var name = 'Diogo Fernanes de Queiroz';
var role = 'Web Developer / Game Programmer';
var skills = ['programming', 'unreal engine', 'C++', 'JavaScript'];
var bio = {
    "name": name,
    "role": role,
    "contact": 'diogoqueirooz1212@gmail.com',
    "picture_URL": "../images/fry.jpg",
    "age": 30,
    "skills": skills
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedContact = HTMLcontactGeneric.replace('%data%', bio.contact);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture_URL);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedContact);
$('#header').prepend(formattedBioPic);