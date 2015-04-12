#pragma strict

var walls:GameObject[];
var activatedWalls:int[];

//this runs in the editor, when things change
function OnValidate() {
	UpdateVisibility();
}

function UpdateVisibility() {
	for(var i=0; i<walls.Length; i++) {
		SetVisibility(walls[i],activatedWalls[i]);
	}
}

//this will set the visibility of an object. (any object)
function SetVisibility(target:GameObject, setting:int) {
	target.GetComponent.<Renderer>().enabled=setting?true:false;
	target.GetComponent.<Collider>().enabled=setting?true:false;
}
