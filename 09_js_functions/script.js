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
  
  const getImc = (weight, height) => (weight / ((height/100) ** 2)).toFixed(2);

  for(let patient of patients){
    alert(`Paciente ${patient.name} possui IMC de: ${getImc(patient.weight, patient.height)}`);
  }

 