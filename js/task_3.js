const medicines = {
  'Агалгін': new Date("2022-05-01"),
  'Ношпа': new Date("2025-07-02"),
  'Альфахолін': new Date("2024-12-21"),
  'Аспірин': new Date("2022-08-15"),
  'Аспаркам': new Date("2024-04-18"),
};

const createArrayOfKeys = (obj) => {
    return Object.keys(obj);
}

const deleteOutOfDateMedicines = (obj) => {
    const copyObj = {...obj};
    const currentDate = new Date();
    for (let key in copyObj) {
        if (copyObj[key] < currentDate) {
            delete copyObj[key];
        }
    }
    return Object.keys(copyObj);
}

const getReadyToUseMedicinesWithDates = (obj) => {
    const copyObj = {...obj};
    const currentDate = new Date();
    for (let key in copyObj) {
        if (copyObj[key] < currentDate) {
            delete copyObj[key];
        }
    }
    return Object.entries(copyObj);

}

const sortMedicines = (obj) => {
    const readyToUseMedicines = getReadyToUseMedicinesWithDates(obj);
    return readyToUseMedicines.sort((a, b) => a[1] - b[1]);
}

console.log(createArrayOfKeys(medicines)); // ['Агалгін', 'Ношпа', 'Альфахолін', 'Аспірин', 'Аспаркам']
console.log(deleteOutOfDateMedicines(medicines)); // ['Ношпа', 'Альфахолін']
console.log(sortMedicines(medicines)); // [['Ношпа', '2025-07-02'], ['Альфахолін', '2024-12-21']]
