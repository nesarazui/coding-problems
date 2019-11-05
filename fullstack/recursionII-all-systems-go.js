You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. Keys represent the name of a system on the spacecraft; values are boolean "true" if the system is "go" for launch and "false" otherwise. Your function should return "true" only if every system is "go" for launch!

let systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

allSystemsGo(systems); // => false

// YOUR CODE BELOW

const allSystemsGo = (object) => {
  let verdict = '';
  for (key in object) { //will go through each key in object
    if (typeof object[key] === 'object') { //if value is another object, go deeper
      verdict = allSystemsGo(object[key])
      if(verdict === true){

      }else if(verdict === false){
        return false;
      }
    }
    //base case
    else { //if value is not an object, it will return either true or false
      if (object[key] === false) { //if final value is false, exit that function instance as false
        return false
      }
      else {
        verdict = true
      }
    }
  }
  return verdict
}
