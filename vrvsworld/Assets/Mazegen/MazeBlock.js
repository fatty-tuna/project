#pragma strict

public class MazeBlock{
	public var sides : int[];
	public var marked : boolean = false;
	public var full : boolean = false;
	private var size : int = 6;
	
	public function MazeBlock(){
	
	}
	
	function initialize(){
		sides = new int[4];
		sides[0] = Random.Range(0,2);
		sides[1] = Random.Range(0,2);
		sides[2] = Random.Range(0,2);
		sides[3] = Random.Range(0,2);
	}

	function correct(sur : MazeBlock[]){
		//Check block above if there is an obtrusive wall
		if(sur[0].sides[2] != 0){
			sides[0] = 1;
		}
		
		//Check block to the right if there is an obtrusive wall
		if(sur[1].sides[3] != 0){
			sides[1] = 1;
		}
		
		//Check block below if there is an obtrusive wall
		if(sur[2].sides[0] != 0){
			sides[2] = 1;
		}
		
		//Check block to the left if there is an obtrusive wall
		if(sur[3].sides[1] != 0){
			sides[3] = 1;
		}
		
		//Check if the block is now 4 walls and fills the block if it is
		if(sides[0] && sides[1] && sides[2] && sides[3]){
			full = true;
		}else{
			full = false;
		}
	}

	function fill(){
		sides = [1,1,1,1];
		full = true;
	}

	function setWalls(values : int[]){

		//Replace sides with values
		if(values.length == 4){
			sides = values;
		}
		
		//Check if the block is now 4 walls and fills the block if it is
		if(sides[0] && sides[1] && sides[2] && sides[3]){
			full = true;
		}else{
			full = false;
		}
		
	}
}


