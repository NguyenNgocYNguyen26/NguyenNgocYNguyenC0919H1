

let Apple = function() {
    this.weight = 2;
    this.setWeigh = function () {
        return this.weight;
    }

    this.decrease = function () {
        if (this.weight > 0)
            return this.weight = this.weight - 0.2;
        else
            return 0;
    }
    this.isEmpty = function () {
        if (this.weight > 0) {
            return false;
        } else {
            return true;
        }
    }
}