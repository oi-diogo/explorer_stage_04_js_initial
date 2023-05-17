const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 190,
    },
    {
      name: "Alexandra",
      age: 27,
      weight: 70,
      height: 170,
    },
    {
      name: "Carlos",
      age: 42,
      weight: 90,
      height: 180,
    },
  ]
  
  let patientsNames = []
  
  for(let patient of patients) {
    patientsNames.push(patient.name);
  }
  
  alert(`Os pacientes registrados são: ${patientsNames[0]}, ${patientsNames[1]}, ${patientsNames[2]}`);
  
for(let patient of patients){
    alert(
        `Os dados do ${patient.name}, são:
        Idade: ${patient.age} anos
        Peso: ${patient.weight} Kg
        Altura: ${patient.height} cm`
      );
}
 