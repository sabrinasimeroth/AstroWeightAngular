angular
  .module('astroApp', [])
  .controller('wghtCalc', wghtCalc);

  function wghtCalc(){
    var vm = this;

    vm.product = "Your weight will be displayed here"
    vm.planets = [
      ['Pluto', 0.06],
      ['Neptune', 1.148],
      ['Uranus', 0.917],
      ['Saturn', 1.139],
      ['Jupiter', 2.640],
      ['Mars', 0.3895],
      ['Moon', 0.1655],
      ['Earth', 1],
      ['Venus', 0.9032],
      ['Mercury', 0.377],
      ['Sun', 27.9]
    ];

    vm.math = function math() {
      vm.product = 'You would weigh ' + (vm.gravity * vm.weight);
	  }

}
