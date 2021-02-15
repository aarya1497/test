class Chain{

    constructor(first,second){
    var op={

        bodyA: first,
        bodyB: second,
        stiffness: 0.03,
        length: 15

    }


    this.body = Constraint.create(op);
    World.add(world,this.body);

}




}