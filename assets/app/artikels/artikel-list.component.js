"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artikel_model_1 = require("./artikel.model");
var ArtikelListComponent = (function () {
    function ArtikelListComponent() {
        this.artikels = [
            new artikel_model_1.Artikel('Die', 'Biologie'),
            new artikel_model_1.Artikel('Das', 'Englisch'),
            new artikel_model_1.Artikel('Die', 'Kunst'),
            new artikel_model_1.Artikel('Der', 'Sport')
        ];
        this.score = 0;
        this.artikels = this.shuffleAndReturnSubsetOfArray(this.artikels, 3);
    }
    ArtikelListComponent.prototype.myValueChange = function (event) {
        if (event.result == "correct") {
            this.marking[event.wort] = 1;
        }
        else {
            this.marking[event.wort] = 0;
        }
        this.recalculateScore();
    };
    ArtikelListComponent.prototype.recalculateScore = function () {
        var newScore = 0;
        for (var key in this.marking) {
            newScore += this.marking[key];
        }
        this.score = newScore;
    };
    ArtikelListComponent.prototype.shuffleAndReturnSubsetOfArray = function (array, numofSubset) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        var subset = array.slice(0, numofSubset);
        return subset;
    };
    return ArtikelListComponent;
}());
ArtikelListComponent = __decorate([
    core_1.Component({
        selector: 'ger-artikelList',
        template: "\n  <div class=\"col-md-6 col-md-offset-3\">\n  <h2 style=\"text-align: center;\">Artikel Quiz</h2>\n  <br />\n    <ger-artikel\n      [artikel]=\"artikel\"\n      *ngFor=\"let artikel of artikels\"\n      (parentChange)=\"myValueChange($event);\"\n      >\n    </ger-artikel>\n\n    <p>Score: {{ score }}  / {{ artikels.length }} </p>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ArtikelListComponent);
exports.ArtikelListComponent = ArtikelListComponent;
