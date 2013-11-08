
var starship_enterprise = {};

starship_enterprise.series = "TNG";
starship_enterprise.registry = "NCC-1701-D";

starship_enterprise.crew = [
	"Jean-Luc Picard",
	"Will Riker",
	"Geordi La Forge",
	"Worf",
	"Beverly Crusher",
	"Data"
];

document.getElementById("container").innerHTML = starship_enterprise.registry;

for (var i = 0; i<10; i++)
{
	document.getElementById("container").innerHTML = "Iteration " + i;
}