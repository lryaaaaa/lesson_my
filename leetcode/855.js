var ExamRoom = function(n) {
       this.n=n;
       this.students=[];
};
ExamRoom.prototype.seat = function() {
       if(this.students.length===0){
        this.students.push(0);
        return 0;
       }
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {

};