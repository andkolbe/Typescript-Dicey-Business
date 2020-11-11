var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = Math.floor((Math.random() * 6) + 1); //prevents 0 from occuring
        this.div = $("<div class=\"square\">" + this.value + "</div>");
        $('.square-container').append(this.div);
        this.div.click(function () {
            _this.roll();
        });
        this.div.dblclick(function () {
            _this.div.remove();
            var eachDie = Die.collection.indexOf(_this);
            Die.collection.splice(eachDie, 1);
        });
        Die.collection.push(this);
    }
    Die.rollEmUp = function () {
        Die.collection.forEach(function (die) { return die.roll(); }); //rolls through every individual die in the array
    };
    Die.addEmUp = function () {
        var answer = Die.collection.reduce(function (total, die) { return (total + die.value); }, 0); // doesn't work with diceArray HALP
        alert(answer);
    };
    Die.prototype.roll = function () {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value); //reflects new internal value
    };
    Die.collection = []; //placeholder for dice
    return Die;
}());
$('.generate').click(function () { return new Die(); }); //pushes new die onto array with every click
$('.reroll').click(function () { return Die.rollEmUp(); });
$('.sum').click(function () { return Die.addEmUp(); });
