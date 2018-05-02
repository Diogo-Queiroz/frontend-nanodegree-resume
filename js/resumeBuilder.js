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
var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);