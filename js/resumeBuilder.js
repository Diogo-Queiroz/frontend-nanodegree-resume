/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$('#main').prepend('Diogo Fernandes de Queiroz');
// var awesomeThoughts = "I am Diogo Queiroz and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').prepend(funThoughts);
var name = 'Diogo Fernanes de Queiroz';
var role = 'Web Developer / Game Programmer';
var contacts = {
    'email': 'diogoqueirooz1212@gmail.com',
    'mobile': '+5561992528778',
    'twitter': '@diogo-games',
    'github': 'Diogo-Queiroz',
    'blog': 'https://www.diogoqueiroz.com',
    'location': 'Brasília/DF'
};
var welcomeMessage = 'Be welcome to my amazing resume build it with Javascript';
var skills = ['programming', 'unreal engine', 'C++', 'JavaScript'];
var biopic = './images/fry.jpg';
var display = function display() {
    return 0;
};

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);
var formattedBioPic = HTMLbioPic.replace('%data%', biopic);
var formattedMobile = HTMLmobile.replace('%data%', contacts['mobile']);
var formattedEmail = HTMLemail.replace('%data%', contacts['email']);
var formattedTwitter = HTMLtwitter.replace('%data%', contacts['twitter']);
var formattedGithub = HTMLgithub.replace('%data%', contacts['github']);
var formattedBlog = HTMLblog.replace('%data%', contacts['blog']);
var formattedLocation = HTMLlocation.replace('%data%', contacts['location']);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', welcomeMessage);
var formattedSkills = HTMLskills.replace('%data%', skills);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMessage);
$('#header').append(formattedSkills);
$('#topContacts').append(formattedMobile);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedTwitter);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedBlog);
$('#topContacts').prepend(formattedLocation);