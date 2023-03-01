/**
 * This function takes the movements array and 4 filters; skill, muscle,
 * difficulty and equipment and returns the filtered version of the movements array
 */
export const filterMovements = (
  movementsArr,
  skill,
  muscle,
  difficulty,
  equipment
) => {
  const filteredArr = movementsArr.filter((movement) => {
    // If the filters are empty or the filters matche the movements properties
    // then that movement can be returned
    if (
      (skill === '' || movement.skilltype.includes(skill)) &&
      (muscle === '' || movement.muscles.includes(muscle)) &&
      (difficulty === '' || movement.difficulty === difficulty) &&
      (equipment === '' || movement.equipments.includes(equipment))
    ) {
      return true;
    }

    return false;
  });

  return filteredArr;
};
